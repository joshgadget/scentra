import net from "node:net"
import tls from "node:tls"
import fs from "node:fs"
const env = {}
for (const line of fs.readFileSync(".env.local","utf8").split(/\r?\n/)) { const m = line.match(/^([A-Z_]+)=(.*)$/); if (m) env[m[1]] = m[2].replace(/^"|"$/g,"") }
const u = new URL(env.DATABASE_URL)
console.log("host:", u.hostname)
const raw = net.createConnection({ host: u.hostname, port: 5432 })
let state = "tcp"
raw.setTimeout(15000)
raw.on("connect", () => { const b = Buffer.alloc(8); b.writeInt32BE(8,0); b.writeInt32BE(80877103,4); raw.write(b) })
raw.on("data", chunk => {
  if (state === "tcp") {
    console.log("SSLRequest reply:", JSON.stringify(chunk.toString("latin1")))
    if (chunk.toString("latin1") !== "S") { raw.destroy(); return }
    state = "tls"
    const secure = tls.connect({ socket: raw, servername: u.hostname })
    secure.on("secureConnect", () => {
      state = "startup"
      const user = decodeURIComponent(u.username), db = u.pathname.slice(1).split("?")[0]
      const payload = Buffer.from(`user\0${user}\0database\0${db}\0client_encoding\0UTF8\0\0`, "utf8")
      const msg = Buffer.alloc(8 + payload.length); msg.writeInt32BE(8 + payload.length, 0); msg.writeInt32BE(196608, 4); payload.copy(msg, 8)
      secure.write(msg)
      console.log("startup sent over TLS")
    })
    secure.on("data", d => {
      const tag = String.fromCharCode(d[0])
      console.log("TLS pg msg tag:", tag, "len", d.length)
      if (tag === "R") { console.log("  -> server sent Authentication request; decoding type:", d.readInt32BE(5)); }
      if (tag === "E") { console.log("  -> ERROR:", d.toString("utf8").replace(/[^\x20-\x7e]/g," ").slice(0,200)) }
    })
    secure.on("error", e => console.log("tls err", e.code, e.message))
    return
  }
  const tag = String.fromCharCode(chunk[0])
  console.log("pg msg tag:", tag, "len", chunk.length)
  if (tag === "R") console.log("  -> Authentication type:", chunk.readInt32BE(5))
  if (tag === "E") console.log("  -> ERROR:", chunk.toString("utf8").replace(/[^\x20-\x7e]/g," ").slice(0,300))
})
raw.on("error", e => console.log("raw err", e.code, e.message))
raw.on("close", () => console.log("closed, final state", state))
setTimeout(() => { console.log("done"); process.exit(0) }, 20000)
