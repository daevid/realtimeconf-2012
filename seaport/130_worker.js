var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.method !== 'POST') res.end('serious business logic\n');
    
    // ...
});
server.listen(8000);
