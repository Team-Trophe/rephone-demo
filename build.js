import {mkdir,copyFile} from 'node:fs/promises';
await mkdir(new URL('./dist/',import.meta.url),{recursive:true});
for(const file of ['index.html','src.js','style.css'])await copyFile(new URL(file,import.meta.url),new URL('dist/'+file,import.meta.url));
console.log('Static production files created in dist/');
