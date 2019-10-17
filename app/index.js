var express = require('express');
var cookieParser = require('cookie-parser'); 
var app = express();

app.use(cookieParser());

app.get('/', function(req, res) {
    console.log(`Req ↓ \n Comment: ${req.query.comment}`);
    res.cookie('fake-session-id', 'josivaldo:senha123:ngm-owna-sapoha');
    res.send(`Comment: ${req.query.comment}`);
});

app.listen(80);

console.log('Listening on port 80');
