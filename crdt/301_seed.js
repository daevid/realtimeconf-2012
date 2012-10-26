var doc = new(require('crdt').Doc);
var seq = doc.createSeq('type', 'rank');

var request = require('request');
var r = request.put('http://localhost:' + process.argv[2] + '/_replicate');
r.pipe(doc.createStream()).pipe(r);
