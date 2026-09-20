const fs=require('fs');
const css=fs.readFileSync('apps/web/src/styles.css','utf8');
const rules=css.split('}').map(r=>r.trim()).filter(Boolean);
const admin=rules.filter(r=>/admin|sidebar|dashboard|metric|stat/i.test(r));
fs.writeFileSync('.tmp-admin-css.txt', admin.map(r=>r+'}').join('\n\n'));
console.log('rules', rules.length, 'admin', admin.length);
console.log('media queries:', rules.filter(r=>r.startsWith('@media')).length);
