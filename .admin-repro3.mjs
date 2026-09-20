import { spawn } from "node:child_process"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"

const CHROME = "C:\\Users\\Hi\\AppData\\Local\\ms-playwright\\chromium-1228\\chrome-win64\\chrome.exe"
const APP = "http://localhost:5173", API = "http://localhost:4000", PORT = 9466
const sleep = ms => new Promise(r => setTimeout(r, ms))
const cfg = {}
for (const line of fs.readFileSync("apps/api/.env","utf8").split(/\r?\n/)) { const m = line.match(/^(ADMIN_EMAIL|ADMIN_PASSWORD)=(.*)$/); if (m) cfg[m[1]] = m[2].trim() }
const token = (await (await fetch(API+"/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:cfg.ADMIN_EMAIL,password:cfg.ADMIN_PASSWORD})})).json()).token

// seed an order so the Orders tab has something
const order = await (await fetch(API+"/api/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({customer:{name:"Test Buyer",email:"buyer@example.com",phone:"08030000000"},shippingAddress:{address:"1 Test Street",city:"Lagos",state:"Lagos",note:""},items:[{productId:"p1",variantId:"p1-50",name:"Noir Santal",size:"50ml",qty:1,price:42000}]})})).json()
console.log("seeded order:", order.orderNumber || JSON.stringify(order).slice(0,120))

const chrome = spawn(CHROME, ["--headless=new","--disable-gpu","--no-first-run","--remote-debugging-port="+PORT,"--user-data-dir="+path.join(os.tmpdir(),"scentra-cdp-"+Date.now()),"about:blank"], { stdio:"ignore" })
try {
  let version
  for (let i=0;i<40;i++){ try { version = await (await fetch("http://127.0.0.1:"+PORT+"/json/version")).json(); break } catch { await sleep(250) } }
  const created = await (await fetch("http://127.0.0.1:"+PORT+"/json/new?about:blank",{method:"PUT"})).json()
  const ws = new WebSocket(created.webSocketDebuggerUrl)
  await new Promise((res,rej)=>{ ws.onopen=res; ws.onerror=rej })
  let id=0; const pending=new Map(); const events=[]
  ws.onmessage = m => { const msg=JSON.parse(m.data); if(msg.id&&pending.has(msg.id)){pending.get(msg.id)(msg);pending.delete(msg.id)} else if(msg.method) events.push(msg) }
  const send=(method,params={})=>new Promise(res=>{const i=++id;pending.set(i,res);ws.send(JSON.stringify({id:i,method,params}))})
  await send("Page.enable"); await send("Runtime.enable"); await send("Network.enable")
  const ev = async expr => { const r = await send("Runtime.evaluate",{expression:`(()=>{${expr}})()`,returnByValue:true,awaitPromise:true}); if (r.result?.exceptionDetails) return "THROW: "+(r.result.exceptionDetails.exception?.description||r.result.exceptionDetails.text||"").split("\n")[0]; return r.result?.result?.value }
  const nav = async url => { await send("Page.navigate",{url}); await sleep(7000) }
  const setNative = `const set=(el,v)=>{const proto=el.tagName==='TEXTAREA'?window.HTMLTextAreaElement.prototype:el.tagName==='SELECT'?window.HTMLSelectElement.prototype:window.HTMLInputElement.prototype;Object.getOwnPropertyDescriptor(proto,'value').set.call(el,v);el.dispatchEvent(new Event(el.tagName==='SELECT'?'change':'input',{bubbles:true}))};`
  const apiCalls = () => events.filter(e=>e.method==="Network.responseReceived"&&e.params.response.url.includes("/api/")).map(e=>e.params.response.status+" "+e.params.response.url.split("/api/")[1])
  const section = async name => { await ev(`([...document.querySelectorAll('.admin-sidebar nav button')].find(b=>b.textContent.includes(${JSON.stringify(name)}))||{click(){}}).click()`); await sleep(1500) }

  await nav(APP+"/")
  await ev(`localStorage.setItem('scentra-admin-token', ${JSON.stringify(token)})`)
  await nav(APP+"/admin")

  // ---- ADD PRODUCT ----
  await section("Products")
  events.length = 0
  await ev(`([...document.querySelectorAll('.admin-actions button')].find(b=>b.textContent.includes('Add product'))||{click(){}}).click()`); await sleep(800)
  console.log("modal open:", await ev(`return !!document.querySelector('.product-modal')`))
  await ev(`${setNative}
    const f=document.querySelector('.product-modal');
    set(f.querySelector("input[name='name']"),'REPRO TEST PERFUME');
    set(f.querySelector("input[name='brand']"),'REPROBRAND');
    set(f.querySelector("textarea[name='description']"),'A product created by the reproduction test.');
    const rows=f.querySelectorAll('.variant-row');
    const ins=rows[0].querySelectorAll('input');
    set(ins[0],'50ml'); set(ins[1],'12345'); set(ins[2],'7');
    return 'filled';`)
  await sleep(500)
  await ev(`document.querySelector('.product-modal').requestSubmit()`); await sleep(3000)
  console.log("after save, modal still open:", await ev(`return !!document.querySelector('.product-modal')`), "modal error:", await ev(`return document.querySelector('.product-modal .form-error')?.textContent||''`))
  console.log("api:", JSON.stringify(apiCalls()))
  console.log("row present:", await ev(`return [...document.querySelectorAll('.product-admin-row')].some(r=>r.textContent.includes('REPRO TEST PERFUME'))`))
  events.length = 0
  await send("Page.reload",{ignoreCache:true}); await sleep(7000)
  await section("Products")
  console.log("AFTER RELOAD row present:", await ev(`return [...document.querySelectorAll('.product-admin-row')].some(r=>r.textContent.includes('REPRO TEST PERFUME'))`))
  console.log("api:", JSON.stringify(apiCalls()))

  // ---- ORDER STATUS ----
  await section("Orders")
  console.log("order rows:", await ev(`return document.querySelectorAll('.order-table tbody tr, .order-row, table tbody tr').length`))
  console.log("order table html sample:", await ev(`return (document.querySelector('.admin-panel')?.innerText||'').slice(0,200)`))
  ws.close()
} finally { chrome.kill() }
