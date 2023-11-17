const http = require('http');

const server = http.createServer((req, res) => {
    // console.log('Request Made');
    console.log(req.url, req.method);
    res.setHeader('content-type', 'text/plain');
    res.write('hello world');
    res.end();
  });

server.listen(3000, 'localhost', () => {
    console.log('Listening for request at port 3000');
});