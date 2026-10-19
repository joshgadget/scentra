export const defaultSupportWhatsapp = '07041969346'

export const money = (value = 0) => `₦${new Intl.NumberFormat('en-NG').format(Number(value) || 0)}`

export function stored(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback } catch { return fallback }
}

const digitsOnly = (value) => String(value || '').replace(/[^0-9]/g, '')

export const whatsappNumber = (value) => {
  const digits = digitsOnly(value)
  if (!digits) return ''
  if (digits.startsWith('234')) return digits
  if (digits.startsWith('0')) return `234${digits.slice(1)}`
  if (digits.length === 10) return `234${digits}`
  return digits
}

export const whatsappLink = (number, message) => `https://wa.me/${whatsappNumber(number)}?text=${encodeURIComponent(message)}`

export function orderMessage(order, cart, form, total, coupon) {
  const amount = total ?? order.total
  const lines = [
    `*New Scentra order${order.orderNumber ? ' ' + order.orderNumber : ''}*`,
    '',
    ...cart.map((item) => `- ${item.qty} x ${item.name} (${item.size}) : ${money(item.price * item.qty)}`),
    '',
    `Subtotal: ${money(order.subtotal ?? cart.reduce((sum, item) => sum + item.price * item.qty, 0))}`,
    coupon ? `Promo ${coupon.code}: -${money(coupon.discount)}` : null,
    `Delivery: ${order.deliveryFee ? money(order.deliveryFee) : 'Complimentary'}`,
    `Total: ${money(amount)}`,
    '',
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email}`,
    `Address: ${form.address}, ${form.city}, ${form.state}`,
    form.note ? `Note: ${form.note}` : null,
    '',
    `Payment: bank transfer of ${money(amount)}`,
    'Please send the account details to make payment.'
  ]
  return lines.filter((line) => line !== null).join('\n')
}

export async function api(path, options = {}) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000)
  try {
    const response = await fetch(`/api${path}`, {
      ...options,
      headers:{ ...(options.body ? { 'Content-Type':'application/json' } : {}), ...(options.headers || {}) },
      signal:controller.signal
    })
    const data = response.status === 204 ? null : await response.json().catch(() => ({}))
    if (!response.ok) throw new Error(data?.error || 'Something went wrong. Please try again.')
    return data
  } catch (error) {
    if (error.name === 'AbortError') throw new Error('The request took too long. Please try again.')
    throw error
  } finally {
    clearTimeout(timeout)
  }
}
