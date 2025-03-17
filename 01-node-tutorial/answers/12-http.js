const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else {
        res.end(`
        <p>This page is not avaiable</p>
        <a href="/">back home</a>
        `);
    }

});

server.listen(3000);