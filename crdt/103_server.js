var doc = new(require('crdt').Doc);

var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');

var server = http.createServer(function (req, res) {
    if (req.url === '/_replicate') {
        req.pipe(doc.createStream()).pipe(res);
    }
    else ecstatic(req, res);
});
server.listen(Number(process.argv[2]));
