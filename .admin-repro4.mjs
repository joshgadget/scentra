import { spawn } from "node:child_process"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
const CHROME = "C:\\Users\\Hi\\AppData\\Local\\ms-playwright\\chromium-1228\\chrome-win64\\chrome.exe"
const APP="http://localhost:5173", API="http://localhost:4000", PORT=9477
const sleep = ms => new Promise(r=>setTimeout(r,ms))
const cfg = {}
for (const line of fs.readFileSync("apps/api/.env","utf8").split(/\r?\n/)) { const m = line.match(/^(ADMIN_EMAIL|ADMIN_PASSWORD)=(.*)$/); if (m) cfg[m[1]]=m[2].trim() }
const token = (await (await fetch(API+"/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:cfg.ADMIN_EMAIL,password:cfg.ADMIN_PASSWORD})})).json()).token
const chrome = spawn(CHROME, ["--headless=new","--disable-gpu","--no-first-run","--remote-debugging-port="+PORT,"--user-data-dir="+path.join(os.tmpdir(),"scentra-cdp-"+Date.now()),"about:blank"], { stdio:"ignore" })
try {
  let version
  for (let i=0;i<40;i++){ try { version = await (await fetch("http://127.0.0.1:"+PORT+"/json/version")).json(); break } catch { await sleep(250) } }
  const created = await (await fetch("http://127.0.0.1:"+PORT+"/json/new?about:blank",{method:"PUT"})).json()
  const ws = new WebSocket(created.webSocketDebuggerUrl)
  await new Promise((res,rej)=>{ws.onopen=res;ws.onerror=rej})
  let id=0; const pending=new Map(); const reqs=[]
  ws.onmessage = m => { const msg=JSON.parse(m.data); if(msg.id&&pending.has(msg.id)){pending.get(msg.id)(msg);pending.delete(msg.id)} else if(msg.method==="Network.responseReceived"&&msg.params.response.url.includes("/api/admin/products")&&msg.params.response.mimeType.includes("json")) reqs.push(msg.params.requestId) }
  const send=(method,params={})=>new Promise(res=>{const i=++id;pending.set(i,res);ws.send(JSON.stringify({id:i,method,params}))})
  await send("Page.enable"); await send("Runtime.enable"); await send("Network.enable")
  const ev = async expr => { const r = await send("Runtime.evaluate",{expression:`(()=>{${expr}})()`,returnByValue:true,awaitPromise:true}); if(r.result?.exceptionDetails) return "THROW: "+(r.result.exceptionDetails.exception?.description||"").split("\n")[0]; return r.result?.result?.value }
  await send("Page.navigate",{url:APP+"/"}); await sleep(7000)
  await ev(`localStorage.setItem('scentra-admin-token', ${JSON.stringify(token)})`)
  await send("Page.navigate",{url:APP+"/admin"}); await sleep(8000)
  const names = () => ev(`return [...document.querySelectorAll('.product-admin-row strong')].map(s=>s.textContent)`)
  await ev(`([...document.querySelectorAll('.admin-sidebar nav button')].find(b=>b.textContent.includes('Products'))).click()`); await sleep(1500)
  console.log("names BEFORE:", JSON.stringify(await names()))
  reqs.length = 0
  await send("Page.reload",{ignoreCache:true}); await sleep(9000)
  await ev(`([...document.querySelectorAll('.admin-sidebar nav button')].find(b=>b.textContent.includes('Products'))).click()`); await sleep(1500)
  console.log("names AFTER :", JSON.stringify(await names()))
  for (const rid of reqs) { const body = await send("Network.getResponseBody",{requestId:rid}); console.log("response body:", String(body.result?.body||"").slice(0,600)) }
  ws.close()
} finally { chrome.kill() }
