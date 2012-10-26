var seaport = require('seaport');
var ports = seaport.connect(7000);

var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        // ...
    }
    else ecstatic(req, res);
});

ports.service('web', server.listen.bind(server));
