const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: {origin: "*"}
});


io.on('connection', (socket) => {
    console.log('a user connected');

    const count = io.engine.clientsCount;
    var messag = {
        "msg": `Connection Established, Users connected: ${count}`,
        "timeStamp": "",
        "username": "SOCKET-IO"
    }

    io.emit('new_message',messag)
    

    socket.on('new_message' , (message) => {
        console.log(message);
        io.emit('new_message', message);
    })
})


http.listen(3000, ()=> console.log('listening on http://localhost:3000'));