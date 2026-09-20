import fs from "node:fs"
const cfg = {}
for (const line of fs.readFileSync("apps/api/.env","utf8").split(/\r?\n/)) { const m = line.match(/^(ADMIN_EMAIL|ADMIN_PASSWORD)=(.*)$/); if (m) cfg[m[1]] = m[2].trim() }
const API = "http://localhost:4000"
const token = (await (await fetch(API+"/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:cfg.ADMIN_EMAIL,password:cfg.ADMIN_PASSWORD})})).json()).token
const H = { "Content-Type":"application/json", Authorization:"Bearer "+token }
const health = async () => (await (await fetch(API+"/api/health")).json()).database
let mode = await health()
console.log("startup mode:", mode)
const deadline = Date.now() + 150000
while (mode !== "postgresql" && Date.now() < deadline) { await new Promise(r=>setTimeout(r,5000)); mode = await health(); console.log("poll:", mode) }
if (mode !== "postgresql") { console.log("flag never flipped in time"); process.exit(0) }
console.log("flag flipped to postgresql -> firing an admin WRITE at the real DB")
const t = Date.now()
const r = await fetch(API+"/api/admin/settings/content", { method:"PUT", headers:H, body: JSON.stringify({ announcement:"LOST-WRITE-"+Date.now() }) })
const text = await r.text()
console.log("PUT status:", r.status, (Date.now()-t)+"ms", "ctype:", r.headers.get("content-type"))
console.log("body:", text.replace(/\s+/g," ").slice(0,300))
console.log("health now:", await health())
const s = await (await fetch(API+"/api/admin/settings",{headers:H})).json()
console.log("stored announcement:", s.content?.announcement)
