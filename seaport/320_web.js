var seaport = require('seaport');
var ports = seaport.connect(7000);

var http = require('http');
var server = http.createServer();
