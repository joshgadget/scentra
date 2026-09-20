import dns from "node:dns/promises"
import net from "node:net"
const host = "ep-square-term-zaxkl2b6-pooler.c-2.eu-west-2.aws.neon.tech"
const [a, aaaa] = await Promise.allSettled([dns.resolve4(host), dns.resolve6(host)])
console.log("A:", a.status==="fulfilled" ? a.value : String(a.reason).slice(0,60))
console.log("AAAA:", aaaa.status==="fulfilled" ? aaaa.value : String(aaaa.reason).slice(0,60))
if (aaaa.status === "fulfilled" && aaaa.value.length) {
  await new Promise(res => {
    const s = net.createConnection({ host: aaaa.value[0], port: 5432 })
    s.setTimeout(8000); s.on("connect", ()=>{console.log("IPv6 connect OK"); s.destroy(); res()}); s.on("timeout",()=>{console.log("IPv6 timeout"); s.destroy(); res()}); s.on("error",e=>{console.log("IPv6 error", e.code); res()})
  })
}
