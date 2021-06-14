const appRouters = require('../app')
const http = require('http')
const PORT = 8000;

const server = http.createServer(appRouters);
server.listen(PORT);
console.log('listening',PORT,'...');