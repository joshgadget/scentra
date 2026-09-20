import fs from "node:fs"
const src = fs.readFileSync("apps/web/src/main.jsx","utf8")
const i = src.indexOf("function ProductModal")
const j = src.indexOf("function ", i+10)
const seg = src.slice(i, j)
console.log("len", seg.length)
const k = seg.indexOf("submit=async event")
console.log(seg.slice(k, k+1200))
