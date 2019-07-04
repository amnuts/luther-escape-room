const express = require('express');
const app = express();
const http = require("http").createServer(app);
const io = require('socket.io')(http);
const bodyParser  = require('body-parser');
const port = 3000;
// kid's never see this, so just putting here for now
const incantation = 'spooky';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/game', (req, res) => res.sendFile(__dirname + '/game.html'));
app.get('/control', (req, res) => res.sendFile(__dirname + '/control.html'));
app.post('/check', (req, res) => {
    if (req.body.incantation.toUpperCase() === incantation.toUpperCase()) {
        res.status(200);
        res.send('Congratulations!');
    } else {
        res.status(403);
        res.send('Oh no!');
    }
});

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

http.listen(port, () => console.log(`Escape room listening on ${port}!`));