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

var request = require('request');
process.argv.slice(3).forEach(function (port) {
    var s = doc.createStream();
    s.pipe(request.put('http://localhost:' + port + '/_replicate')).pipe(s);
});
