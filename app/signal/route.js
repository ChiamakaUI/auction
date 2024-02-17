// const http = require('http');
// const { Server } = require('socket.io')

// const server = http.createServer();
// const io = new Server(server)

// io.on('connection', socket => {
//   console.log('A user connected');

//   socket.on('offer', offer => {
//     socket.broadcast.emit('offer', offer);
//   });

//   socket.on('answer', answer => {
//     socket.broadcast.emit('answer', answer);
//   });

//   socket.on('ice-candidate', candidate => {
//     socket.broadcast.emit('ice-candidate', candidate);
//   });

//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });
// });

// const PORT = process.env.PORT || 3001;
// server.listen(PORT, () => {
//   console.log(`Signaling server listening on port ${PORT}`);
// });

// pages/api/signaling.js

// import { Server } from 'socket.io';

// export default function handler(req, res) {
//   if (req.method !== 'GET') {
//     res.status(405).end(); // Method Not Allowed
//     return;
//   }

//   const io = new Server(res.socket);

//   io.on('connection', (socket) => {
//     console.log('WebSocket client connected');

//     socket.on('message', (message) => {
//       console.log('Received message:', message);
//       // Handle incoming signaling message
//       // Send signaling message to the appropriate peer
//       socket.broadcast.emit('message', message);
//     });

//     socket.on('disconnect', () => {
//       console.log('WebSocket client disconnected');
//       // Handle disconnection
//     });
//   });

//   // Respond to upgrade requests with 'ws' event handler
//   res.socket.server.io = io;
// }
