const express = require('express');
const app = express();
const http = require("http").createServer(app);
const io = require('socket.io')(http);
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/game', (req, res) => res.sendFile(__dirname + '/game.html'));
app.get('/control', (req, res) => res.sendFile(__dirname + '/control.html'));

io.on('connection', (socket) => {
    ['start', 'loaded', 'playing', 'ended'].forEach(function(element) {
        socket.on(`video-${element}`, function(data){
            socket.broadcast.emit(`video-${element}`, data);
        });
        socket.on(`audio-${element}`, function(data){
            socket.broadcast.emit(`audio-${element}`, data);
        });
    });
});

http.listen(port, () => console.log(`Example app listening on port ${port}!`));