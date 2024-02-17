"use client";

import { useEffect } from "react";
import {
  LivestreamLayout,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  CallControls,
  useCallStateHooks,
  useCall
} from "@stream-io/video-react-sdk";
// import toast, { Toaster } from "react-hot-toast";

const apiKey = "ayr4n3fueb58";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQWRhIn0.rKIIaizfR1jcb4AobcDUUhvP-T61h1mDJpuqGGYEOIk";
const callId = sessionStorage.getItem("callId");
const user = {
  id: "Ada",
  name: "Adaeze",
  image: "https://getstream.io/random_svg/?id=Ada&name=Ada",
};
const client = new StreamVideoClient({ apiKey, user, token });
const mainCall = client.call("livestream", callId);
mainCall.join({ create: true });

const Main = () => {
const call = useCall()

  return (
      <StreamVideo client={client}>
      <StreamCall call={call}>
      {/* <LivestreamLayout
        showParticipantCount={true}
        showDuration={true}
        showLiveBadge={true}
      /> */}
      <CallControls />
      </StreamCall>
        </StreamVideo>
  );
};

export default Main;

// startsAt: sessionStorage.getItem("scheduledDate"),
// data: {
//     startsAt: sessionStorage.getItem("scheduledDate")
// }
// await client.call("livestream", callId).getOrCreate();

  // const start = async () => {
  //   await call.join({ create: true });
  //   await call.camera.enable();
  //   await call.microphone.enable();
  //   //await client.call("livestream", callId).join({ create: true })
  //   toast.success("LiveStream successfully created")
  // };

  // useEffect(() => {
  //   start();
  // }, []);