const hapi = require('hapi');
const Routes = require('./routes');
const io = require('socket.io');

const server = new hapi.Server();
server.connection({
  host: '0.0.0.0',
  port: 8080,
});
const { listener } = server;

let numberOfConnections = 0;

const nameSpace = io(listener).of('/chat');
nameSpace.on('connection', (socket) => {
  numberOfConnections += 1;
  console.log('number of clients', numberOfConnections);
  socket.emit('sendConnectionAccepted', 'new connection');
  socket.on('joinRoom', (room) => {
    socket.join(room);
    socket.emit('confirmationRoom', `joined the room${room}`);
    socket.on('sendMessageInRoom', (message) => {
      console.log('sending');
      nameSpace.in(room).emit('forwardMessageToRoom', message);
    });
  });
});
server.route(Routes);


if (!module.parent) {
  server.start();
}


module.exports = server;
