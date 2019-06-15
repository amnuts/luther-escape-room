const express = require('express');
const app = express();
const http = require("http").createServer(app);
const io = require('socket.io')(http);
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/control', (req, res) => res.sendFile(__dirname + '/control.html'));

io.on('connection', (socket) => {
    socket.on('video-start', function(data){
        socket.broadcast.emit('video-start', data);
    });
    socket.on('video-loaded', function(data){
        socket.broadcast.emit('video-loaded', data);
    });
    socket.on('video-playing', function(data){
        socket.broadcast.emit('video-playing', data);
    });
    socket.on('video-ended', function(data){
        socket.broadcast.emit('video-ended', data);
    });

    socket.on('audio-start', function(data){
        socket.broadcast.emit('audio-start', data);
    });
    socket.on('audio-loaded', function(data){
        socket.broadcast.emit('audio-loaded', data);
    });
    socket.on('audio-playing', function(data){
        socket.broadcast.emit('audio-playing', data);
    });
    socket.on('audio-ended', function(data){
        socket.broadcast.emit('audio-ended', data);
    });
});

http.listen(port, () => console.log(`Example app listening on port ${port}!`));