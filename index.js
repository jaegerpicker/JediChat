var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/jedi/:firstName/:lastname', function(req, res){
  res.json({ name: req.params.firstName.substr(0,2) + req.params.lastname.substr(0,3) });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
