import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png' };
const server = http.createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const clean = pathname === '/' ? '/index.html' : (path.extname(pathname) ? pathname : pathname.replace(/\/$/, '') + '.html');
    const file = path.resolve(root, '.' + clean);
    if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
    const data = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  } catch { res.writeHead(404).end('Page not found'); }
});
server.listen(3000, '127.0.0.1', () => console.log('Old Crow Coffee Company is ready at http://localhost:3000'));


