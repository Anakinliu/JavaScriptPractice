const http = require('http');
const queryString = require('querystring');

const server = http.createServer((req, res) => {
    req.setEncoding('utf8');
    res.setHeader('Content-type', 'application/json');
    const origin = req.headers['origin'];
    const host = req.headers['host'];
    const userAgent = req.headers['user-agent'];
    const url = req.url;
    const query = queryString.parse(url.split("?")[1]);
    const resData = {
        url,
        query,
        userAgent,
        host,
        origin
    };

    if (req.method === 'GET') {
        res.end(JSON.stringify(resData));
    }

    if (req.method === 'POST') {
        // 设置接收的 data 的编码，不设置会认为是 Buffer 对象
        
        let body = ''; 
        // console.log(typeof req.headers);  // object
        // data事件是req类的父类(stream.Readable 类)的事件
        req.on('data', (chunk) => {
            body += chunk;
        }); 

        // end 事件表明整个请求体已经被接收
        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                resData.postRes = data;
                res.end(JSON.stringify(resData));
            } catch (er) {
                //解析失败
                res.statusCode = 400;
                return res.end(`错误：${er.message}`);
            }
        })
    }
    
});

server.listen(3000);
console.log('listning...');