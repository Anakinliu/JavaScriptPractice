var http = require('http')

/*
accept: 'text/html,
application/xhtml+xml,
application/xml;

q=0.9,
image/avif,
image/webp,
image/apng,

q=0.8,
application/signed-exchange;
v=b3;
q=0.9',
*/
http.createServer(function(req, resp) {
    // console.log(req);
resp.writeHead(200, {
    "Content-Type": "text/html"
});
resp.write('<h1>ENGLISH</h1>');
    resp.end();
}).listen(8888);


