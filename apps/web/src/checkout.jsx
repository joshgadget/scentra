import { useState } from 'react'
import { ArrowLeft, LockKeyhole, MessageCircle } from 'lucide-react'
import { deliveryFee } from './wire.js'
import { api, defaultSupportWhatsapp, money, orderMessage, whatsappLink } from './store-utils.js'

export function CheckoutFlow({ store, navigate, LinkComponent:Link, NavigateComponent:Navigate }) {
  const { cart, subtotal, setCart, coupon, config } = store
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name:'', email:'', phone:'', address:'', city:'', state:'', note:'' })
  const delivery = deliveryFee({ state:form.state, subtotal, discount:coupon?.discount || 0, delivery:config.delivery })
  const total = Math.max(0, subtotal - (coupon?.discount || 0)) + delivery
  const whatsapp = config.support?.whatsapp || defaultSupportWhatsapp
  const livePayments = config.paymentMode === 'live'

  if (!cart.length) return <Navigate to='/cart' replace />

  const change = (event) => setForm((current) => ({ ...current, [event.target.name]:event.target.value }))
  const submit = async (event) => {
    event.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setError('')
    const waWindow = livePayments ? null : window.open('', '_blank')
    try {
      const order = await api('/orders', {
        method:'POST',
        body:JSON.stringify({
          customer:{ name:form.name, email:form.email, phone:form.phone },
          shippingAddress:{ address:form.address, city:form.city, state:form.state, note:form.note },
          items:cart.map(({ productId, variantId, name, size, qty, price }) => ({ productId, variantId, name, size, qty, price })),
          couponCode:coupon?.code
        })
      })
      const items = cart.map(({ name, size, qty, price }) => ({ name, size, qty, price }))
      localStorage.setItem('scentra-last-order', JSON.stringify({ ...order, items }))
      setCart([])
      if (order.authorization_url) {
        if (waWindow) waWindow.close()
        window.location.assign(order.authorization_url)
        return
      }
      const link = whatsappLink(whatsapp, orderMessage(order, cart, form, total, coupon))
      localStorage.setItem('scentra-whatsapp-link', JSON.stringify(link))
      if (waWindow) waWindow.location.href = link
      navigate('/checkout/success')
    } catch (requestError) {
      if (waWindow) waWindow.close()
      setError(requestError.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className='checkout-page'>
      <div className='container'>
        <Link className='back-link' to='/cart'><ArrowLeft /> Return to bag</Link>
        <div className='checkout-layout'>
          <form onSubmit={submit} className='checkout-form'>
            <div className='page-title'><p className='eyebrow'>Almost yours</p><h1>Checkout</h1></div>
            <div className='demo-notice'>
              <strong>{livePayments ? 'Secure payment' : 'Two ways to complete your order'}</strong>
              <span>{livePayments ? 'You will be redirected to Paystack to pay by card, bank transfer or USSD. Your order is confirmed once payment clears.' : 'Send your order to us on WhatsApp and we will confirm stock, delivery and payment. Paying on this site is coming soon.'}</span>
            </div>
            <fieldset>
              <legend>Contact</legend>
              <div className='form-grid'>
                <label className='full'>Email address<input type='email' name='email' value={form.email} onChange={change} required placeholder='you@example.com' /></label>
                <label>Full name<input name='name' value={form.name} onChange={change} required minLength={2} placeholder='Your full name' /></label>
                <label>Phone number<input name='phone' value={form.phone} onChange={change} required minLength={7} placeholder='0800 000 0000' /></label>
              </div>
            </fieldset>
            <fieldset>
              <legend>Delivery address</legend>
              <div className='form-grid'>
                <label className='full'>Street address<input name='address' value={form.address} onChange={change} required minLength={5} placeholder='House number and street' /></label>
                <label>City<input name='city' value={form.city} onChange={change} required minLength={2} placeholder='Lagos' /></label>
                <label>State<select name='state' value={form.state} onChange={change} required><option value=''>Select state</option>{['Lagos', 'Abuja FCT', 'Rivers', 'Oyo', 'Ogun', 'Enugu', 'Kano', 'Kaduna', 'Delta', 'Edo', 'Other'].map((state) => <option key={state}>{state}</option>)}</select></label>
                <label className='full'>Delivery note (optional)<textarea name='note' value={form.note} onChange={change} placeholder='Landmark, gate code, or delivery preference' /></label>
              </div>
            </fieldset>
            <fieldset>
              <legend>Payment</legend>
              {livePayments ? (
                <div className='payment-choice active'>
                  <div><LockKeyhole size={17} /><strong>Pay on this site</strong><span className='choice-badge'>Secure</span></div>
                  <small>Card, bank transfer and USSD are handled securely by Paystack. You will return here when payment is complete.</small>
                </div>
              ) : (
                <>
                  <div className='payment-choice active'>
                    <div><MessageCircle size={17} /><strong>Order on WhatsApp</strong><span className='choice-badge'>Recommended</span></div>
                    <small>Send your order to {whatsapp}. We confirm stock, delivery and payment with you on WhatsApp.</small>
                  </div>
                  <div className='payment-choice soon'>
                    <div><LockKeyhole size={17} /><strong>Pay on this site</strong><span className='soon-badge'>Coming soon</span></div>
                    <small>Card, bank transfer and USSD will be available here shortly.</small>
                  </div>
                </>
              )}
            </fieldset>
            {error && <p className='form-error'>{error}</p>}
            <div className='checkout-actions'>
              <button type='submit' className='btn promo-btn checkout-submit' disabled={submitting}>
                {submitting ? 'Preparing your order...' : livePayments ? <><LockKeyhole size={17} /> Pay securely · {money(total)}</> : <><MessageCircle size={17} /> Checkout on WhatsApp · {money(total)}</>}
              </button>
              {!livePayments && <button type='button' className='btn secondary checkout-pay-later' disabled aria-disabled='true' title='Online payment is coming soon'><LockKeyhole size={16} /> Pay on this site<span className='soon-badge'>Coming soon</span></button>}
            </div>
            <p className='secure-line'><LockKeyhole /> Your contact and delivery details are protected.</p>
          </form>
          <div className='checkout-summary'>
            <h2>Your order</h2>
            {cart.map((item) => (
              <div className='checkout-item' key={item.key}>
                <div><img src={item.image} alt='' /><span>{item.qty}</span></div>
                <p><strong>{item.name}</strong><small>{item.size}</small></p>
                <b>{money(item.price * item.qty)}</b>
              </div>
            ))}
            <div className='checkout-totals'>
              <p><span>Subtotal</span><strong>{money(subtotal)}</strong></p>
              {coupon && <p><span>{coupon.code}</span><strong>-{money(coupon.discount)}</strong></p>}
              <p><span>Delivery{form.state ? ' (' + form.state + ')' : ''}</span><strong>{delivery === 0 ? 'Complimentary' : money(delivery)}</strong></p>
              <p><span>Total</span><strong>{money(total)}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
