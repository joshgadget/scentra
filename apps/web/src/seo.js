import { trackPage, trackPurchase } from './analytics.js'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80'

const editorialTitles = {
  about: ['Our story', 'The story behind Scentra, our Lagos fragrance studio, and the rituals we build around scent.'],
  contact: ['Contact us', 'Reach Scentra by phone, WhatsApp, or email. We are in Lagos and deliver across Nigeria.'],
  faq: ['FAQ', 'Answers about ordering, delivery, and caring for your Scentra fragrance.'],
  shipping: ['Shipping and returns', 'Delivery fees, timeframes, coverage, and the Scentra return policy.'],
  privacy: ['Privacy policy', 'How Scentra collects, uses, and protects your personal information.'],
  terms: ['Terms of service', 'The terms that govern shopping with Scentra.']
}

function setMeta(attr, name, content) {
  if (!content) return
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel=canonical]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

function setJsonLd(script) {
  document.head.querySelectorAll('script[data-scentra-jsonld]').forEach((node) => node.remove())
  if (!script) return
  const tag = document.createElement('script')
  tag.type = 'application/ld+json'
  tag.dataset.scentraJsonld = 'true'
  tag.textContent = JSON.stringify(script)
  document.head.appendChild(tag)
}

export function applyMeta(pathname, products = [], content = {}) {
  const origin = window.location.origin
  const url = origin + (pathname === '/' ? '/' : pathname)
  const announcement = content.announcement || ''
  let title = ''
  let description = ''
  let image = DEFAULT_IMAGE
  let jsonLd = null

  if (pathname.startsWith('/admin')) {
    title = 'Admin · Scentra'
    description = 'Scentra administration'
  } else if (pathname.startsWith('/product/')) {
    const slug = decodeURIComponent(pathname.split('/').pop())
    const product = products.find((item) => item.slug === slug)
    if (product) {
      const variant = product.variants && product.variants[0]
      title = product.name + ' · Scentra'
      description = product.metaDescription || product.description || ''
      image = (product.images && product.images[0]) || DEFAULT_IMAGE
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        image: product.images || [],
        description: description,
        brand: { '@type': 'Brand', name: product.brand || 'Scentra' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'NGN',
          price: variant ? variant.price : 0,
          availability: variant && variant.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
        }
      }
    }
  } else if (pathname === '/') {
    title = 'Scentra — Fine Fragrance and Custom Perfumes in Lagos'
    description = (content.heroTitle || 'Leave a beautiful impression.') + ' ' + announcement
    jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Store',
      name: 'Scentra',
      description: 'Luxury fragrance store in Lagos, Nigeria. Custom perfumes, branded fragrances, body sprays and deodorants.',
      image: DEFAULT_IMAGE
    }
  } else if (pathname === '/shop') {
    title = 'Shop all fragrance · Scentra'
    description = 'Browse custom perfumes, branded fragrances, body sprays and deodorants. ' + announcement
  } else if (pathname === '/cart') {
    title = 'Shopping bag · Scentra'
    description = 'Review your Scentra order before checkout.'
  } else if (pathname === '/checkout' || pathname === '/checkout/success') {
    title = pathname === '/checkout/success' ? 'Order confirmed · Scentra' : 'Checkout · Scentra'
    description = 'Secure checkout with Paystack.'
  } else if (pathname === '/track') {
    title = 'Track your order · Scentra'
    description = 'Enter your order number to see the latest delivery status.'
  } else {
    const type = pathname.split('/').filter(Boolean)[0]
    const copy = editorialTitles[type]
    if (copy) {
      title = copy[0] + ' · Scentra'
      description = copy[1]
    }
  }

  if (!title) title = 'Scentra — Fine Fragrance'
  if (!description) description = 'Luxury fragrance store in Lagos, Nigeria. Custom perfumes and branded scents, delivered across the country.'

  document.title = title
  setMeta('name', 'description', description)
  setMeta('property', 'og:title', title)
  setMeta('property', 'og:description', description)
  setMeta('property', 'og:type', pathname.startsWith('/product/') ? 'product' : 'website')
  setMeta('property', 'og:url', url)
  setMeta('property', 'og:image', image)
  setMeta('name', 'twitter:card', 'summary_large_image')
  setMeta('name', 'twitter:title', title)
  setMeta('name', 'twitter:description', description)
  setMeta('name', 'twitter:image', image)
  setCanonical(url)
  setJsonLd(jsonLd)

  trackPage(pathname)
  if (pathname === '/checkout/success') {
    try {
      const order = JSON.parse(localStorage.getItem('scentra-last-order') || 'null')
      trackPurchase(order)
    } catch { /* ignore malformed stored order */ }
  }
}
