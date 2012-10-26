var http = require('http');
var split = require('event-stream').split;

var server = http.createServer(function (req, res) {
    if (req.method !== 'POST') res.end('serious business logic\n');
    
    req.pipe(split('\n'))
});
server.listen(8000);
