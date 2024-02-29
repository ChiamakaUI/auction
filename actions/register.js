"use server";

import { db } from "../lib/db";
import { serverClient } from "../lib/stream";

export const register = async (values) => {
  const { name, email, wallet, image } = values;
  const user = await db.user.findUnique({ where: { email } });
  // const user = await db.user.findUnique({ where: { email }, select: { walletAddress: true, email: true } });

  if (user) {
    return user;
  }
  const token = serverClient.createToken(email);

  const res = await db.user.create({
    data: {
      name,
      email,
      image,
      role: "INFLUENCER",
      walletAddress: wallet,
      userToken: token,
    },
  });

  return res;
};


// const bid = await db.bid.create({
//   data: {
//     userId,
//     productId,
//     price
//   },
//   include: {
//     user: {
//       name: true,
//       email: true,
//       walletAddress: true,
//     }
//   }
// });

// socket.emit(bid);

