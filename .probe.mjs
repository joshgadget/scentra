import fs from "node:fs"
const cfg = {}
for (const line of fs.readFileSync("apps/api/.env","utf8").split(/\r?\n/)) { const m = line.match(/^(ADMIN_EMAIL|ADMIN_PASSWORD)=(.*)$/); if (m) cfg[m[1]] = m[2].trim() }
const API = "http://localhost:4000"
const token = (await (await fetch(API+"/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:cfg.ADMIN_EMAIL,password:cfg.ADMIN_PASSWORD})})).json()).token
const H = { "Content-Type":"application/json", Authorization:"Bearer "+token }
const j = async (u,o) => { const r = await fetch(API+u,{...o,headers:H}); return { status:r.status, body: await r.json().catch(()=>null) } }
console.log("health:", (await j("/api/health")).body)
const created = await j("/api/admin/products",{method:"POST",body:JSON.stringify({name:"API PROBE "+Date.now(),category:"Custom Perfume",categorySlug:"custom-perfumes",brand:"PB",description:"d",images:[],variants:[{size:"50ml",price:1000,stock:3}]})})
console.log("create:", created.status, "id:", created.body?.id, "slug:", created.body?.slug)
const list1 = await j("/api/admin/products")
console.log("list has probe:", list1.body.some(p=>p.id===created.body.id), "total:", list1.body.length, "first:", list1.body[0]?.name)
console.log("health:", (await j("/api/health")).body)
const list2 = await j("/api/admin/products")
console.log("second list has probe:", list2.body.some(p=>p.id===created.body.id), "total:", list2.body.length)
await new Promise(r=>setTimeout(r,3000))
const list3 = await j("/api/admin/products")
console.log("after 3s has probe:", list3.body.some(p=>p.id===created.body.id), "total:", list3.body.length, "first:", list3.body[0]?.name)
