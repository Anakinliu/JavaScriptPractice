const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    console.log('receive method： ', req.method);
    const url = req.url;
    console.log('url: ', url);
    console.log('url.split("?")[1]: ', url.split("?")[1]);
    // parse将url转为对象的形式
    req.queryUrl = querystring.parse(url.split("?")[1]);
    console.log('query url: ', req.queryUrl);
    console.log('JSON.stringify: ', JSON.stringify(req.queryUrl));
    res.end(
        JSON.stringify(req.queryUrl)
    );

})


server.listen(3060);
console.log('listening...');