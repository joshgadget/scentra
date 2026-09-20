import { spawnSync } from "node:child_process"
import fs from "node:fs"
const CODEX = "C:\\Program Files\\WindowsApps\\OpenAI.CodexBeta_26.715.3651.0_x64__2p2nqsd0c76g0\\app\\resources\\codex.exe"
const patch = fs.readFileSync(process.argv[2], "utf8")
const r = spawnSync(CODEX, ["--codex-run-as-apply-patch", patch], { encoding:"utf8", cwd: process.cwd() })
console.log("status", r.status)
console.log(r.stdout || "", r.stderr || "")
