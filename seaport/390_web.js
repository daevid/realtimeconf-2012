var seaport = require('seaport');
var ports = seaport.connect(7000);

var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');
var request = require('request');
var split = require('event-stream').split;

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        ports.get('business@~0.5.1', function (recs) {
            var rec = recs[Math.floor(Math.random() * recs.length)];
            var u = 'http://' + rec.host + ':' + rec.port;
            var r = request.post(u);
            
            r.pipe(split('\n'))
        });
    }
    else ecstatic(req, res);
});

ports.service('web', server.listen.bind(server));
