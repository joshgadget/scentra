import fs from "node:fs"
const cfg = {}
for (const line of fs.readFileSync("apps/api/.env","utf8").split(/\r?\n/)) { const m = line.match(/^(ADMIN_EMAIL|ADMIN_PASSWORD)=(.*)$/); if (m) cfg[m[1]] = m[2].trim() }
const API = "http://localhost:4000"
const token = (await (await fetch(API+"/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:cfg.ADMIN_EMAIL,password:cfg.ADMIN_PASSWORD})})).json()).token
const H = { "Content-Type":"application/json", Authorization:"Bearer "+token }
const timed = async (label, url, opts) => {
  const t = Date.now()
  try { const r = await fetch(API+url, { ...opts, headers: H }); const text = await r.text()
    console.log(label, "->", r.status, (Date.now()-t)+"ms", "ctype:", r.headers.get("content-type")?.slice(0,30), "|", text.slice(0,120).replace(/\s+/g," ")) }
  catch (e) { console.log(label, "-> fetch error", e.message, (Date.now()-t)+"ms") }
}
await timed("HEALTH before", "/api/health", { method:"GET" })
await timed("GET dashboard", "/api/admin/dashboard", { method:"GET" })
await timed("HEALTH after dashboard", "/api/health", { method:"GET" })
await timed("PUT settings/content", "/api/admin/settings/content", { method:"PUT", body: JSON.stringify({ announcement:"PROBE-"+Date.now(), heroEyebrow:"PROBE", heroTitle:"PROBE" }) })
await timed("GET settings", "/api/admin/settings", { method:"GET" })
await timed("HEALTH after put", "/api/health", { method:"GET" })
await timed("GET dashboard 2", "/api/admin/dashboard", { method:"GET" })
await timed("HEALTH final", "/api/health", { method:"GET" })
