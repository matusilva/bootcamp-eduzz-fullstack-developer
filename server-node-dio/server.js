const http = require('http');
const host = 'http://localhost';
const port = 3000;

http.createServer((req, res) => {
    res.end('<h1>Funcionando</h1>')
}).listen(port, () => console.log(`server is running in ${host}:${port}`));