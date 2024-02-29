const { Server } = require("socket.io") 

module.exports = (server) => {
    const io = new Server(server, {
      cors: {
        origin: "http://localhost:3000/",
        allowRequest: (req, callback) => {
          const noOriginHeader = req.headers.origin === undefined;
          callback(null, noOriginHeader); // only allow requests without 'origin' header
        }
      }
    });

    io.on('connection', (socket) => {
      console.log('a user connected', socket.id);

      socket.on("bids", (args) => {
        console.log("bids", args);
      })
    });

    return io;
}