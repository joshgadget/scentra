const fs=require('fs');
const lines=fs.readFileSync('apps/web/src/main.jsx','utf8').split(/\r?\n/);
const n=Number(process.argv[2]);
const s=lines[n-1];
const w=Number(process.argv[3]||150);
for(let i=0;i<s.length;i+=w) console.log(String(i).padStart(5)+' | '+s.substr(i,w));
