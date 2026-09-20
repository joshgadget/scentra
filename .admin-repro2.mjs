import { spawn } from "node:child_process"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"

const CHROME = "C:\\Users\\Hi\\AppData\\Local\\ms-playwright\\chromium-1228\\chrome-win64\\chrome.exe"
const APP = "http://localhost:5173", API = "http://localhost:4000", PORT = 9455
const sleep = ms => new Promise(r => setTimeout(r, ms))
const cfg = {}
for (const line of fs.readFileSync("apps/api/.env","utf8").split(/\r?\n/)) { const m = line.match(/^(ADMIN_EMAIL|ADMIN_PASSWORD)=(.*)$/); if (m) cfg[m[1]] = m[2].trim() }
const token = (await (await fetch(API+"/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:cfg.ADMIN_EMAIL,password:cfg.ADMIN_PASSWORD})})).json()).token

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
  await send("Page.enable"); await send("Runtime.enable"); await send("Log.enable"); await send("Network.enable")
  const ev = async expr => { const r = await send("Runtime.evaluate",{expression:expr,returnByValue:true,awaitPromise:true}); if (r.result?.exceptionDetails) return "THROW: "+r.result.exceptionDetails.text+" "+(r.result.exceptionDetails.exception?.description||"").split("\n")[0]; return r.result?.result?.value }
  const nav = async url => { await send("Page.navigate",{url}); await sleep(7000) }
  const netlog = () => events.filter(e=>e.method==="Network.requestWillBeSent"&&e.params.request.url.includes("/api/admin")).map(e=>e.params.request.method+" "+e.params.request.url.replace(API,""))
  const responses = () => events.filter(e=>e.method==="Network.responseReceived"&&e.params.response.url.includes("/api/")).map(e=>e.params.response.status+" "+e.params.response.url.replace(API,""))

  await nav(APP+"/")
  await ev(`localStorage.setItem('scentra-admin-token', ${JSON.stringify(token)})`)
  await nav(APP+"/admin")
  await ev("[...document.querySelectorAll('.admin-sidebar nav button')].find(b=>b.textContent.includes('Settings'))?.click()")
  await sleep(1500)
  const setVal = `(el,v)=>{const proto=el.tagName==='TEXTAREA'?window.HTMLTextAreaElement.prototype:window.HTMLInputElement.prototype;const setter=Object.getOwnPropertyDescriptor(proto,'value').set;setter.call(el,v);el.dispatchEvent(new Event('input',{bubbles:true}))}`
  await ev(`(()=>{const s=${setVal};const c=document.querySelectorAll('.settings-card')[0];const ins=c.querySelectorAll('input,textarea');s(ins[0],'TEST ANNOUNCEMENT 123');s(ins[1],'TEST EYEBROW');return [...ins].map(i=>i.value).join(' || ')})()`)
  await sleep(600)
  console.log("after typing, inputs:", await ev("[...document.querySelectorAll('.settings-card')[0].querySelectorAll('input,textarea')].map(i=>i.value).join(' || ')"))
  events.length = 0
  await ev("document.querySelector('form.settings-card').requestSubmit()")
  await sleep(4000)
  console.log("network:", JSON.stringify(netlog()))
  console.log("responses:", JSON.stringify(responses()))
  console.log("toast:", await ev("document.querySelector('.settings-toast')?.textContent"))
  await sleep(1000)
  console.log("inputs after save:", await ev("[...document.querySelectorAll('.settings-card')[0].querySelectorAll('input,textarea')].map(i=>i.value).join(' || ')"))
  events.length = 0
  await send("Page.reload",{ignoreCache:true}); await sleep(7000)
  await ev("[...document.querySelectorAll('.admin-sidebar nav button')].find(b=>b.textContent.includes('Settings'))?.click()")
  await sleep(1500)
  console.log("after reload:", await ev("[...document.querySelectorAll('.settings-card')[0].querySelectorAll('input,textarea')].map(i=>i.value).join(' || ')"))
  console.log("reload responses:", JSON.stringify(responses()))
  ws.close()
} finally { chrome.kill() }
