import tls from "node:tls"
import fs from "node:fs"
const env = {}
for (const line of fs.readFileSync(".env.local","utf8").split(/\r?\n/)) { const m = line.match(/^([A-Z_]+)=(.*)$/); if (m) env[m[1]] = m[2].replace(/^"|"$/g,"") }
const u = new URL(env.DATABASE_URL)
const sock = tls.connect({ host: u.hostname, port: 5432, servername: u.hostname, rejectUnauthorized: true })
sock.setTimeout(12000)
sock.on("secureConnect", () => { console.log("TLS OK authorized:", sock.authorized, "issuer:", sock.getPeerCertificate()?.issuer?.O); const b=Buffer.alloc(8); b.writeInt32BE(8,0); b.writeInt32BE(80877103,4); sock.write(b) })
sock.on("data", d => { console.log("reply:", d.toString("latin1").slice(0,10)); 
  const user = decodeURIComponent(u.username); const pass = decodeURIComponent(u.password); const db = u.pathname.slice(1)
  const payload = Buffer.from(`user\0${user}\0database\0${db}\0application_name\0probe\0\0`, "utf8")
  const msg = Buffer.alloc(4+4+payload.length); msg.writeInt32BE(4+4+payload.length,0); msg.writeInt32BE(196608,4); payload.copy(msg,8); sock.write(msg) })
let step = 0
sock.on("data", d => { step++; if (step>1) { console.log("after startup, bytes:", d.length, "type:", String.fromCharCode(d[0])); }
  if (d.includes(Buffer.from("AuthenticationSASL")) || d.includes(Buffer.from("SCRAM"))) { console.log("SCRAM challenge received -> auth path reachable"); sock.destroy() }
  if (String.fromCharCode(d[0]) === "E") { console.log("ERROR msg:", d.toString("utf8").replace(/[^\x20-\x7e]/g,".").slice(0,200)); sock.destroy() }
})
sock.on("error", e => console.log("TLS/conn err:", e.code, e.message))
sock.on("close", () => console.log("closed"))
setTimeout(()=>{sock.destroy(); process.exit(0)}, 15000)
