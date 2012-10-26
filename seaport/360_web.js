var seaport = require('seaport');
var ports = seaport.connect(7000);

var http = require('http');
var ecstatic = require('ecstatic')(__dirname + '/static');

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        ports.get('business@~0.5.1', function (recs) {
            // ...
        });
    }
    else ecstatic(req, res);
});

ports.service('web', server.listen.bind(server));
