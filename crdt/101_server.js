var doc = new(require('crdt').Doc);

var http = require('http');

var server = http.createServer(function (req, res) {
    // ...
});
server.listen(Number(process.argv[2]));
