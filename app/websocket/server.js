const { Server } = require("socket.io");

module.exports = (server, db) => {
  // db.product.findMany().then((data) => console.log(data))
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000/",
      allowRequest: (req, callback) => {
        const noOriginHeader = req.headers.origin === undefined;
        callback(null, noOriginHeader); // only allow requests without 'origin' header
      },
    },
  });

  io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    socket.on("bids", async (args) => {
      console.log("bids", args);
      const bid = await db.bid.create({
        data: {
          userId: args.userId,
          productId: args.productId,
          price: args.price,
        },
        include: {
          user: true,
        },
      });
      console.log(bid)
    });
  });

  return io;
};
