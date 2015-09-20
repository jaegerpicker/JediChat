var express = require('express');
var app = express();
var routes = require('./lib/routes');
var socket_io = require('socket.io');
var http = require('http').Server(app);

app.use(express.static('public'));

var io = socket_io(http);
var users_connected = 0;
io.on('connection', function (socket) {
    console.log('Client connected');
    socket.broadcast.emit('Client Connected');
    users_connected += 1;
    socket.broadcast.emit(users_connected + ' users connected since startup');
    socket.on('message', function(message) {
      console.log('Received message:', message);
      socket.broadcast.emit('message', message);
    });
});

// Add routes to our app
routes(app);

http.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening');
});
