var doc = new(require('crdt').Doc);
var seq = doc.createSeq('type', 'rank');

doc.on('row_update', function (row) {
    // ...
    
    var up = document.createElement('input');
    up.setAttribute('type', 'button');
    up.value = '+';
    div.appendChild(up);
    
    up.addEventListener('click', function () {
        var ix = seq.indexOf(row);
        if (ix === 0) return;
        
        // ...
    });
});

var shoe = require('shoe');
var c = shoe('/sock');
c.pipe(doc.createStream()).pipe(c);
