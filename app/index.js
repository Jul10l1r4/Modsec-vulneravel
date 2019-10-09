var express = require('express');
var app = express();

app.get('/', function(req, res) {
    console.log(`Req ↓ \n Comment: ${req.query.comment}`);
    res.send(`Comment: ${req.query.comment}`);
});

app.listen(80);

console.log('Listening on port 80');
