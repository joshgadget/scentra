import 'dotenv/config'
import crypto from 'node:crypto'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { z } from 'zod'
import { PrismaClient } from '@prisma/client'

const app = express()
const port = process.env.PORT || 4000
const appUrl = process.env.APP_URL || (process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:5173')
const prisma = globalThis.__scentraPrisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalThis.__scentraPrisma = prisma
let dbEnabled = Boolean(process.env.DATABASE_URL)
const degradeToMemory = (error) => { if (!dbEnabled) return false; dbEnabled = false; console.error('Database unavailable - serving in-memory demo data:', error?.message || String(error)); return true }
const deliveryDefaults = { enabled:true, freeOver:75000, lagos:4000, other:12000 }
const memoryOrders = []
const memoryCustomers = new Map()
const memoryCoupons = [{ id:'welcome', code:'WELCOME10', type:'percent', value:10, expiryDate:'2027-12-31T23:59:59.000Z', usageLimit:500, usedCount:0, active:true }]
const memorySubscribers = new Set()
const memorySettings = {
  delivery:deliveryDefaults,
  content:{ announcement:'Complimentary Lagos delivery on orders over NGN 75,000', heroEyebrow:'The art of personal fragrance', heroTitle:'Leave a beautiful impression.' },
  notifications:{ ownerEmail:process.env.OWNER_EMAIL || '', ownerWhatsapp:process.env.OWNER_WHATSAPP || '' }
}

const allowedOrigins = new Set([appUrl, 'http://localhost:5173', 'http://127.0.0.1:5173'].filter(Boolean))
app.use(cors({ origin:(origin, callback) => callback(null, !origin || allowedOrigins.has(origin)) }))
app.use(express.json({ verify:(req, _res, buffer) => { req.rawBody = buffer } }))

const imagePool = [
  'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85'
]

const seedProducts = [
  { id:'p1', name:'Noir Santal', slug:'noir-santal', description:'A smoky, woody signature with sandalwood, saffron and soft amber.', brand:'SCENTRA', gender:'unisex', category:'Custom Perfume', categorySlug:'custom-perfumes', featured:true, onSale:false, images:[imagePool[0]], scentNotes:{top:'Saffron, pink pepper', middle:'Iris, cedar', base:'Sandalwood, amber'}, variants:[{id:'p1-50',size:'50ml',price:42000,stock:12},{id:'p1-100',size:'100ml',price:68000,stock:8}] },
  { id:'p2', name:'Velvet Oud', slug:'velvet-oud', description:'Rich oud softened with rose absolute, incense and vanilla bean.', brand:'SCENTRA', gender:'unisex', category:'Custom Perfume', categorySlug:'custom-perfumes', featured:true, onSale:true, images:[imagePool[1]], scentNotes:{top:'Bergamot, cardamom', middle:'Rose, incense', base:'Oud, vanilla'}, variants:[{id:'p2-50',size:'50ml',price:46000,stock:10},{id:'p2-100',size:'100ml',price:76000,stock:4}] },
  { id:'p3', name:'Black Opium', slug:'black-opium', description:'The iconic coffee-floral fragrance with vanilla and white flowers.', brand:'Yves Saint Laurent', gender:'women', category:'Branded Perfume', categorySlug:'branded-perfumes', featured:true, onSale:false, images:[imagePool[2]], scentNotes:{top:'Pear, pink pepper', middle:'Coffee, jasmine', base:'Vanilla, patchouli'}, variants:[{id:'p3-30',size:'30ml',price:98000,stock:5}] },
  { id:'p4', name:'Aqua Di Gio', slug:'aqua-di-gio', description:'A bright marine classic with bergamot, neroli and cedarwood.', brand:'Giorgio Armani', gender:'men', category:'Branded Perfume', categorySlug:'branded-perfumes', featured:false, onSale:false, images:[imagePool[3]], scentNotes:{top:'Lime, bergamot', middle:'Marine notes, jasmine', base:'Cedar, musk'}, variants:[{id:'p4-50',size:'50ml',price:88000,stock:7}] },
  { id:'p5', name:'Dusk Body Mist', slug:'dusk-body-mist', description:'A sheer, skin-close mist for golden hour and slow evenings.', brand:'SCENTRA', gender:'unisex', category:'Body Spray', categorySlug:'body-sprays', featured:true, onSale:false, images:[imagePool[4]], scentNotes:{top:'Mandarin, pear', middle:'Peony, tea', base:'Musk, tonka'}, variants:[{id:'p5-150',size:'150ml',price:18000,stock:22}] },
  { id:'p6', name:'Cedar + Clay Deodorant', slug:'cedar-clay-deodorant', description:'A clean, aluminium-free deodorant with a dry cedar finish.', brand:'SCENTRA', gender:'men', category:'Deodorant', categorySlug:'deodorants', featured:false, onSale:true, images:[imagePool[5]], scentNotes:{top:'Grapefruit', middle:'Clary sage', base:'Cedar, vetiver'}, variants:[{id:'p6-75',size:'75g',price:9500,stock:31}] }
]

const money = (amount) => `NGN ${new Intl.NumberFormat('en-NG').format(amount)}`
const orderNumber = () => `SC-${new Date().getFullYear()}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
const slugify = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

async function listProducts(query = {}) {
  let products
  if (!dbEnabled) products = seedProducts
  else {
    try {
      const records = await prisma.product.findMany({ include:{ category:true, variants:true }, orderBy:{ createdAt:'desc' } })
      products = records.map((product) => ({ ...product, category:product.category.name, categorySlug:product.category.slug }))
    } catch (error) {
      degradeToMemory(error)
      products = seedProducts
    }
  }
  return products.filter((product) => {
    const text = `${product.name} ${product.brand || ''} ${product.category}`.toLowerCase()
    return (!query.search || text.includes(query.search.toLowerCase())) && (!query.category || product.categorySlug === query.category) && (!query.featured || product.featured)
  })
}

async function ensureSeed() {
  if (!dbEnabled) return
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@scentra.co'
  const adminPassword = process.env.ADMIN_PASSWORD || 'Scentra123!'
  const [admin, productCount, welcomeCoupon] = await Promise.all([
    prisma.admin.findUnique({ where:{ email:adminEmail }, select:{ id:true } }),
    prisma.product.count(),
    prisma.coupon.findUnique({ where:{ code:'WELCOME10' }, select:{ id:true } })
  ])
  if (!admin) {
    const { default:bcrypt } = await import('bcryptjs')
    await prisma.admin.create({ data:{ name:'Scentra Admin', email:adminEmail, password:await bcrypt.hash(adminPassword, 12) } })
  }
  if (!welcomeCoupon) await prisma.coupon.create({ data:{ code:'WELCOME10', type:'percent', value:10, expiryDate:new Date('2027-12-31T23:59:59.000Z'), usageLimit:500, active:true } })
  if (productCount) return
  const categoryIds = new Map()
  for (const item of seedProducts) {
    if (!categoryIds.has(item.categorySlug)) {
      const category = await prisma.category.upsert({ where:{ slug:item.categorySlug }, update:{ name:item.category }, create:{ name:item.category, slug:item.categorySlug } })
      categoryIds.set(item.categorySlug, category.id)
    }
    await prisma.product.create({ data:{ name:item.name, slug:item.slug, description:item.description, brand:item.brand, gender:item.gender, scentNotes:item.scentNotes, images:item.images, featured:item.featured, onSale:item.onSale, categoryId:categoryIds.get(item.categorySlug), variants:{ create:item.variants.map(({ size, price, stock }) => ({ size, price, stock })) } } })
  }
}

async function restoreReservation(order, tx = prisma) {
  if (!order.reservationExpiresAt) return
  for (const item of order.items) if (item.variantId) await tx.productVariant.update({ where:{ id:item.variantId }, data:{ stock:{ increment:item.qty } } })
  if (order.couponCode) await tx.coupon.updateMany({ where:{ code:order.couponCode, usedCount:{ gt:0 } }, data:{ usedCount:{ decrement:1 } } })
}

async function releaseExpiredReservations() {
  if (!dbEnabled) return
  const expired = await prisma.order.findMany({ where:{ status:'PENDING', reservationExpiresAt:{ lte:new Date() } }, include:{ items:true } })
  for (const order of expired) await prisma.$transaction(async (tx) => { await restoreReservation(order, tx); await tx.order.update({ where:{ id:order.id }, data:{ status:'CANCELLED', reservationExpiresAt:null } }) })
}

async function getSetting(key) {
  if (!dbEnabled) return memorySettings[key] || {}
  try {
    const setting = await prisma.siteSetting.findUnique({ where:{ key } })
    return setting?.value || memorySettings[key] || {}
  } catch (error) {
    degradeToMemory(error)
    return memorySettings[key] || {}
  }
}

async function deliveryFor(subtotal, discount, state) {
  const rules = { ...deliveryDefaults, ...((await getSetting('delivery')) || {}) }
  const net = Math.max(0, subtotal - discount)
  if (rules.enabled === false || net >= rules.freeOver) return 0
  return String(state || '').toLowerCase().includes('lagos') ? rules.lagos : rules.other
}

async function calculateCoupon(code, subtotal) {
  if (!code) return { discount:0, coupon:null }
  const coupon = dbEnabled ? await prisma.coupon.findUnique({ where:{ code:code.toUpperCase() } }) : memoryCoupons.find((item) => item.code === code.toUpperCase())
  if (!coupon || !coupon.active || new Date(coupon.expiryDate) < new Date() || (coupon.usageLimit && coupon.usedCount >= coupon.usageLimit)) throw new Error('This promo code is invalid or has expired')
  const discount = Math.min(subtotal, coupon.type === 'percent' ? Math.round(subtotal * coupon.value / 100) : coupon.value)
  return { discount, coupon }
}

async function notifyPaidOrder(order) {
  const items = (order.items || []).map((item) => `${item.qty}x ${item.name} (${item.size})`).join('\n')
  const address = typeof order.shippingAddress === 'string' ? order.shippingAddress : Object.values(order.shippingAddress || {}).filter(Boolean).join(', ')
  const ownerText = `New Scentra order ${order.orderNumber}\n${order.customerName} - ${order.customerPhone || ''}\n${items}\nTotal: ${money(order.total)}\n${address}`
  const notifications = await getSetting('notifications')
  const ownerEmail = notifications.ownerEmail || process.env.OWNER_EMAIL
  const ownerWhatsapp = notifications.ownerWhatsapp || process.env.OWNER_WHATSAPP
  if (process.env.SMTP_HOST) {
    const { default:nodemailer } = await import('nodemailer')
    const transporter = nodemailer.createTransport({ host:process.env.SMTP_HOST, port:Number(process.env.SMTP_PORT || 587), secure:Number(process.env.SMTP_PORT) === 465, auth:{ user:process.env.SMTP_USER, pass:process.env.SMTP_PASS } })
    if (ownerEmail) await transporter.sendMail({ from:process.env.SMTP_USER, to:ownerEmail, subject:`New paid order ${order.orderNumber}`, text:ownerText })
    await transporter.sendMail({ from:process.env.SMTP_USER, to:order.customerEmail, subject:`Your Scentra order ${order.orderNumber} is confirmed`, text:`Hello ${order.customerName},\n\nThank you for your order. Your payment is confirmed and we are preparing your fragrance.\n\n${items}\nTotal: ${money(order.total)}\n\nWe will contact you when it is on the way.\n\nScentra` })
  }
  if (process.env.TWILIO_ACCOUNT_SID && ownerWhatsapp) {
    await fetch(`https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`, { method:'POST', headers:{ Authorization:`Basic ${Buffer.from(`${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`).toString('base64')}`, 'Content-Type':'application/x-www-form-urlencoded' }, body:new URLSearchParams({ From:process.env.TWILIO_WHATSAPP_FROM, To:`whatsapp:${ownerWhatsapp}`, Body:ownerText }) })
  }
}

const safeNotify = (order) => notifyPaidOrder(order).catch((error) => console.error('Order notification failed:', error.message))
const adminAuth = (req, res, next) => { try { const token = req.headers.authorization?.replace('Bearer ', ''); req.admin = jwt.verify(token, process.env.JWT_SECRET || 'dev-secret'); next() } catch { res.status(401).json({ error:'Unauthorized' }) } }
const cachePublic = (res, seconds = 30) => res.set('Cache-Control', `public, max-age=0, s-maxage=${seconds}, stale-while-revalidate=${seconds * 10}`)
const cachePrivate = (res) => res.set('Cache-Control', 'private, no-store')

const supabaseUrl = (process.env.SUPABASE_URL || '').replace(/\/+$/, '')
const supabaseReady = Boolean(supabaseUrl && process.env.SUPABASE_ANON_KEY)
const supabaseAuthHeaders = (key) => ({ apikey:key, Authorization:`Bearer ${key}`, 'Content-Type':'application/json' })

async function supabaseRequest(path, options = {}) {
  const response = await fetch(`${supabaseUrl}${path}`, options)
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.error_description || data.msg || data.error || 'Supabase request failed')
  return data
}

async function ensureCustomerFor(auth) {
  const name = auth.name || (auth.email ? auth.email.split('@')[0] : 'Scentra customer')
  if (!dbEnabled) {
    const existing = memoryCustomers.get(auth.email)
    const customer = existing || { id:auth.email, name, email:auth.email, phone:null, createdAt:new Date().toISOString() }
    memoryCustomers.set(auth.email, customer)
    return customer
  }
  return prisma.customer.upsert({ where:{ email:auth.email }, update:{}, create:{ name, email:auth.email } })
}

const customerAuth = async (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (!token) return res.status(401).json({ error:'Please sign in to continue' })
  try {
    let payload
    if (process.env.SUPABASE_JWT_SECRET) {
      payload = jwt.verify(token, process.env.SUPABASE_JWT_SECRET, { algorithms:['HS256'] })
    } else if (supabaseReady) {
      const user = await supabaseRequest('/auth/v1/user', { headers:{ apikey:process.env.SUPABASE_ANON_KEY, Authorization:`Bearer ${token}` } })
      payload = { sub:user.id, email:user.email, aud:user.aud }
    } else {
      return res.status(503).json({ error:'Customer accounts are not configured yet' })
    }
    if (payload.aud !== 'authenticated' || !payload.sub) throw new Error('Invalid session')
    req.customer = { id:payload.sub, email:String(payload.email || '').toLowerCase() }
    next()
  } catch (error) { res.status(401).json({ error:'Your session has expired. Please sign in again.' }) }
}

const serializeOrder = (order) => ({ orderNumber:order.orderNumber, status:order.status, total:order.total, deliveryFee:order.deliveryFee || 0, createdAt:order.createdAt, items:order.items || [] })
const accountSchema = z.object({ name:z.string().trim().min(1).max(80), email:z.string().trim().toLowerCase().email().max(200), password:z.string().min(8).max(100) })
const signInSchema = z.object({ email:z.string().trim().toLowerCase().email(), password:z.string().min(8).max(100) })
const refreshSchema = z.object({ refreshToken:z.string().trim().min(10).max(500) })

app.post('/api/auth/signup', async (req, res) => {
  const parsed = accountSchema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error:'Enter your name, a valid email and a password of at least 8 characters' })
  if (!supabaseReady || !process.env.SUPABASE_SERVICE_ROLE_KEY) return res.status(503).json({ error:'Accounts are not ready yet - connect Supabase to enable signup.' })
  const { name, email, password } = parsed.data
  try {
    await supabaseRequest('/auth/v1/admin/users', { method:'POST', headers:supabaseAuthHeaders(process.env.SUPABASE_SERVICE_ROLE_KEY), body:JSON.stringify({ email, password, email_confirm:true, user_metadata:{ name } }) })
    if (dbEnabled) await prisma.customer.upsert({ where:{ email }, update:{ name }, create:{ name, email } })
    else memoryCustomers.set(email, { id:email, name, email, phone:null, createdAt:new Date().toISOString() })
    cachePrivate(res).status(201).json({ message:'Account created. Signing you in...' })
  } catch (error) { res.status(409).json({ error:error.message === 'User already registered' ? 'An account already exists for this email. Sign in instead.' : (error.message || 'Could not create your account') }) }
})

app.post('/api/auth/login', async (req, res) => {
  const parsed = signInSchema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error:'Enter your email and a password of at least 8 characters' })
  if (!supabaseReady) return res.status(503).json({ error:'Accounts are not ready yet - connect Supabase to sign in.' })
  const { email, password } = parsed.data
  try {
    const session = await supabaseRequest('/auth/v1/token?grant_type=password', { method:'POST', headers:supabaseAuthHeaders(process.env.SUPABASE_ANON_KEY), body:JSON.stringify({ email, password }) })
    const customer = await ensureCustomerFor({ email:session.user?.email || email, name:session.user?.user_metadata?.name })
    cachePrivate(res).json({ token:session.access_token, refreshToken:session.refresh_token, user:{ id:session.user?.id, email:customer.email, name:customer.name } })
  } catch (error) { res.status(401).json({ error:error.message === 'Invalid login credentials' ? 'Incorrect email or password' : (error.message || 'Could not sign you in') }) }
})

app.post('/api/auth/refresh', async (req, res) => {
  const parsed = refreshSchema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error:'Refresh token is missing' })
  if (!supabaseReady) return res.status(503).json({ error:'Accounts are not configured yet' })
  try {
    const session = await supabaseRequest('/auth/v1/token?grant_type=refresh_token', { method:'POST', headers:supabaseAuthHeaders(process.env.SUPABASE_ANON_KEY), body:JSON.stringify({ refresh_token:parsed.data.refreshToken }) })
    cachePrivate(res).json({ token:session.access_token, refreshToken:session.refresh_token, user:{ id:session.user?.id, email:session.user?.email || '', name:session.user?.user_metadata?.name || '' } })
  } catch (error) { res.status(401).json({ error:'Session expired. Please sign in again.' }) }
})

app.get('/api/auth/me', customerAuth, async (req, res) => {
  try {
    const customer = await ensureCustomerFor(req.customer)
    cachePrivate(res).json({ user:{ id:req.customer.id, email:customer.email, name:customer.name, phone:customer.phone || null, createdAt:customer.createdAt } })
  } catch (error) { res.status(500).json({ error:'Could not load your profile' }) }
})

app.get('/api/account/orders', customerAuth, async (req, res) => {
  try {
    const customer = await ensureCustomerFor(req.customer)
    const orders = dbEnabled
      ? await prisma.order.findMany({ where:{ customerId:customer.id }, include:{ items:{ select:{ name:true, size:true, qty:true, price:true } } }, orderBy:{ createdAt:'desc' } })
      : memoryOrders.filter((order) => order.customerEmail === customer.email)
    cachePrivate(res).json({ orders:orders.map(serializeOrder) })
  } catch (error) { res.status(500).json({ error:'Could not load your orders' }) }
})

async function listCustomers() {
  if (dbEnabled) return prisma.customer.findMany({ select:{ id:true, name:true, email:true, phone:true, createdAt:true, orders:{ select:{ id:true, orderNumber:true, total:true, status:true, createdAt:true } } }, orderBy:{ createdAt:'desc' } })
  return [...new Set(memoryOrders.map((order) => order.customerEmail))].map((email) => {
    const orders = memoryOrders.filter((order) => order.customerEmail === email)
    return { id:email, email, name:orders[0].customerName, phone:orders[0].customerPhone, createdAt:orders[orders.length-1].createdAt, orders }
  })
}

async function getSummary() {
  if (!dbEnabled) {
    const paid = memoryOrders.filter((order) => ['PAID','PROCESSING','SHIPPED','DELIVERED'].includes(order.status))
    return { revenue:paid.reduce((sum, order) => sum + order.total, 0), orders:memoryOrders.length, pending:memoryOrders.filter((order) => order.status === 'PENDING').length, lowStock:seedProducts.flatMap((product) => product.variants).filter((variant) => variant.stock <= 5).length }
  }
  const [orders, pending, lowStock, paid] = await Promise.all([prisma.order.count(), prisma.order.count({ where:{ status:'PENDING' } }), prisma.productVariant.count({ where:{ stock:{ lte:5 } } }), prisma.order.aggregate({ _sum:{ total:true }, where:{ status:{ in:['PAID','PROCESSING','SHIPPED','DELIVERED'] } } })])
  return { revenue:paid._sum.total || 0, orders, pending, lowStock }
}

app.get('/api/health', (_, res) => cachePrivate(res).json({ ok:true, database:dbEnabled ? 'postgresql' : 'memory', readyForLive:dbEnabled && Boolean(process.env.PAYSTACK_SECRET_KEY) && Boolean(process.env.JWT_SECRET) }))
app.get('/api/config', async (_, res) => {
  const delivery = await getSetting('delivery').catch(() => deliveryDefaults)
  cachePrivate(res).json({ paymentMode:process.env.PAYSTACK_SECRET_KEY ? 'live' : 'demo', paymentProvider:'Paystack', database:dbEnabled ? 'postgresql' : 'memory', accounts:{ provider:'supabase', ready:supabaseReady }, delivery:{ ...deliveryDefaults, ...delivery }, support:{ email:'hello@scentra.co', whatsapp:process.env.OWNER_WHATSAPP || '' } })
})
app.get('/api/categories', (_, res) => cachePublic(res, 3600).json([
  { name:'Custom Perfumes', slug:'custom-perfumes', eyebrow:'Made by us', description:'Small-batch signatures blended in Lagos.' },
  { name:'Branded Perfumes', slug:'branded-perfumes', eyebrow:'Iconic houses', description:"The world's most coveted names." },
  { name:'Body Sprays', slug:'body-sprays', eyebrow:'Everyday ritual', description:'Effortless scent for every day.' },
  { name:'Deodorants', slug:'deodorants', eyebrow:'Fresh essentials', description:'Quiet confidence, all day.' }
]))
app.get('/api/storefront', async (_, res) => { try { const [products, content] = await Promise.all([listProducts(), getSetting('content')]); cachePublic(res).json({ products, content }) } catch { res.status(500).json({ error:'Could not load the storefront' }) } })
app.get('/api/products', async (req, res) => { try { cachePublic(res).json(await listProducts(req.query)) } catch { res.status(500).json({ error:'Could not load products' }) } })
app.get('/api/products/:slug', async (req, res) => { const product = (await listProducts()).find((item) => item.slug === req.params.slug); product ? cachePublic(res).json(product) : res.status(404).json({ error:'Product not found' }) })
app.get('/api/content', async (_, res) => cachePublic(res).json(await getSetting('content')))
app.post('/api/newsletter', async (req, res) => {
  const parsed = z.string().email().safeParse(req.body?.email)
  if (!parsed.success) return res.status(400).json({ error:'Enter a valid email address' })
  const email = parsed.data.toLowerCase()
  try {
    if (dbEnabled) await prisma.newsletterSubscriber.upsert({ where:{ email }, update:{}, create:{ email } })
    else memorySubscribers.add(email)
    res.status(201).json({ message:'You are on the list. Watch your inbox.' })
  } catch { res.status(500).json({ error:'Could not save your subscription' }) }
})
app.post('/api/coupons/validate', async (req, res) => { try { const subtotal = Number(req.body.subtotal || 0); const result = await calculateCoupon(req.body.code, subtotal); res.json({ code:result.coupon.code, discount:result.discount, total:Math.max(0, subtotal-result.discount) }) } catch (error) { res.status(400).json({ error:error.message }) } })

const orderSchema = z.object({
  customer:z.object({ name:z.string().min(2), email:z.string().email(), phone:z.string().min(7) }),
  shippingAddress:z.object({ address:z.string().min(5), city:z.string().min(2), state:z.string().min(2), note:z.string().optional() }),
  items:z.array(z.object({ productId:z.string(), variantId:z.string(), name:z.string(), size:z.string(), qty:z.number().int().positive(), price:z.number().int().nonnegative() })).min(1),
  couponCode:z.string().optional()
})

app.post('/api/orders', async (req, res) => {
  const parsed = orderSchema.safeParse(req.body)
  if (!parsed.success) return res.status(400).json({ error:'Please check your checkout details', details:parsed.error.flatten() })
  const body = parsed.data
  const number = orderNumber()
  let order
  try {
    if (dbEnabled) {
      const variants = await prisma.productVariant.findMany({ where:{ id:{ in:body.items.map((item) => item.variantId) } }, include:{ product:true } })
      const items = body.items.map((item) => { const variant = variants.find((entry) => entry.id === item.variantId); if (!variant || variant.stock < item.qty) throw new Error(`${item.name} is no longer available in that quantity`); return { variantId:variant.id, name:variant.product.name, size:variant.size, qty:item.qty, price:variant.price } })
      const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
      const { discount, coupon } = await calculateCoupon(body.couponCode, subtotal)
      const deliveryFee = await deliveryFor(subtotal, discount, body.shippingAddress.state || '')
      order = await prisma.$transaction(async (tx) => {
        for (const item of items) { const result = await tx.productVariant.updateMany({ where:{ id:item.variantId, stock:{ gte:item.qty } }, data:{ stock:{ decrement:item.qty } } }); if (!result.count) throw new Error(`${item.name} just sold out`) }
        const customer = await tx.customer.upsert({ where:{ email:body.customer.email }, update:{ name:body.customer.name, phone:body.customer.phone }, create:{ name:body.customer.name, email:body.customer.email, phone:body.customer.phone } })
        if (coupon) await tx.coupon.update({ where:{ id:coupon.id }, data:{ usedCount:{ increment:1 } } })
        return tx.order.create({ data:{ orderNumber:number, customerId:customer.id, customerName:body.customer.name, customerEmail:body.customer.email, customerPhone:body.customer.phone, shippingAddress:body.shippingAddress, subtotal, discount, deliveryFee, couponCode:coupon?.code, total:subtotal-discount+deliveryFee, reservationExpiresAt:new Date(Date.now() + 30 * 60 * 1000), items:{ create:items } }, include:{ items:true } })
      })
    } else {
      const items = body.items.map((item) => { const product = seedProducts.find((entry) => entry.id === item.productId); const variant = product?.variants.find((entry) => entry.id === item.variantId); if (!variant || variant.stock < item.qty) throw new Error(`${item.name} is no longer available in that quantity`); return { ...item, name:product.name, size:variant.size, price:variant.price } })
      const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)
      const { discount, coupon } = await calculateCoupon(body.couponCode, subtotal)
      const deliveryFee = await deliveryFor(subtotal, discount, body.shippingAddress.state || '')
      if (coupon) coupon.usedCount += 1
      for (const item of items) {
        const product = seedProducts.find((entry) => entry.id === item.productId)
        const variant = product?.variants.find((entry) => entry.id === item.variantId)
        if (variant) variant.stock -= item.qty
      }
      order = { id:number, orderNumber:number, status:'PENDING', customerName:body.customer.name, customerEmail:body.customer.email, customerPhone:body.customer.phone, shippingAddress:body.shippingAddress, items, subtotal, discount, deliveryFee, couponCode:coupon?.code, total:subtotal-discount+deliveryFee, createdAt:new Date().toISOString() }
      memoryOrders.unshift(order)
    }

    if (!process.env.PAYSTACK_SECRET_KEY) {
      if (dbEnabled) order = await prisma.order.update({ where:{ id:order.id }, data:{ status:'PAID', reservationExpiresAt:null }, include:{ items:true } })
      else order.status = 'PAID'
      safeNotify(order)
      return res.status(201).json({ orderNumber:number, total:order.total, deliveryFee:order.deliveryFee, authorization_url:null, demo:true })
    }

    const response = await fetch('https://api.paystack.co/transaction/initialize', { method:'POST', headers:{ Authorization:`Bearer ${process.env.PAYSTACK_SECRET_KEY}`, 'Content-Type':'application/json' }, body:JSON.stringify({ email:body.customer.email, amount:order.total * 100, reference:number, callback_url:`${appUrl}/checkout/success` }) })
    const payment = await response.json()
    if (!response.ok || !payment.data?.authorization_url) throw new Error(payment.message || 'Payment could not be initialized')
    res.status(201).json({ orderNumber:number, total:order.total, deliveryFee:order.deliveryFee, authorization_url:payment.data.authorization_url, demo:false })
  } catch (error) {
    if (dbEnabled && order?.id) await prisma.$transaction(async (tx) => { const current = await tx.order.findUnique({ where:{ id:order.id }, include:{ items:true } }); if (current) { await restoreReservation(current, tx); await tx.order.update({ where:{ id:order.id }, data:{ status:'CANCELLED', reservationExpiresAt:null } }) } }).catch(() => {})
    if (!dbEnabled && order) { const index=memoryOrders.findIndex((item)=>item.id===order.id); if(index>=0)memoryOrders.splice(index,1); for(const item of order.items||[]){const product=seedProducts.find((entry)=>entry.id===item.productId);const variant=product?.variants.find((entry)=>entry.id===item.variantId);if(variant)variant.stock+=item.qty} if(order.couponCode){const coupon=memoryCoupons.find((item)=>item.code===order.couponCode);if(coupon&&coupon.usedCount>0)coupon.usedCount-=1} }
    res.status(409).json({ error:error.message || 'Unable to create order' })
  }
})

app.post('/api/payments/paystack/webhook', async (req, res) => {
  if (!process.env.PAYSTACK_SECRET_KEY) return res.status(503).json({ error:'Paystack is not configured' })
  if (process.env.PAYSTACK_SECRET_KEY) {
    const signature = String(req.headers['x-paystack-signature'] || '')
    const expected = crypto.createHmac('sha512', process.env.PAYSTACK_SECRET_KEY).update(req.rawBody || '').digest('hex')
    if (signature.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return res.sendStatus(401)
  }
  if (req.body.event !== 'charge.success') return res.sendStatus(200)
  const reference = req.body.data?.reference
  try {
    if (dbEnabled) {
      const current = await prisma.order.findUnique({ where:{ orderNumber:reference }, include:{ items:true } })
      if (current && current.status === 'PENDING') { const order = await prisma.order.update({ where:{ id:current.id }, data:{ status:'PAID', paymentReference:reference, reservationExpiresAt:null }, include:{ items:true } }); safeNotify(order) }
    } else {
      const order = memoryOrders.find((item) => item.orderNumber === reference)
      if (order && order.status === 'PENDING') { order.status = 'PAID'; order.paymentReference = reference; safeNotify(order) }
    }
  } catch (error) { console.error('Webhook handling failed:', error.message) }
  res.sendStatus(200)
})

app.get('/api/orders/:reference/status', async (req, res) => {
  const raw = dbEnabled ? await prisma.order.findUnique({ where:{ orderNumber:req.params.reference }, select:{ orderNumber:true, status:true, total:true, deliveryFee:true, createdAt:true } }) : memoryOrders.find((item) => item.orderNumber === req.params.reference)
  const order = raw ? { orderNumber:raw.orderNumber, status:raw.status, total:raw.total, deliveryFee:raw.deliveryFee, createdAt:raw.createdAt } : null
  order ? res.json(order) : res.status(404).json({ error:'Order not found' })
})

app.post('/api/admin/login', async (req, res) => {
  const { email, password } = req.body
  let valid = false
  let name = 'Scentra Admin'
  const { default:bcrypt } = await import('bcryptjs')
  if (dbEnabled) { const admin = await prisma.admin.findUnique({ where:{ email } }); valid = Boolean(admin && await bcrypt.compare(password, admin.password)); name = admin?.name || name }
  else { const expectedEmail = process.env.ADMIN_EMAIL || 'admin@scentra.co'; const passwordHash = process.env.ADMIN_PASSWORD_HASH || bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'Scentra123!', 10); valid = email === expectedEmail && await bcrypt.compare(password, passwordHash) }
  if (!valid) return res.status(401).json({ error:'Invalid credentials' })
  res.json({ token:jwt.sign({ email, role:'admin' }, process.env.JWT_SECRET || 'dev-secret', { expiresIn:'2d' }), admin:{ email, name } })
})

app.get('/api/admin/orders', adminAuth, async (_, res) => res.json(dbEnabled ? await prisma.order.findMany({ include:{ items:true }, orderBy:{ createdAt:'desc' } }) : memoryOrders))
app.patch('/api/admin/orders/:id', adminAuth, async (req, res) => {
  if (!dbEnabled) { const order = memoryOrders.find((item) => item.id === req.params.id); if (order) order.status = req.body.status; return res.json(order || { ok:true }) }
  const current = await prisma.order.findUnique({ where:{ id:req.params.id }, include:{ items:true } })
  if (!current) return res.status(404).json({ error:'Order not found' })
  if (req.body.status === 'CANCELLED' && current.status === 'PENDING') await prisma.$transaction(async (tx) => { await restoreReservation(current, tx); await tx.order.update({ where:{ id:current.id }, data:{ status:'CANCELLED', reservationExpiresAt:null } }) })
  else await prisma.order.update({ where:{ id:current.id }, data:{ status:req.body.status, reservationExpiresAt:req.body.status === 'PAID' ? null : undefined } })
  res.json(await prisma.order.findUnique({ where:{ id:current.id } }))
})

app.get('/api/admin/products', adminAuth, async (_, res) => res.json(await listProducts()))
app.post('/api/admin/products', adminAuth, async (req, res) => {
  const body = req.body
  const categorySlug = body.categorySlug || 'custom-perfumes'
  const variants=(body.variants?.length?body.variants:[{ size:body.size || '50ml', price:body.price, stock:body.stock }]).map((variant,index)=>({ id:variant.id || `variant-${Date.now()}-${index}`, size:variant.size, price:Number(variant.price || 0), stock:Number(variant.stock || 0) }))
  const images=body.images?.length?body.images:[imagePool[0]]
  if (!dbEnabled) { const product = { id:`demo-${Date.now()}`, name:body.name, slug:body.slug||slugify(body.name), description:body.description || '', metaDescription:body.metaDescription||'', brand:body.brand || 'SCENTRA', gender:body.gender || 'unisex', category:body.category || 'Custom Perfume', categorySlug, images, scentNotes:{}, featured:Boolean(body.featured), onSale:Boolean(body.onSale), variants }; seedProducts.unshift(product); return res.status(201).json(product) }
  const category = await prisma.category.upsert({ where:{ slug:categorySlug }, update:{ name:body.category }, create:{ name:body.category, slug:categorySlug } })
  const product = await prisma.product.create({ data:{ name:body.name, slug:body.slug || slugify(body.name), description:body.description || '', metaDescription:body.metaDescription || '', brand:body.brand || 'SCENTRA', gender:body.gender || 'unisex', images, scentNotes:body.scentNotes || {}, categoryId:category.id, featured:Boolean(body.featured), onSale:Boolean(body.onSale), variants:{ create:variants.map(({size,price,stock})=>({size,price,stock})) } }, include:{ category:true, variants:true } })
  res.status(201).json({ ...product, category:product.category.name, categorySlug:product.category.slug })
})
app.patch('/api/admin/products/:id', adminAuth, async (req, res) => { const body=req.body; if (!dbEnabled) { const product=seedProducts.find((item)=>item.id===req.params.id); if(!product)return res.status(404).json({error:'Product not found'}); Object.assign(product,{name:body.name??product.name,slug:body.slug??product.slug,description:body.description??product.description,metaDescription:body.metaDescription??product.metaDescription,brand:body.brand??product.brand,gender:body.gender??product.gender,images:body.images?.length?body.images:product.images,featured:body.featured??product.featured,onSale:body.onSale??product.onSale}); if(body.variants)product.variants=body.variants.map((variant,index)=>({...variant,id:variant.id||`variant-${Date.now()}-${index}`,price:Number(variant.price),stock:Number(variant.stock)})); return res.json(product) } const data={}; for(const key of ['name','slug','description','metaDescription','brand','gender','featured','onSale'])if(body[key]!==undefined)data[key]=body[key];if(body.images?.length)data.images=body.images; await prisma.product.update({where:{id:req.params.id},data}); if(body.variants)for(const variant of body.variants){if(variant.id)await prisma.productVariant.update({where:{id:variant.id},data:{size:variant.size,price:Number(variant.price),stock:Number(variant.stock)}});else await prisma.productVariant.create({data:{productId:req.params.id,size:variant.size,price:Number(variant.price),stock:Number(variant.stock)}})} const product=await prisma.product.findUnique({where:{id:req.params.id},include:{category:true,variants:true}});res.json({...product,category:product.category.name,categorySlug:product.category.slug}) })
app.delete('/api/admin/products/:id', adminAuth, async (req, res) => { if (!dbEnabled) { const index = seedProducts.findIndex((item) => item.id === req.params.id); if (index >= 0) seedProducts.splice(index, 1); return res.sendStatus(204) } await prisma.product.delete({ where:{ id:req.params.id } }); res.sendStatus(204) })
app.get('/api/admin/customers', adminAuth, async (_, res) => cachePrivate(res).json(await listCustomers()))
app.get('/api/admin/coupons', adminAuth, async (_, res) => res.json(dbEnabled ? await prisma.coupon.findMany({ orderBy:{ expiryDate:'desc' } }) : memoryCoupons))
app.post('/api/admin/coupons', adminAuth, async (req, res) => { const data = { code:req.body.code.toUpperCase(), type:req.body.type, value:Number(req.body.value), expiryDate:new Date(req.body.expiryDate), usageLimit:req.body.usageLimit ? Number(req.body.usageLimit) : null, active:true }; if (!dbEnabled) { const coupon={ id:`coupon-${Date.now()}`, ...data, expiryDate:data.expiryDate.toISOString(), usedCount:0 }; memoryCoupons.unshift(coupon); return res.status(201).json(coupon) } res.status(201).json(await prisma.coupon.create({ data })) })
app.delete('/api/admin/coupons/:id', adminAuth, async (req, res) => { if (!dbEnabled) { const index=memoryCoupons.findIndex((item)=>item.id===req.params.id); if(index>=0)memoryCoupons.splice(index,1); return res.sendStatus(204) } await prisma.coupon.delete({ where:{ id:req.params.id } }); res.sendStatus(204) })
app.get('/api/admin/settings', adminAuth, async (_, res) => res.json({ content:await getSetting('content'), notifications:await getSetting('notifications'), delivery:await getSetting('delivery') }))
app.put('/api/admin/settings/:key', adminAuth, async (req, res) => { if (!['content','notifications','delivery'].includes(req.params.key)) return res.status(400).json({ error:'Unknown settings group' }); if (!dbEnabled) { memorySettings[req.params.key]={...memorySettings[req.params.key],...req.body}; return res.json(memorySettings[req.params.key]) } const setting=await prisma.siteSetting.upsert({ where:{ key:req.params.key }, update:{ value:req.body }, create:{ key:req.params.key, value:req.body } }); res.json(setting.value) })
app.get('/api/admin/summary', adminAuth, async (_, res) => cachePrivate(res).json(await getSummary()))
app.get('/api/admin/dashboard', adminAuth, async (_, res) => {
  const [summary, orders, customers, coupons, settings] = await Promise.all([
    getSummary(),
    dbEnabled ? prisma.order.findMany({ include:{ items:true }, orderBy:{ createdAt:'desc' } }) : memoryOrders,
    listCustomers(),
    dbEnabled ? prisma.coupon.findMany({ orderBy:{ expiryDate:'desc' } }) : memoryCoupons,
    Promise.all([getSetting('content'), getSetting('notifications'), getSetting('delivery')]).then(([content, notifications, delivery]) => ({ content, notifications, delivery }))
  ])
  cachePrivate(res).json({ summary, orders, customers, coupons, settings })
})

export const ready = ensureSeed().catch((error) => console.error('Database setup failed:', error.message))

if (!process.env.VERCEL) {
  setInterval(() => releaseExpiredReservations().catch((error) => console.error('Reservation cleanup failed:', error.message)), 5 * 60 * 1000).unref()
  ready.finally(() => app.listen(port, () => console.log('Scentra API listening on :' + port)))
}

export default app
