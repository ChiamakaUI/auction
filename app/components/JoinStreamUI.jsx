"use client";

import { useContext, useEffect, useState } from "react";
import {
  StreamVideoClient,
  LivestreamLayout,
  StreamVideo,
  StreamCall,
} from "@stream-io/video-react-sdk";
import { useSearchParams } from "next/navigation";
import { io } from "socket.io-client";
import { AuthContext } from "../../context/AuthContext";
import { getProducts } from "../../actions/product"

const apiKey = "ayr4n3fueb58";

const JoinStreamUI = () => {
  const searchParams = useSearchParams();
  const { authenicatedUser } = useContext(AuthContext);
  const token = authenicatedUser.userToken;
  const callId = searchParams.get("call_id");
  const [products, setProducts] = useState([])

  const user = {
    id: authenicatedUser.email,
    name: authenicatedUser.name,
    image: authenicatedUser.image,
  };
  const client = new StreamVideoClient({ apiKey, user, token });
  const call = client.call("livestream", callId);
  call.join()

  const socket = io('http://localhost:3001');

  socket.on("connect", () => {
    console.log(socket.id)
  });
  
  const sendBid = (data) => {
    socket.emit("bids", data)
  }

  useEffect(() => {
    const getAuctionProducts = async () => {
      const products = await getProducts(authenicatedUser.id)
      console.log(products)
      setProducts(products)
    }

    getAuctionProducts()
  }, [authenicatedUser.id])
  console.log(products)
  
  return (
        <StreamVideo client={client}>
          <StreamCall call={call}>
            <LivestreamLayout
              showParticipantCount={true}
              showDuration={true}
              showLiveBadge={true}
            />
          </StreamCall>
        </StreamVideo>
  );
};

export default JoinStreamUI;
