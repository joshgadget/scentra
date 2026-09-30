// Scentra transactional email: branded templates rendered to inline-styled HTML and delivered
// through the Brevo transactional email API (https://developers.brevo.com).

const sans = "Helvetica,'Helvetica Neue',Arial,sans-serif"
const serif = "Georgia,'Times New Roman',serif"
const colors = { red:'#a30000', ink:'#272d45', slate:'#677279', border:'#e6e2da', cream:'#f7f3e9', canvas:'#f5f5f3', green:'#0f7b3f', greenSoft:'#e6f5e9', amber:'#8a5a00', amberSoft:'#fdf3e2', greySoft:'#efeef0' }

const brevoKey = () => String(process.env.BREVO_API_KEY || '').trim()
export const emailConfigured = () => Boolean(brevoKey())
export const emailStatus = () => ({ provider:brevoKey() ? 'brevo' : 'none', ready:emailConfigured() })

export const supportEmail = () => process.env.SUPPORT_EMAIL || 'hello@scentra.co'
const fromAddress = () => process.env.EMAIL_FROM || 'Scentra <scentraofficialhq@gmail.com>'
const replyToAddress = () => process.env.EMAIL_REPLY_TO || senderAddress().email
const storeUrl = () => (process.env.APP_URL || (process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:5173')).replace(/\/+$/, '')

const money = (amount) => `NGN ${new Intl.NumberFormat('en-NG').format(Number(amount) || 0)}`
const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[character]))
const formatDate = (value) => {
  const date = value ? new Date(value) : new Date()
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-NG', { day:'numeric', month:'long', year:'numeric' })
}
const firstName = (order) => String(order?.customerName || '').trim().split(/\s+/)[0] || 'there'
const addressLine = (order) => {
  const address = order?.shippingAddress
  if (!address) return ''
  if (typeof address === 'string') return address
  return [address.address, address.city, address.state].filter(Boolean).join(', ')
}
const paymentMethodLabel = (channel) => ({ card:'Card payment', bank:'Bank payment', bank_transfer:'Bank transfer', ussd:'USSD', qr:'QR payment', mobile_money:'Mobile money' }[String(channel || '').toLowerCase()] || 'Paystack checkout')

const css = {
  bodyText:`font-family:${sans};font-size:15px;line-height:1.75;color:${colors.ink};margin:0 0 16px;`,
  eyebrow:`font-family:${sans};font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:${colors.red};margin:0 0 10px;`,
  heading:`font-family:${serif};font-size:30px;line-height:1.25;font-weight:400;color:#111111;margin:0 0 18px;`,
  small:`font-family:${sans};font-size:12px;line-height:1.7;color:${colors.slate};margin:0;`
}

const chip = (label, tone = 'green') => {
  const tones = { green:{ background:colors.greenSoft, color:colors.green }, red:{ background:'#fbeaea', color:colors.red }, amber:{ background:colors.amberSoft, color:colors.amber }, grey:{ background:colors.greySoft, color:colors.slate } }
  const style = tones[tone] || tones.green
  return `<span style="display:inline-block;font-family:${sans};font-size:11px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:${style.color};background:${style.background};padding:6px 12px;">${escapeHtml(label)}</span>`
}

const button = (href, label) => `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:26px 0 6px;"><tr><td style="background:${colors.red};"><a href="${escapeHtml(href)}" style="display:inline-block;padding:14px 30px;font-family:${sans};font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#ffffff;text-decoration:none;">${escapeHtml(label)}</a></td></tr></table>`

const layout = ({ preheader = '', body = '', supportPrefix = 'Questions about your order?' }) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="x-apple-disable-message-reformatting" />
<title>Scentra</title>
</head>
<body style="margin:0;padding:0;background:${colors.canvas};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${colors.canvas};">
<tr>
<td align="center" style="padding:36px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;background:#ffffff;border:1px solid ${colors.border};">
<tr>
<td style="padding:30px 40px 24px;border-bottom:3px solid ${colors.red};">
<span style="font-family:${serif};font-size:23px;letter-spacing:.3em;color:#111111;">SCENTRA</span>
<span style="display:block;font-family:${sans};font-size:8px;letter-spacing:.42em;color:${colors.slate};margin-top:8px;">FINE FRAGRANCE</span>
</td>
</tr>
<tr><td style="padding:38px 40px 10px;">${body}</td></tr>
<tr>
<td style="padding:6px 40px 34px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="border-top:1px solid ${colors.border};padding-top:22px;font-family:${sans};font-size:12px;line-height:1.8;color:${colors.slate};">
${escapeHtml(supportPrefix)} Reply to this email or write to <a href="mailto:${escapeHtml(supportEmail())}" style="color:${colors.red};text-decoration:none;">${escapeHtml(supportEmail())}</a>.
<br />Scentra Fine Fragrance &middot; Lagos, Nigeria
</td></tr></table>
</td>
</tr>
<tr>
<td style="background:${colors.cream};padding:18px 40px;font-family:${sans};font-size:11px;letter-spacing:.06em;color:${colors.slate};">
<a href="${escapeHtml(storeUrl() + '/shop')}" style="color:${colors.ink};text-decoration:none;">Shop</a>
&nbsp;&middot;&nbsp;<a href="${escapeHtml(storeUrl() + '/track')}" style="color:${colors.ink};text-decoration:none;">Track an order</a>
&nbsp;&middot;&nbsp;<a href="${escapeHtml(storeUrl() + '/faq')}" style="color:${colors.ink};text-decoration:none;">FAQ</a>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`

const paragraph = (text) => `<p style="${css.bodyText}">${text}</p>`

const itemsTable = (order) => {
  const items = Array.isArray(order?.items) ? order.items : []
  const rows = items.map((item, index) => `
<tr>
<td style="padding:14px 0;${index ? `border-top:1px solid ${colors.border};` : ''}font-family:${sans};font-size:14px;line-height:1.5;color:${colors.ink};">
<strong style="font-weight:600;">${escapeHtml(item.name)}</strong>
<span style="display:block;font-size:12px;color:${colors.slate};margin-top:3px;">${escapeHtml(item.size)} &middot; Qty ${Number(item.qty) || 1}</span>
</td>
<td align="right" style="padding:14px 0 14px 16px;${index ? `border-top:1px solid ${colors.border};` : ''}font-family:${sans};font-size:14px;color:${colors.ink};white-space:nowrap;">${money((Number(item.price) || 0) * (Number(item.qty) || 1))}</td>
</tr>`).join('')
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${colors.border};">${rows}</table>`
}

const totalsTable = (order) => {
  const row = (label, options = {}) => {
    const emphasis = Boolean(options.emphasis)
    const cell = `padding:${emphasis ? '14px 0 0' : '5px 0'};${emphasis ? `border-top:1px solid ${colors.border};` : ''}font-family:${sans};font-size:${emphasis ? 17 : 13}px;font-weight:${emphasis ? 600 : 500};`
    const display = options.display ?? money(options.value)
    return `<tr><td style="${cell}color:${emphasis ? '#111111' : colors.slate};">${escapeHtml(label)}</td><td align="right" style="${cell}color:${emphasis ? colors.red : colors.ink};white-space:nowrap;">${escapeHtml(display)}</td></tr>`
  }
  const discount = Number(order?.discount) || 0
  const deliveryFee = Number(order?.deliveryFee) || 0
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding-top:6px;">
${row('Subtotal', { value:Number(order?.subtotal) || 0 })}
${discount ? row('Discount' + (order?.couponCode ? ` (${order.couponCode})` : ''), { display:'-' + money(discount) }) : ''}
${row('Delivery', deliveryFee === 0 ? { display:'Complimentary' } : { value:deliveryFee })}
${row('Total', { value:Number(order?.total) || 0, emphasis:true })}
</table>`
}

const detailRow = (label, value) => `<tr><td style="padding:4px 0;font-family:${sans};font-size:13px;color:${colors.slate};">${escapeHtml(label)}</td><td style="padding:4px 0 4px 16px;font-family:${sans};font-size:13px;color:${colors.ink};">${escapeHtml(value)}</td></tr>`

const detailPanel = (title, rows) => `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${colors.canvas};margin:24px 0 0;"><tr><td style="padding:20px 22px;">
<p style="font-family:${sans};font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:${colors.red};margin:0 0 10px;">${escapeHtml(title)}</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
</td></tr></table>`

const deliveryPanel = (order) => detailPanel('Delivering to', [
  detailRow('Name', order.customerName),
  detailRow('Address', addressLine(order)),
  order.customerPhone ? detailRow('Phone', order.customerPhone) : ''
].join(''))

export const paymentReceiptEmail = (order, options = {}) => {
  const method = options.paymentChannel ? paymentMethodLabel(options.paymentChannel) : 'Paystack checkout'
  const body = `
<p style="${css.eyebrow}">Order ${escapeHtml(order.orderNumber)}</p>
<h1 style="${css.heading}">Thank you, ${escapeHtml(firstName(order))}.</h1>
<p style="margin:0 0 22px;">${chip('Payment confirmed')}</p>
${paragraph(`We have received your payment of <strong>${money(order.total)}</strong> and your order is confirmed. Our team is preparing your fragrance now.`)}
${itemsTable(order)}
${totalsTable(order)}
${detailPanel('Payment details', [
  detailRow('Date', formatDate(order.createdAt)),
  detailRow('Method', method),
  detailRow('Reference', order.paymentReference || order.orderNumber)
].join(''))}
${deliveryPanel(order)}
${button(storeUrl() + '/track', 'Track your order')}
<p style="${css.small}">Keep your order number <strong style="color:${colors.ink};">${escapeHtml(order.orderNumber)}</strong> handy. We will email you again as soon as your order ships.</p>`
  const text = [
    `Thank you, ${firstName(order)}.`,
    '',
    `We have received your payment of ${money(order.total)} and your order ${order.orderNumber} is confirmed.`,
    '',
    ...(order.items || []).map((item) => `${item.qty}x ${item.name} (${item.size}) - ${money(item.price * item.qty)}`),
    '',
    `Subtotal: ${money(order.subtotal)}`,
    ...(Number(order.discount) ? [`Discount: -${money(order.discount)}`] : []),
    `Delivery: ${Number(order.deliveryFee) ? money(order.deliveryFee) : 'Complimentary'}`,
    `Total: ${money(order.total)}`,
    '',
    `Payment method: ${method}`,
    `Payment reference: ${order.paymentReference || order.orderNumber}`,
    `Delivering to: ${addressLine(order)}`,
    '',
    `Track your order: ${storeUrl()}/track`,
    '',
    'Scentra Fine Fragrance, Lagos, Nigeria',
    `Support: ${supportEmail()}`
  ].join('\n')
  return { subject:`Payment receipt for order ${order.orderNumber}`, html:layout({ preheader:`Payment of ${money(order.total)} confirmed - order ${order.orderNumber}`, body }), text }
}

export const orderReceivedEmail = (order) => {
  const body = `
<p style="${css.eyebrow}">Order ${escapeHtml(order.orderNumber)}</p>
<h1 style="${css.heading}">We have your order, ${escapeHtml(firstName(order))}.</h1>
<p style="margin:0 0 22px;">${chip('Awaiting payment', 'amber')}</p>
${paragraph('Your order has been saved and our team will confirm stock, delivery and payment with you on WhatsApp. Nothing has been charged yet.')}
${itemsTable(order)}
${totalsTable(order)}
${deliveryPanel(order)}
${button(storeUrl() + '/track', 'Track your order')}
<p style="${css.small}">If anything looks wrong, reply to this email and we will fix it before your order ships.</p>`
  const text = [
    `We have your order, ${firstName(order)}.`,
    '',
    `Order ${order.orderNumber} has been saved and our team will confirm stock, delivery and payment with you on WhatsApp. Nothing has been charged yet.`,
    '',
    ...(order.items || []).map((item) => `${item.qty}x ${item.name} (${item.size}) - ${money(item.price * item.qty)}`),
    '',
    `Total: ${money(order.total)}`,
    `Delivering to: ${addressLine(order)}`,
    '',
    `Track your order: ${storeUrl()}/track`,
    '',
    'Scentra Fine Fragrance, Lagos, Nigeria',
    `Support: ${supportEmail()}`
  ].join('\n')
  return { subject:`We have your Scentra order ${order.orderNumber}`, html:layout({ preheader:`Order ${order.orderNumber} received - awaiting payment confirmation`, body }), text }
}

const statusCopy = (order) => ({
  PROCESSING:{ chip:'In preparation', tone:'amber', subject:`Your Scentra order ${order.orderNumber} is being prepared`, heading:`We are preparing your order, ${firstName(order)}.`, message:'Your payment is confirmed and our team has started preparing your fragrance. We will let you know the moment it leaves our studio.' },
  SHIPPED:{ chip:'On the way', tone:'green', subject:`Your Scentra order ${order.orderNumber} is on its way`, heading:`Your order is on its way, ${firstName(order)}.`, message:'Your fragrance has left our studio and is on its way to you. Our delivery team will reach out on your phone number to arrange a convenient drop-off.' },
  DELIVERED:{ chip:'Delivered', tone:'green', subject:`Your Scentra order ${order.orderNumber} has been delivered`, heading:`Delivered. We hope you love it, ${firstName(order)}.`, message:'Your order has been delivered. Take a moment with your fragrance - and if anything is not right, simply reply to this email and we will make it right.' },
  CANCELLED:{ chip:'Cancelled', tone:'grey', subject:`Your Scentra order ${order.orderNumber} was cancelled`, heading:`Your order was cancelled, ${firstName(order)}.`, message:`Order ${order.orderNumber} has been cancelled and any reserved items have been released. If you already paid, our team will contact you about your refund within 24 hours.` }
}[order.status] || {})

export const orderStatusEmail = (order) => {
  const copy = statusCopy(order)
  if (!copy.subject) return null
  const body = `
<p style="${css.eyebrow}">Order ${escapeHtml(order.orderNumber)}</p>
<h1 style="${css.heading}">${escapeHtml(copy.heading)}</h1>
<p style="margin:0 0 22px;">${chip(copy.chip, copy.tone)}</p>
${paragraph(copy.message)}
${itemsTable(order)}
${totalsTable(order)}
${button(storeUrl() + '/track', 'View order status')}
<p style="${css.small}">Order number <strong style="color:${colors.ink};">${escapeHtml(order.orderNumber)}</strong>. Reply to this email if you need anything at all.</p>`
  const text = [
    copy.heading,
    '',
    copy.message,
    '',
    `Order: ${order.orderNumber}`,
    ...(order.items || []).map((item) => `${item.qty}x ${item.name} (${item.size})`),
    `Total: ${money(order.total)}`,
    '',
    `View order status: ${storeUrl()}/track`,
    '',
    'Scentra Fine Fragrance, Lagos, Nigeria',
    `Support: ${supportEmail()}`
  ].join('\n')
  return { subject:copy.subject, html:layout({ preheader:copy.heading, body }), text }
}

export const ownerOrderAlertEmail = (order, options = {}) => {
  const paid = options.paid !== false
  const body = `
<p style="${css.eyebrow}">${paid ? 'New paid order' : 'New order - awaiting payment'}</p>
<h1 style="${css.heading}">${escapeHtml(order.orderNumber)}</h1>
<p style="margin:0 0 22px;">${paid ? chip('Paid') : chip('Pending', 'amber')}</p>
${itemsTable(order)}
${totalsTable(order)}
${detailPanel('Customer', [
  detailRow('Name', order.customerName),
  detailRow('Email', order.customerEmail),
  detailRow('Phone', order.customerPhone || 'Not provided'),
  paid ? detailRow('Reference', order.paymentReference || order.orderNumber) : ''
].join(''))}
${detailPanel('Delivery address', [detailRow('Address', addressLine(order))].join(''))}
${button(storeUrl() + '/admin', 'Open the admin')}
<p style="${css.small}">Sent automatically when ${paid ? 'a payment is confirmed' : 'a customer places an order'}.</p>`
  const text = [
    `${paid ? 'New paid order' : 'New order awaiting payment'}: ${order.orderNumber}`,
    '',
    `${order.customerName} - ${order.customerEmail} - ${order.customerPhone || 'no phone'}`,
    addressLine(order),
    '',
    ...(order.items || []).map((item) => `${item.qty}x ${item.name} (${item.size}) - ${money(item.price * item.qty)}`),
    '',
    `Total: ${money(order.total)}`,
    paid ? `Payment reference: ${order.paymentReference || order.orderNumber}` : 'Payment: awaiting confirmation',
    '',
    `Admin: ${storeUrl()}/admin`
  ].join('\n')
  return { subject:`${paid ? 'Paid' : 'New'} order ${order.orderNumber} - ${order.customerName}`, html:layout({ preheader:`${order.customerName} - ${money(order.total)}`, body }), text }
}

export const newsletterWelcomeEmail = () => {
  const body = `
<p style="${css.eyebrow}">Welcome to Scentra</p>
<h1 style="${css.heading}">You are on the list.</h1>
${paragraph('Thank you for joining the Scentra list. You will be the first to hear about new blends, limited restocks and private offers - no noise, only the good things.')}
${detailPanel('A gift for your first order', [
  detailRow('Promo code', 'WELCOME10'),
  detailRow('Benefit', '10% off your first order')
].join(''))}
${button(storeUrl() + '/shop', 'Explore the collection')}
<p style="${css.small}">If you did not sign up for this list, reply to this email and we will remove your address.</p>`
  const text = [
    'Welcome to Scentra.',
    '',
    'You are on the list. You will be the first to hear about new blends, limited restocks and private offers.',
    '',
    'A gift for your first order: use code WELCOME10 for 10% off.',
    '',
    `Explore the collection: ${storeUrl()}/shop`,
    '',
    'Scentra Fine Fragrance, Lagos, Nigeria',
    `Support: ${supportEmail()}`
  ].join('\n')
  return { subject:'Welcome to Scentra', html:layout({ preheader:'You are on the list - enjoy 10% off your first order', supportPrefix:'Questions?', body }), text }
}

const senderAddress = () => {
  const raw = fromAddress().trim()
  const match = /^(.*?)\s*<([^>]+)>$/.exec(raw)
  if (match) return { name:match[1].trim().replace(/^"|"$/g, '') || 'Scentra', email:match[2].trim() }
  return { name:'Scentra', email:raw }
}

const deliverWithBrevo = async (to, message) => {
  const response = await fetch('https://api.brevo.com/v3/smtp/email', {
    method:'POST',
    headers:{ 'api-key':brevoKey(), accept:'application/json', 'Content-Type':'application/json' },
    body:JSON.stringify({ sender:senderAddress(), to:[{ email:to }], replyTo:{ email:replyToAddress() }, subject:message.subject, htmlContent:message.html, textContent:message.text })
  })
  const payload = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(payload.message || `Brevo request failed with status ${response.status}`)
  return { provider:'brevo', id:payload.messageId }
}

export async function sendEmail(to, message) {
  if (!to || !message?.subject) return null
  if (!brevoKey()) {
    console.warn(`Email skipped (set BREVO_API_KEY to send it): "${message.subject}" to ${to}`)
    return null
  }
  return deliverWithBrevo(to, message)
}