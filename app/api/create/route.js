import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../lib/db";

export async function POST(request, response) {
//   const { userId, image, name, description, price, streamType } =
//     await request.json();
    const productsData = await request.json();
  try {
    let product = await db.product.createMany({
    //   data: {
    //     image,
    //     userId,
    //     title,
    //     date,
    //     time,
    //     price,
    //     currency,
    //     symbol,
    //   },
    data: productsData
    });
    console.log(product);
    return NextResponse.json({ challenge, error: false });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { data: null, error: true, message: error?.message },
      { status: 500 }
    );
  }
}
