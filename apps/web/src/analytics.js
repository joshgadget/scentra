const readEnv = (key) => String((typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) || '').trim()

const gaId = readEnv('VITE_GA_ID')
const pixelId = readEnv('VITE_META_PIXEL_ID')
const sentPurchases = new Set()

function loadGtag() {
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() { window.dataLayer.push(arguments) }
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId
  document.head.appendChild(script)
  window.gtag('js', new Date())
  window.gtag('config', gaId, { send_page_view: false })
}

function loadPixel() {
  ;(function (f, b, e, v, n, t, s) {
    if (f.fbq) return
    n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = true
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = true
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
  window.fbq('init', pixelId)
  window.fbq('track', 'PageView')
}

export function initAnalytics() {
  if (!gaId && !pixelId) return
  if (gaId && !window.gtag) loadGtag()
  if (pixelId && !window.fbq) loadPixel()
}

export function trackPage(path) {
  if (gaId && window.gtag) window.gtag('event', 'page_view', { page_path: path, page_location: window.location.href })
  if (pixelId && window.fbq) window.fbq('track', 'PageView')
}

export function trackPurchase(order) {
  if (!order || !order.orderNumber) return
  const key = String(order.orderNumber)
  if (sentPurchases.has(key)) return
  const value = Number(order.total) || 0
  sentPurchases.add(key)
  if (gaId && window.gtag) window.gtag('event', 'purchase', { currency: 'NGN', value, transaction_id: key })
  if (pixelId && window.fbq) window.fbq('track', 'Purchase', { value, currency: 'NGN' })
}
