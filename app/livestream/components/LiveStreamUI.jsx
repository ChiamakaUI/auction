"use client"

import { useCall, useCallStateHooks, ParticipantView } from "@stream-io/video-react-sdk"
const LiveStreamUI = () => {
    const call = useCall();
    const { useIsCallLive, useLocalParticipant, useParticipantCount } =
      useCallStateHooks();
    const totalParticipants = useParticipantCount();
    const localParticipant = useLocalParticipant();
    const isCallLive = useIsCallLive();
    // const callId = sessionStorage.getItem("callId");
    // const callId = "main123"
    // console.log({ isCallLive });
    return (
      <div>
        <div>Live: {totalParticipants}</div>
        <div>
          {localParticipant && ( 
            <ParticipantView
              participant={localParticipant}
              ParticipantViewUI={null}
            />
          )}
        </div>
        <div>
          {isCallLive ? (
            <button onClick={() => call?.stopLive()}>Stop LiveStream</button>
          ) : (
            <button onClick={() => call?.goLive()}>Start LiveStream</button>
          )}
        </div>
        <div>
          {/* {window.location.href}/join?call_id={callId} */}
          {/* https://myapp.com/join?call_id=123&call_type=default */}
        </div>
      </div>
    );
  };

export default LiveStreamUI