var doc = new(require('crdt').Doc);

var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');

var server = http.createServer(function (req, res) {
    ecstatic(req, res);
});
server.listen(Number(process.argv[2]));
