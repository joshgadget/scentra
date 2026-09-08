import './extras.css'
import { initAnalytics } from './analytics.js'
export { applyMeta } from './seo.js'
export { TrackOrderPage } from './track-order.jsx'

initAnalytics()

export function deliveryFee({ state = '', subtotal = 0, discount = 0, delivery } = {}) {
  const rules = { enabled: true, freeOver: 75000, lagos: 4000, other: 12000, ...(delivery || {}) }
  const net = Math.max(0, Number(subtotal) - Number(discount))
  if (rules.enabled === false || net >= Number(rules.freeOver || 0)) return 0
  return String(state || '').toLowerCase().includes('lagos') ? Number(rules.lagos) || 0 : Number(rules.other) || 0
}
