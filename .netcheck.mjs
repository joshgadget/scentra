import net from 'node:net'
const hosts = [['ep-square-term-zaxkl2b6-pooler.c-2.eu-west-2.aws.neon.tech',5432],['aws-0-eu-west-2.pooler.supabase.com',6543],['google.com',443]]
for (const [h,p] of hosts) {
  await new Promise(res => {
    const s = net.createConnection({host:h,port:p})
    const done = (msg) => { s.destroy(); console.log(h+':'+p, msg); res() }
    s.setTimeout(8000)
    s.on('connect',()=>done('TCP OK'))
    s.on('timeout',()=>done('timeout'))
    s.on('error',e=>done('error '+e.code))
  })
}
