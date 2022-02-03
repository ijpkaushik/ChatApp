const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const router = require('./router');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users')

const app = express();
app.use(cors());
app.use(router);
const PORT = process.env.PORT || 5001

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000/",
        credentials: true
    },
});

io.on('connection', (socket) => {
    console.log('user connected: ', socket.id);

    socket.on('joinRoom', ({ name, room }, callback) => {
        // console.log(`User with id ${socket.id} and name ${name} joined the room ${room}`);

        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) {
            return callback(error);
        }

        socket.join(user.room);

        socket.emit('message', { user: 'admin', text: `${user.name}, Welcome to the room ${user.room}` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, joined the room` });

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    });

    socket.on('sendMessage', (msgData, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: msgData.message, time: msgData.time });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    })

    socket.on('disconnect', () => {
        console.log('user disconnected: ', socket.id);
        const user = removeUser(socket.id)
        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name}, left the room` });
        }
    });
})
server.listen(PORT, () => {
    console.log('SERVER RUNNING');
});