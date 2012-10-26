var doc = new(require('crdt').Doc);
var seq = doc.createSeq('type', 'rank');

doc.on('row_update', function (row) {
    // ...
});

var shoe = require('shoe');
var c = shoe('/sock');
c.pipe(doc.createStream()).pipe(c);
