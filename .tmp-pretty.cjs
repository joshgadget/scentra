const fs=require('fs');
const css=fs.readFileSync('apps/web/src/styles.css','utf8');
// crude pretty printer
let out='',depth=0,rule='';
const parts=css.split('}');
parts.forEach((p,i)=>{
  rule+=(rule?'}':'')+p;
  if(i<parts.length-1){
    out+=rule.trim()+'\n';
    rule='';
  }
});
fs.writeFileSync('.tmp-styles-pretty.css', out);
console.log(out.split('\n').length);
