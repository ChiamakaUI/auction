"use client"
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "./styles.css";

import { useEffect, useState } from "react";
import {
  Call,
  StreamVideoClient,
  User,
  LivestreamLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  useCall,
  useCallStateHooks
} from "@stream-io/video-react-sdk";

const apiKey = "mmhfdzb5evj2"; // the API key can be found in the "Credentials" section
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibGl2ZXN0cmVhbS12aWV3ZXIiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL2xpdmVzdHJlYW0tdmlld2VyIiwiaWF0IjoxNzA2ODY0MjYwLCJleHAiOjE3MDc0NjkwNjV9.3xdsmPE2jS_N-nnflQqcWsLqoYE_pfOwZRi2IlU_XUc"; // the token can be found in the "Credentials" section
const userId = "livestream-viewer"; // the user id can be found in the "Credentials" section
const callId = "4jEzPuoTgA5x"; // the call id can be found in the "Credentials" section

// set up the user object
const user: User = {
  id: userId,
  name: "Oliver-Viewer",
  image: "https://getstream.io/random_svg/?id=oliver&name=Oliver-Viewer"
};

export default function App() {
  const [client, setClient] = useState<StreamVideoClient>();
  const [call, setCall] = useState<Call>();

  useEffect(() => {
    const myClient = new StreamVideoClient({ apiKey, user, token });
    setClient(myClient);
    return () => {
      myClient.disconnectUser();
      setClient(undefined);
    };
  }, []);

  useEffect(() => {
    if (!client) return;
    const myCall = client.call("livestream", callId);

    // make sure the viewer doesn't accidentally publish audio or video
    myCall.camera.disable();
    myCall.microphone.disable();

    myCall.get();

    setCall(myCall);
    return () => {
      setCall(undefined);
      myCall.leave().catch((err) => {
        console.error(`Failed to leave the call`, err);
      });
    };
  }, [client]);

  if (!client || !call) return null;

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <MyUILayout />
      </StreamCall>
    </StreamVideo>
  );
}

const MyUILayout = () => {
  const call = useCall();
  const { useIsCallLive } = useCallStateHooks();
  const isCallLive = useIsCallLive();

  useEffect(() => {
    if (!isCallLive || !call) return;

    // join the call once the backstage opens
    call.join().catch((err) => {
      console.error(`Failed to join the call`, err);
    });
  }, [call, isCallLive]);

  if (!isCallLive) {
    return <div>Waiting for the call to go live...</div>;
  }

  return (
    <StreamTheme>
      <LivestreamLayout
        showParticipantCount={true}
        showDuration={true}
        showLiveBadge={true}
      />
    </StreamTheme>
  );
};
