"use client";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const ProductCard = ({ product, bidFunc }) => {
  const { authenicatedUser } = useContext(AuthContext);

  const bid = {
    productId: product.id,
    userId: authenicatedUser.id,
    price: product.price + 10,
  };

  return (
    <div className="border p-5">
      <p>{product.price}</p>

      <button onClick={() => bidFunc(bid)}>Bid </button>
    </div>
  );
};

export default ProductCard;
