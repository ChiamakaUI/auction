"use client";
import { useContext, useEffect } from "react";
import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import LiveStreamUI from "./LiveStreamUI";
import { createProduct } from "../../actions/product";
import { AuthContext } from "../../context/AuthContext";

const LiveStream = () => {
  const { authenicatedUser, products } = useContext(AuthContext);
  const token = authenicatedUser.userToken;
  const callId = sessionStorage.getItem("callId");

  const callType = sessionStorage.getItem("callType");
  const apiKey = "ayr4n3fueb58";

  const user = {
    id: authenicatedUser.email,
    name: authenicatedUser.name,
    image: authenicatedUser.image,
  };

  const productsData = products.map((product) => ({
    name: product.productName,
    description: product.productDesc,
    price: product.productPrice,
    streamType: callType,
    userId: authenicatedUser.id,
    image: product.productImage,
  }));
  useEffect(() => {
    // const addProducts = async () => {
    //   const products = await createProduct(productsData);
    //   console.log(products);
    // };

    // addProducts();
    console.log(productsData)
  }, [productsData]);

  const client = new StreamVideoClient({ apiKey, user, token });
  const call = client.call("livestream", callId);
  call.join({ create: true });

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <LiveStreamUI />
      </StreamCall>
    </StreamVideo>
  );
};

export default LiveStream;
