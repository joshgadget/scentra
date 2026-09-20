const { spawn } = require('node:child_process')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')

const CHROME = 'C:\\Users\\Hi\\AppData\\Local\\ms-playwright\\chromium-1228\\chrome-win64\\chrome.exe'
const APP = 'http://localhost:5173'
const PORT = 9333
const userDir = path.join(os.tmpdir(), 'scentra-cdp-' + Date.now())

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

async function main() {
  const token = (await (await fetch('http://localhost:4000/api/admin/login', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email:'admin@scentra.co', password:'admin' }) })).json()).token
  console.log('token len', token.length)

  const chrome = spawn(CHROME, ['--headless=new','--disable-gpu','--no-first-run','--no-default-browser-check','--remote-debugging-port='+PORT,'--user-data-dir='+userDir,'about:blank'], { stdio:'ignore' })
  try {
    let version
    for (let i=0;i<40;i++){ try { version = await (await fetch('http://127.0.0.1:'+PORT+'/json/version')).json(); break } catch { await sleep(250) } }
    if (!version) throw new Error('chrome did not start')
    const created = await (await fetch('http://127.0.0.1:'+PORT+'/json/new?about:blank', { method:'PUT' })).json()
    const ws = new WebSocket(created.webSocketDebuggerUrl)
    await new Promise((res,rej)=>{ ws.onopen=res; ws.onerror=rej })
    let id = 0
    const pending = new Map()
    const events = []
    ws.onmessage = (m) => { const msg = JSON.parse(m.data); if (msg.id && pending.has(msg.id)) { pending.get(msg.id)(msg); pending.delete(msg.id) } else if (msg.method) events.push(msg) }
    const send = (method, params={}) => new Promise((res)=>{ const i = ++id; pending.set(i,res); ws.send(JSON.stringify({id:i,method,params})) })

    await send('Page.enable'); await send('Runtime.enable'); await send('Log.enable'); await send('Network.enable')
    const evaluate = async (expr) => { const r = await send('Runtime.evaluate',{ expression:expr, returnByValue:true, awaitPromise:true }); return r.result?.result?.value }

    const report = () => {
      const errs = events.filter(e => e.method==='Runtime.exceptionThrown').map(e => e.params.exceptionDetails.exception?.description || e.params.exceptionDetails.text)
      const logs = events.filter(e => e.method==='Runtime.consoleAPICalled' && ['error','warning'].includes(e.params.type)).map(e => e.params.args.map(a=>a.value||a.description).join(' '))
      return { errs, logs }
    }

    const nav = async (url) => { events.length = 0; await send('Page.navigate',{url}); await sleep(9000) }

    await nav(APP + '/')
    await evaluate(`localStorage.setItem('scentra-admin-token', ${JSON.stringify(token)})`)
    console.log('--- load /admin (fresh) ---')
    await nav(APP + '/admin')
    console.log('after fresh load:', JSON.stringify({ rootText: (await evaluate("document.getElementById('root').innerText.slice(0,300)")), rootLen: await evaluate("document.getElementById('root').innerHTML.length"), title: await evaluate('document.title') }))
    console.log('errors:', JSON.stringify(report().errs, null, 1))
    console.log('console:', JSON.stringify(report().logs, null, 1))

    console.log('--- RELOAD /admin ---')
    events.length = 0
    await send('Page.reload', { ignoreCache:false })
    await sleep(9000)
    console.log('after reload:', JSON.stringify({ rootText: (await evaluate("document.getElementById('root').innerText.slice(0,300)")), rootLen: await evaluate("document.getElementById('root').innerHTML.length"), title: await evaluate('document.title'), href: await evaluate('location.href') }))
    console.log('errors:', JSON.stringify(report().errs, null, 1))
    console.log('console:', JSON.stringify(report().logs, null, 1))
    ws.close()
  } finally {
    chrome.kill()
  }
}
main().catch(e => { console.error('SCRIPT ERROR', e); process.exit(1) })
