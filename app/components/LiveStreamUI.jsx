"use client"

import { useCall, useCallStateHooks, ParticipantView } from "@stream-io/video-react-sdk"

const LiveStreamUI = () => {
    const call = useCall();
    const { useIsCallLive, useLocalParticipant, useParticipantCount, useRemoteParticipants } =
      useCallStateHooks();
      console.log(useParticipantCount())
    const totalParticipants = useParticipantCount();
    const localParticipant = useLocalParticipant();
    const joiningCall = useRemoteParticipants()
    const isCallLive = useIsCallLive();

    console.log(joiningCall)
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