const http = require('http');
const system = require('system-commands')


const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    console.log(req instanceof http.ClientRequest);
    console.log(req.rawHeaders);
    console.log(req.url);

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    if (req.url === '/on') {
        res.end('开启\n');
        // async/await

        // Handling errors
        system('wakeonlan 04:d4:c4:ec:55:30').then(output => {
            // Log the output
            console.log(output)
        }).catch(error => {
            // An error occurred! Log the error
            console.error(error)
        })
        return;
    }
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});