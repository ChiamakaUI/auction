import { FaRegTrashCan } from "react-icons/fa6";

const ProductPreview = ({ product, productId, removeFunc }) => {
  return (
    <div className="flex flex-row items-center justify-between my-2">
      <div className="flex flex-row items-center">
        <img
          src={product.productImage}
          alt={product.productName}
          className="w-[40px] h-[40px] rounded-lg mx-3"
        />
        <div className="flex flex-col border">
          <p>{product.productName}</p>
          <p>{product.productDesc}</p>
          <p>{product.productPrice}</p>
        </div>
      </div>
      <FaRegTrashCan
        className="text-red-600 text-lg cursor-pointer"
        onClick={() => removeFunc(productId)}
      />
    </div>
  );
};

export default ProductPreview;
