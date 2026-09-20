import { PrismaClient } from "@prisma/client"
import fs from "node:fs"
const env = {}
for (const line of fs.readFileSync(".env.local","utf8").split(/\r?\n/)) { const m = line.match(/^([A-Z_]+)=(.*)$/); if (m) env[m[1]] = m[2].replace(/^"|"$/g,"") }
const strip = (u) => u.replace(/[?&](channel_binding|sslmode)=[^&]*/g, "").replace(/\?&/,"?").replace(/\?$/,"")
const variants = [ ["as-is", env.DATABASE_URL], ["no-channel-binding", env.DATABASE_URL.replace(/[?&]channel_binding=require/,"")], ["no-params", strip(env.DATABASE_URL)], ["direct", env.DATABASE_URL_UNPOOLED] ]
for (const [label, url] of variants) {
  const prisma = new PrismaClient({ datasourceUrl: url })
  try { const t=Date.now(); const r = await prisma.$queryRaw`select 1 as ok`; console.log(label, "OK", Date.now()-t+"ms") }
  catch (e) { console.log(label, "FAIL", String(e.message).split("\n").filter(Boolean).slice(-1)[0].slice(0,160)) }
  finally { await prisma.$disconnect().catch(()=>{}) }
}
