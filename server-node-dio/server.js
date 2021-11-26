const http = require('http');
const stats = require('./pcRamUsage');

const host = 'http://localhost';
const port = 3000;

http.createServer((req, res) => {
    let url = req.url;

    if (url === '/status') {
        res.end(JSON.stringify(stats, null, 2));
    } else {
        res.end('<h1>Seja bem vindo</h1>');
    }
}).listen(port, () => console.log(`server is running in ${host}:${port}`));