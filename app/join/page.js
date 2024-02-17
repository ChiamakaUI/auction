"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  StreamVideoClient,
  StreamVideo,
  StreamCall,
  LivestreamLayout,
  } from "@stream-io/video-react-sdk";
const apiKey = "ayr4n3fueb58";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiWnVieSJ9.g1cXbRH_tLzrUu8ngQW_k5gJ5UkHPcpig0S7OFBx-tk";
const user = {
  id: "Zuby",
  name: "Zuby",
  image: "https://getstream.io/random_svg/?id=zuby&name=zuby",
  //   type: 'guest',
};
const client = new StreamVideoClient({ apiKey, user, token });
// const callId = "main123"

const Main = () => {
  const [callLive, setCallLive] = useState(false);
  const searchParams = useSearchParams();
  // const { useIsCallLive } = useCallStateHooks();
  const callId = searchParams.get("call_id");
  const call = client.call("livestream", callId);

  // console.log(useIsCallLive)
  // const isCallLive = useIsCallLive();
  // console.log({ isCallLive });
  call.join();
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        {!callLive ? (
          <LivestreamLayout
            showParticipantCount={true}
            showDuration={true}
            showLiveBadge={true}
          />
        ) : (
          <div>Call is not live yet </div>
        )}
      </StreamCall>
    </StreamVideo>
  );
};

export default Main;

// if (!isCallLive) {
//   return <div>Call is not live yet </div>;
// } else {
//   call.join();
// }
// if (isCallLive)
//  call.join();