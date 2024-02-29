"use client";

import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import * as yup from "yup";
import { ProductModal, ProductPreview, Login } from "../components";
import { AuthContext } from "../../context/AuthContext";

const schema = yup.object({
  streamName: yup.string().required("Please, name your stream"),
  streamType: yup.string().required("Please, choose your stream type"),
});

const Main = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const { products, setProducts } = useContext(AuthContext)

  const onSubmit = (data) => {
    console.log(data);
    sessionStorage.setItem("callId", data.streamName);
    sessionStorage.setItem("callType", data.streamType);
    if (products.length === 0) {
      toast.error("Please add products to continue");
      return;
    }

    // const productsData = products.map((product) => ({
    //   name: product.productName,
    //   description: product.productDesc,
    //   price: product.productPrice,
    //   streamType: data.streamType,
    //   userId: authenicatedUser.id,
    //   image: product.productImage
    // }));
    router.push("/livestream");

  };

  const addProducts = () => {
    setShowModal(true);
  };

  const removeProduct = (productId) => {
    console.log(productId);
    const newProducts = products.filter((_, i) => i !== productId);

    console.log(newProducts);
    setProducts(newProducts);
  };
  console.log({ products });
  return (
    <>
      <div className="w-[60%] mx-auto mt-6 border p-3.5">
        <p className="text-bold text-2xl font-semibold">
          Please give us some information about your livestream
        </p>
        <form className="my-6 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <label className="text-lg">Name your live stream:</label> <br />
            <input
              type="text"
              className="border w-[55%] p-2 focus:outline-none my-1.5 rounded-md"
              {...register("streamName")}
            />
            <p className="text-red-500">{errors.streamName?.message}</p>
          </div>

          <div className="my-5">
            <p>Type of Stream:</p>
            <label htmlFor="regular" className="my-1 flex flex-row">
              <input
                type="radio"
                name="stream_type"
                value="regular"
                className="mr-2"
                {...register("streamType")}
              />
              Regular
            </label>
            <label htmlFor="auction" className="flex flex-row">
              <input
                type="radio"
                id="css"
                name="stream_type"
                value="auction"
                className="mr-2"
                {...register("streamType")}
              />
              Auction
            </label>
            <p className="text-red-500">{errors.streamType?.message}</p>
          </div>
          <button
            className="py-1 px-4 border my-4"
            onClick={handleSubmit(addProducts)}
          >
            Add products
          </button>
          <div className="w-[30%]">
            {products.length !== 0 &&
              products.map((product, i) => (
                <ProductPreview
                  product={product}
                  key={i}
                  removeFunc={removeProduct}
                  productId={i}
                />
              ))}
          </div>
          <div className="ml-auto w-[150px]">
            <button className="py-1.5 px-5 border bg-[#3B5390] text-white rounded-md">
              Continue
            </button>
          </div>
        </form>
      </div>
      {showModal && (
        <ProductModal setShowModal={setShowModal} setProducts={setProducts} />
      )}
      <Toaster />
    </>
  );
};

export default Main;
