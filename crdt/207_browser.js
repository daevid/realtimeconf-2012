var doc = new(require('crdt').Doc);
var seq = doc.createSeq('type', 'rank');

doc.on('row_update', function (row) {
    // ...
    
    var down = document.createElement('input');
    down.setAttribute('type', 'button');
    down.value = '-';
    div.appendChild(down);
    
    down.addEventListener('click', function () {
        var ix = seq.indexOf(row);
        if (ix === seq.length() - 1) return;
        
        // ...
    });
});

var shoe = require('shoe');
var c = shoe('/sock');
c.pipe(doc.createStream()).pipe(c);
