import fs from "node:fs"
const lines = fs.readFileSync("apps/api/src/index.js","utf8").split(/\r?\n/)
console.log("TOTAL", lines.length)
const show = (a,b) => { for (let i=a;i<b;i++) console.log(String(i+1).padStart(4), lines[i]) }
show(39,100)
console.log("...")
show(532,600)
