import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({ datasourceUrl: process.env.DATABASE_URL, log:['error','warn'] })
try { await prisma.$queryRaw`select 1 as ok`; console.log('RAW OK') }
catch (e) { console.log('name', e.name, 'code', e.errorCode, 'clientVersion', e.clientVersion); console.log(String(e.message).slice(0,900)) }
finally { await prisma.$disconnect().catch(()=>{}) }
