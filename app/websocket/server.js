import { db } from "../../lib/db";
const { Server } = require("socket.io");

module.exports = (server) => {
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
      try {
        const bid = await db.bid.create({
          data: {
            userId: args.userId,
            productId: args.productId,
            price: args.price,
          },
          include: {
            user: {
              name: true,
              email: true,
              walletAddress: true,
            },
          },
        });
        console.log(bid)
      } catch (error) {
        console.log(error)
      }
      // const bid = await db.bid.create({
      //   data: {
      //     userId: args.userId,
      //     productId: args.productId,
      //     price: args.price,
      //   },
      //   include: {
      //     user: {
      //       name: true,
      //       email: true,
      //       walletAddress: true,
      //     },
      //   },
      // });
      // console.log(bid)
    });
  });

  return io;
};
