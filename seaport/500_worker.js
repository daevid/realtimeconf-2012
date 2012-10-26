//!run2.sh
var http = require('http');
var split = require('event-stream').split;
var through = require('through');

var server = http.createServer(function (req, res) {
    if (req.method !== 'POST') res.end('serious business logic\n');
    
    req.pipe(split('\n')).pipe(through(function (line) {
        var n = Number(process.argv[2])
            * (Math.pow(1.102, Number(line)) + 8.92) * 1.05
        ;
        this.emit('data', n + '\n');
    })).pipe(res);
});

var seaport = require('seaport');
var ports = seaport.connect(7000);

ports.service('business@0.5.2', {
    enterprise : true,
    webscale : 38
}, server.listen.bind(server));
