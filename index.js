import express from 'express'
const http = require('http');
const PORT = 3000;

const app = express()
app.get('/usuarios',(re,res) => res.send('obteniendo usuarios'))
app.post('/usuarios',(re,res) => res.send('creando usuarios'))
app.put('/usuarios',(re,res) => res.send('actualizando usuarios'))
app.delete('/usuarios',(re,res) => res.send('eliminando usuarios'))

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
