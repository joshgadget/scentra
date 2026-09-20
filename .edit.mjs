import fs from "node:fs"
const [file, spec] = process.argv.slice(2)
const edits = JSON.parse(fs.readFileSync(spec, "utf8"))
let text = fs.readFileSync(file, "utf8")
const eol = text.includes("\r\n") ? "\r\n" : "\n"
const adapt = (s) => s.replace(/\r?\n/g, eol)
let applied = 0
for (const [index, edit] of edits.entries()) {
  const expected = edit.count ?? 1
  const find = text.includes(edit.find) ? edit.find : adapt(edit.find)
  const replace = find === edit.find ? edit.replace : adapt(edit.replace)
  const found = text.split(find).length - 1
  if (found !== expected) { console.error(`EDIT ${index} FAILED: expected ${expected} match(es), found ${found}\n--- anchor ---\n${edit.find.slice(0,240)}`); process.exit(1) }
  text = text.split(find).join(replace)
  applied += 1
}
fs.writeFileSync(file, text)
console.log("applied", applied, "edit(s) to", file)