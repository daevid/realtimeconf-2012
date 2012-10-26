var MuxDemux = require('mux-demux');
var net = require('net');

var server = net.createServer(function (stream) {
    var md = new MuxDemux;
    md.pipe(process.stdout);
    
    var a = md.createWriteStream();
    var b = md.createWriteStream();
    
    var fs = require('fs');
    fs.createReadStream('/usr/share/dict/words', { encoding : 'utf8' }).pipe(a);
    fs.createReadStream('/etc/passwd', { encoding : 'utf8' }).pipe(b);
});

server.listen(8000);
