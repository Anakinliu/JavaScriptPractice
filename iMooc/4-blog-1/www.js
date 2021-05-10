const routers = require('./app')
const http = require('http')
const PORT = 3000;

const server = http.createServer(routers);
server.listen(PORT);
console.log('listening',PORT,'...');