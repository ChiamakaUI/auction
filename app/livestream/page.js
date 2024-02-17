"use client"
import { StreamVideoClient, StreamVideo, StreamCall } from "@stream-io/video-react-sdk";
import LiveStreamUI from "./components/LiveStreamUI";
// import "@stream-io/video-react-sdk/dist/css/styles.css";

const apiKey = "ayr4n3fueb58";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiQWRhIn0.rKIIaizfR1jcb4AobcDUUhvP-T61h1mDJpuqGGYEOIk";
// const callId = sessionStorage.getItem("callId");
const callId = "main123"
const user = {
  id: "Ada",
  name: "Adaeze",
  image: "https://getstream.io/random_svg/?id=Ada&name=Ada",
};
const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("livestream", callId);
call.join({ create: true });

const Main = () => {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <LiveStreamUI client={client} />
      </StreamCall>
    </StreamVideo>
  );
};

export default Main;
