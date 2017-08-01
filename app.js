const http = require('http');

const WELCOME = 'Hello, world. This is a demo application to experiment ' +
  'with integrating docker into my development workflow.';

const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(WELCOME);
});


server.listen(8080);

console.log('Server running at http://127.0.0.1:8080/');

