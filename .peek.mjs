import fs from "node:fs"
const lines = fs.readFileSync("apps/api/src/index.js","utf8").split(/\r?\n/)
for (let i = 100; i < 200; i++) console.log(String(i+1).padStart(4), lines[i])
