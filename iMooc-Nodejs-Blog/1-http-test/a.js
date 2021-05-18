const http = require('http');

const server = http.createServer((req, res) => {
    /**
     * req : http.IncomingMessage 类
     * res : http.ServerResponse 类
     */
    console.log('客户端请求的URL为 ', req.url);
    res.writeHead(200, {
        'content-type': 'text/html'
    });
    res.end('<h1>END</h1>');
});

server.listen(8888, () => {
    console.log('监听8888端口');
})