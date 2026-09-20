import net from "node:net"
import fs from "node:fs"
const env = {}
for (const line of fs.readFileSync(".env.local","utf8").split(/\r?\n/)) { const m = line.match(/^([A-Z_]+)=(.*)$/); if (m) env[m[1]] = m[2].replace(/^"|"$/g,"") }
const probe = (label, url) => new Promise(res => {
  const u = new URL(url)
  console.log(label, u.hostname, u.port || 5432)
  const sock = net.createConnection({ host: u.hostname, port: Number(u.port||5432) })
  sock.setTimeout(9000)
  sock.on("connect", () => { const b = Buffer.alloc(8); b.writeInt32BE(8,0); b.writeInt32BE(80877103,4); sock.write(b) })
  sock.on("data", d => { console.log(label, "reply:", JSON.stringify(d.toString("latin1").slice(0,20))); sock.destroy(); res() })
  sock.on("close", () => { console.log(label, "closed"); res() })
  sock.on("timeout", () => { console.log(label, "timeout"); sock.destroy(); res() })
  sock.on("error", e => { console.log(label, "err", e.code); res() })
})
await probe("neon-pooler", env.DATABASE_URL)
setTimeout(()=>process.exit(0), 11000)
