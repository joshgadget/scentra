import fs from "node:fs"
const src = fs.readFileSync("apps/web/src/main.jsx","utf8")
const i = src.indexOf("return <form className='product-modal'")
console.log(i)
console.log(src.slice(i, i+3000))
