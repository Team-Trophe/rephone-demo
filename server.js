import http from 'node:http';
import {readFile} from 'node:fs/promises';
const files={'/':'index.html','/index.html':'index.html','/src.js':'src.js','/style.css':'style.css'};
const types={html:'text/html',js:'text/javascript',css:'text/css'};
const port=Number(process.env.PORT||5173);
http.createServer(async(req,res)=>{const path=new URL(req.url,'http://localhost').pathname;const file=files[path];if(!file){res.writeHead(404);res.end('Not found');return}try{const data=await readFile(new URL(file,import.meta.url));res.writeHead(200,{'Content-Type':types[file.split('.').at(-1)]+'; charset=utf-8','Cache-Control':'no-cache'});res.end(data)}catch{res.writeHead(500);res.end('Unable to read file')}}).listen(port,'0.0.0.0',()=>console.log(`Local: http://localhost:${port}/`));
