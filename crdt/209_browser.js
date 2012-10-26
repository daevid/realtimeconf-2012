var doc = new(require('crdt').Doc);
var seq = doc.createSeq('type', 'rank');

doc.on('row_update', function (row) {
    if (row.state.type !== 'rank') return;
    
    var spans = document.querySelectorAll('.row span');
    
    [].forEach.call(spans, function (span, ix) {
        if (span.textContent === row.state.value) {
            document.body.removeChild(span.parentNode);
        }
    });
    
    var div = document.createElement('div');
    div.className = 'row';
    
    var ix = seq.indexOf(row);
    if (ix === seq.length() - 1) {
        document.body.appendChild(div);
    }
    else {
        var e = document.querySelectorAll('.row')[ix];
        document.body.insertBefore(div, e);
    }
    
    var span = document.createElement('span');
    span.textContent = row.state.value;
    div.appendChild(span);
    
    var up = document.createElement('input');
    up.setAttribute('type', 'button');
    up.value = '+';
    div.appendChild(up);
    
    var down = document.createElement('input');
    down.setAttribute('type', 'button');
    down.value = '-';
    div.appendChild(down);
    
    up.addEventListener('click', function () {
        var ix = seq.indexOf(row);
        if (ix === 0) return;
        
        seq.remove(row);
        seq.before(row, seq.at(ix - 1));
    });
    
    down.addEventListener('click', function () {
        var ix = seq.indexOf(row);
        if (ix === seq.length() - 1) return;
        
        seq.remove(row);
        seq.after(row, seq.at(ix));
    });
});

var shoe = require('shoe');
var c = shoe('/sock');
c.pipe(doc.createStream()).pipe(c);
