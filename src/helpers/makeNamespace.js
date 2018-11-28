// const io = require('socket.io');

const makeNamespace = (namespaceName, server) => {
  const finalNamespaceName = `/${namespaceName}`;
  const { listener } = server;
  //   const nps = io(listener).of(finalNamespaceName);
  console.log(finalNamespaceName);
//   nps.on('connection', (socket) => {
//     console.log('connect');
//     socket.emit('fromApi', 'Excuse you from nothing!');
//     console.log('hey');
//     socket.on('burp', (id, data) => {
//       console.log(id, data);
//       socket.emit('fromApi', 'Excuse you!');
//     });
//     socket.on('disconnect', () => {
//       console.log('disconnect');
//     });
//   });
};

module.exports = makeNamespace;

