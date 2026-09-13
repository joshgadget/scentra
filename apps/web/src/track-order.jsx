import { useState } from 'react'

const money = (value = 0) => '₦' + new Intl.NumberFormat('en-NG').format(Number(value) || 0)

const steps = [
  ['PENDING', 'Order placed', 'We received your order and are confirming it.'],
  ['PAID', 'Payment confirmed', 'Your payment has cleared and your order is in the queue.'],
  ['PROCESSING', 'Being prepared', 'Your fragrance is being checked, packed, and handed to our courier.'],
  ['SHIPPED', 'On its way', 'Your order has left our Lagos studio.'],
  ['DELIVERED', 'Delivered', 'Enjoy your fragrance. Thank you for shopping with Scentra.']
]

const headCopy = {
  PENDING: 'Awaiting payment',
  PAID: 'Payment confirmed',
  PROCESSING: 'Being prepared',
  SHIPPED: 'On its way',
  DELIVERED: 'Delivered'
}

export function TrackOrderPage() {
  const [number, setNumber] = useState('')
  const [order, setOrder] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const lookup = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    setOrder(null)
    try {
      const response = await fetch('/api/orders/' + encodeURIComponent(number.trim().toUpperCase()) + '/status')
      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data.error || 'Order not found')
      setOrder(data)
    } catch (requestError) {
      setError(requestError.message)
    } finally {
      setLoading(false)
    }
  }

  const cancelled = order && order.status === 'CANCELLED'
  const currentStep = cancelled ? -1 : steps.findIndex(([status]) => status === (order ? order.status : ''))

  return (
    <div className='track-page'>
      <div className='track-hero container'>
        <p className='eyebrow'>Order lookup</p>
        <h1>Track your order</h1>
        <p>Enter the order number from your confirmation email to see the latest status.</p>
      </div>
      <div className='container track-body'>
        <form className='track-form' onSubmit={lookup}>
          <label>
            Order number
            <input value={number} onChange={(event) => setNumber(event.target.value)} placeholder='SC-2026-XXXXXX' required />
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
                  <span className='track-dot'>{index < currentStep || index === currentStep ? '✓' : ''}</span>
                  <div>
                    <strong>{label}</strong>
                    <small>{hint}</small>
                  </div>
                </li>
              ))}
            </ol>
            <p className='track-total'><span>Order total</span><strong>{money(order.total)}</strong></p>
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
            <p className='track-note'>This order was cancelled before payment was completed. If you were charged, contact us and we will resolve it right away.</p>
          </section>
        )}
      </div>
    </div>
  )
}
