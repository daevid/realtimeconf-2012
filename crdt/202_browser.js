var doc = new(require('crdt').Doc);
var seq = doc.createSeq('type', 'rank');

var shoe = require('shoe');
var c = shoe('/sock');
c.pipe(doc.createStream()).pipe(c);
