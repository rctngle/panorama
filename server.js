const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const ip = require('ip');
const clients = [];

app.use(express.static('build'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});	

app.get('/controller', function(req, res){
	res.sendFile(__dirname + '/controller.html');
});	

app.get('/video', function(req, res){
	res.sendFile(__dirname + '/video.html');
});	

http.listen(3000, function(){
	console.log('http://'+ip.address()+':3000');
});

io.on('connection', function(socket){
	clients.push(socket);

	socket.on('msg', function(msg){
		clients.forEach((client) => {
			client.emit('video', msg);
		});
	});
});