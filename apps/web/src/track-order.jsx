import { useEffect, useState } from 'react'

const money = (value = 0) => '\u20a6' + new Intl.NumberFormat('en-NG').format(Number(value) || 0)

const steps = [
  ['PENDING', 'Order placed', 'We received your order and are confirming it.'],
  ['PAID', 'Payment confirmed', 'Your payment has cleared and your order is in the queue.'],
  ['PROCESSING', 'Being prepared', 'Your fragrance is being checked, packed, and handed to our courier.'],
  ['SHIPPED', 'On its way', 'Your order has left our Lagos studio.'],
  ['DELIVERED', 'Delivered', 'Enjoy your fragrance. Thank you for shopping with Scentra.']
]

const headCopy = {
  PENDING: 'Awaiting confirmation',
  PAID: 'Payment confirmed',
  PROCESSING: 'Being prepared',
  SHIPPED: 'On its way',
  DELIVERED: 'Delivered'
}

const readOrderParam = () => {
  try { return (new URLSearchParams(window.location.search).get('order') || '').trim().toUpperCase() } catch { return '' }
}

export function TrackOrderPage() {
  const initial = readOrderParam()
  const [number, setNumber] = useState(initial)
  const [order, setOrder] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const lookup = async (event, rawNumber) => {
    if (event) event.preventDefault()
    const reference = String(rawNumber ?? number).trim().toUpperCase()
    if (!reference) { setError('Enter the order number from your confirmation.'); return }
    setLoading(true)
    setError('')
    setOrder(null)
    try {
      const response = await fetch('/api/orders/' + encodeURIComponent(reference) + '/status')
      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(response.status === 404 ? 'We could not find an order with that number. Please check it and try again.' : (data.error || 'Order not found'))
      setOrder(data)
      setNumber(data.orderNumber || reference)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { if (initial) lookup(null, initial) }, [initial])

  const cancelled = order && order.status === 'CANCELLED'
  const currentStep = cancelled ? -1 : steps.findIndex(([status]) => status === (order ? order.status : ''))

  return (
    <div className='track-page'>
      <div className='track-hero container'>
        <p className='eyebrow'>Order lookup</p>
        <h1>Track your order</h1>
        <p>Enter the order number we gave you at checkout to see the latest status.</p>
      </div>
      <div className='container track-body'>
        <form className='track-form' onSubmit={lookup}>
          <label>
            Order number
            <input value={number} onChange={(event) => setNumber(event.target.value.toUpperCase())} placeholder='SC-2026-XXXXXX' autoComplete='off' required />
          </label>
          <button className='btn primary' disabled={loading || !number.trim()}>{loading ? 'Checking...' : 'Track order'}</button>
          {error && <p className='form-error'>{error}</p>}
        </form>
        {order && !cancelled && (
          <section className='track-result'>
            <div className='track-head'>
              <div>
                <span>ORDER {order.orderNumber}</span>
                <h2>{headCopy[order.status] || order.status}</h2>
              </div>
              <strong>{money(order.total)}</strong>
            </div>
            <ol className='track-steps'>
              {steps.map(([status, label, hint], index) => (
                <li key={status} className={index <= currentStep ? 'done' : ''}>
                  <span className='track-dot'>{index <= currentStep ? '\u2713' : ''}</span>
                  <div>
                    <strong>{label}</strong>
                    <small>{hint}</small>
                  </div>
                </li>
              ))}
            </ol>
            {order.items && order.items.length > 0 && (
              <ul className='track-items'>
                {order.items.map((item) => (
                  <li key={item.name + item.size}><span>{item.qty} x {item.name}{item.size ? ' (' + item.size + ')' : ''}</span><strong>{money(item.price * item.qty)}</strong></li>
                ))}
              </ul>
            )}
            <div className='track-foot'>
              <p className='track-total'><span>Order total</span><strong>{money(order.total)}</strong></p>
              <button type='button' className='btn secondary' onClick={() => lookup(null, order.orderNumber)} disabled={loading}>{loading ? 'Refreshing...' : 'Refresh status'}</button>
            </div>
          </section>
        )}
        {order && cancelled && (
          <section className='track-result'>
            <div className='track-head'>
              <div>
                <span>ORDER {order.orderNumber}</span>
                <h2>Cancelled</h2>
              </div>
            </div>
            <p className='track-note'>This order was cancelled before it was confirmed. If you have already paid, message us on WhatsApp and we will resolve it right away.</p>
          </section>
        )}
      </div>
    </div>
  )
}