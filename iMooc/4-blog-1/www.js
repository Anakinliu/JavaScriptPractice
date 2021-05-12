const appRouters = require('./app')
const http = require('http')
const PORT = 3000;

const server = http.createServer(appRouters);
server.listen(PORT);
console.log('listening',PORT,'...');