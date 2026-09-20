import { spawn } from "node:child_process"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"

const CHROME = "C:\\Users\\Hi\\AppData\\Local\\ms-playwright\\chromium-1228\\chrome-win64\\chrome.exe"
const APP = "http://localhost:5173", API = "http://localhost:4000", PORT = 9444
const sleep = ms => new Promise(r => setTimeout(r, ms))
const cfg = {}
for (const line of fs.readFileSync("apps/api/.env","utf8").split(/\r?\n/)) { const m = line.match(/^(ADMIN_EMAIL|ADMIN_PASSWORD)=(.*)$/); if (m) cfg[m[1]] = m[2].trim() }

const login = await fetch(API+"/api/admin/login", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ email:cfg.ADMIN_EMAIL, password:cfg.ADMIN_PASSWORD }) })
const loginBody = await login.json()
console.log("login status", login.status, "token?", Boolean(loginBody.token))
if (!loginBody.token) { console.log(JSON.stringify(loginBody)); process.exit(1) }
const token = loginBody.token

const chrome = spawn(CHROME, ["--headless=new","--disable-gpu","--no-first-run","--remote-debugging-port="+PORT,"--user-data-dir="+path.join(os.tmpdir(),"scentra-cdp-"+Date.now()),"about:blank"], { stdio:"ignore" })
try {
  let version
  for (let i=0;i<40;i++){ try { version = await (await fetch("http://127.0.0.1:"+PORT+"/json/version")).json(); break } catch { await sleep(250) } }
  if (!version) throw new Error("chrome did not start")
  const created = await (await fetch("http://127.0.0.1:"+PORT+"/json/new?about:blank", { method:"PUT" })).json()
  const ws = new WebSocket(created.webSocketDebuggerUrl)
  await new Promise((res,rej)=>{ ws.onopen=res; ws.onerror=rej })
  let id=0; const pending=new Map(); const events=[]
  ws.onmessage = m => { const msg=JSON.parse(m.data); if(msg.id&&pending.has(msg.id)){pending.get(msg.id)(msg);pending.delete(msg.id)} else if(msg.method) events.push(msg) }
  const send = (method,params={}) => new Promise(res=>{const i=++id;pending.set(i,res);ws.send(JSON.stringify({id:i,method,params}))})
  await send("Page.enable"); await send("Runtime.enable"); await send("Log.enable")
  const ev = async expr => { const r = await send("Runtime.evaluate",{expression:expr,returnByValue:true,awaitPromise:true}); return r.result?.result?.value ?? (r.result?.exceptionDetails ? "THROW:"+r.result.exceptionDetails.text : undefined) }
  const nav = async url => { events.length=0; await send("Page.navigate",{url}); await sleep(7000) }
  const errs = () => events.filter(e=>e.method==="Runtime.exceptionThrown").map(e=>e.params.exceptionDetails.exception?.description?.split("\n")[0])
  const warns = () => events.filter(e=>e.method==="Runtime.consoleAPICalled"&&["error","warning"].includes(e.params.type)).map(e=>e.params.args.map(a=>String(a.value||a.description||"")).join(" ").slice(0,160))

  await nav(APP+"/")
  await ev(`localStorage.setItem('scentra-admin-token', ${JSON.stringify(token)})`)
  await nav(APP+"/admin")
  console.log("admin heading:", await ev("document.querySelector('.admin-main h1')?.textContent"))
  console.log("sidebar:", await ev("[...document.querySelectorAll('.admin-sidebar nav button')].map(b=>b.textContent).join('|')"))

  // go to Settings
  await ev("[...document.querySelectorAll('.admin-sidebar nav button')].find(b=>b.textContent.includes('Settings'))?.click()")
  await sleep(1200)
  console.log("settings inputs:", await ev("[...document.querySelectorAll('.settings-card input,.settings-card textarea')].map(i=>i.tagName+':'+(i.value||'').slice(0,40)).join(' || ')"))

  // change announcement + hero, save content
  await ev(`(()=>{const inputs=[...document.querySelectorAll('.settings-card')][0].querySelectorAll('input,textarea');inputs[0].value='TEST ANNOUNCEMENT 123';inputs[0].dispatchEvent(new Event('input',{bubbles:true}));inputs[1].value='TEST EYEBROW';inputs[1].dispatchEvent(new Event('input',{bubbles:true}));return inputs[0].value})()`)
  await sleep(300)
  await ev("document.querySelectorAll('.settings-card form, form.settings-card')[0].requestSubmit()")
  await sleep(2500)
  console.log("toast:", await ev("document.querySelector('.settings-toast')?.textContent"))
  console.log("PUT observed errors:", JSON.stringify(errs()))

  // now reload page and check persisted value
  events.length=0
  await send("Page.reload",{ignoreCache:true}); await sleep(7000)
  await ev("[...document.querySelectorAll('.admin-sidebar nav button')].find(b=>b.textContent.includes('Settings'))?.click()")
  await sleep(1500)
  console.log("AFTER RELOAD announcement/eyebrow:", await ev("[...document.querySelectorAll('.settings-card')][0] && [...[...document.querySelectorAll('.settings-card')][0].querySelectorAll('input,textarea')].map(i=>i.value.slice(0,40)).join(' || ')"))
  console.log("reload errors:", JSON.stringify(errs()))

  // check the storefront sees the change
  await nav(APP+"/")
  console.log("storefront announcement:", await ev("document.querySelector('.announcement')?.innerText.slice(0,80)"))
  console.log("storefront hero:", await ev("document.querySelector('h1')?.innerText.slice(0,80)"))
  ws.close()
} finally { chrome.kill() }
