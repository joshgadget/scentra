import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const url = process.env.DATABASE_URL
const host = (() => { try { return new URL(url).host } catch { return 'unparsable' } })()
console.log('host:', host, 'len:', (url||'').length)
const prisma = new PrismaClient({ datasourceUrl: url })
try {
  const t = Date.now()
  const count = await prisma.product.count()
  console.log('OK products:', count, 'in', Date.now()-t, 'ms')
} catch (e) {
  console.log('FAIL:', String(e.message).split('\n').filter(Boolean).slice(-3).join(' | ').slice(0,400))
} finally { await prisma.$disconnect().catch(()=>{}) }
