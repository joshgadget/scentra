const nativeFetch = window.fetch.bind(window)
const pendingBatches = new Map()

const batchRoutes = new Map([
  ['/api/products', { endpoint:'/api/storefront', key:'products' }],
  ['/api/content', { endpoint:'/api/storefront', key:'content' }],
  ['/api/admin/summary', { endpoint:'/api/admin/dashboard', key:'summary' }],
  ['/api/admin/orders', { endpoint:'/api/admin/dashboard', key:'orders' }],
  ['/api/admin/customers', { endpoint:'/api/admin/dashboard', key:'customers' }],
  ['/api/admin/coupons', { endpoint:'/api/admin/dashboard', key:'coupons' }],
  ['/api/admin/settings', { endpoint:'/api/admin/dashboard', key:'settings' }]
])

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))

async function fetchWithTimeout(input, init = {}) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000)
  try {
    return await nativeFetch(input, { ...init, signal:controller.signal })
  } finally {
    clearTimeout(timeout)
  }
}

async function reliableFetch(input, init = {}) {
  const method = String(init.method || 'GET').toUpperCase()
  const attempts = method === 'GET' ? 2 : 1
  let lastError

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetchWithTimeout(input, init)
      if (response.status < 500 || attempt + 1 === attempts) return response
    } catch (error) {
      lastError = error
      if (attempt + 1 === attempts) throw error
    }
    await wait(350 * (attempt + 1))
  }

  throw lastError || new Error('Unable to reach the store')
}

function jsonResponse(value, source) {
  return new Response(JSON.stringify(value), {
    status:source.status,
    statusText:source.statusText,
    headers:{ 'Content-Type':'application/json; charset=utf-8' }
  })
}

window.fetch = async (input, init = {}) => {
  const method = String(init.method || 'GET').toUpperCase()
  if (method !== 'GET') return reliableFetch(input, init)

  const url = new URL(typeof input === 'string' ? input : input.url, window.location.origin)
  const route = batchRoutes.get(url.pathname)
  if (!route) return reliableFetch(input, init)

  const authorization = new Headers(init.headers).get('Authorization') || ''
  const batchKey = `${route.endpoint}:${authorization}`
  let pending = pendingBatches.get(batchKey)

  if (!pending) {
    pending = reliableFetch(route.endpoint, { headers:init.headers }).then(async (response) => ({
      response,
      data:await response.clone().json().catch(() => ({ error:'Unable to load store data' }))
    }))
    pendingBatches.set(batchKey, pending)
    setTimeout(() => pendingBatches.delete(batchKey), 1000)
  }

  const { response, data } = await pending
  return jsonResponse(response.ok ? data[route.key] : data, response)
}
