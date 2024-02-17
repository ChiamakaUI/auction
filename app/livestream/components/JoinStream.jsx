// "use client"
// import { useEffect } from "react"; 
// import { useCall, useCallStateHooks, LivestreamLayout, StreamCall, StreamVideo } from "@stream-io/video-react-sdk"

// const JoinStream = ({ client }) => {
//   const call = useCall();
//   const { useIsCallLive } = useCallStateHooks();
//   const isCallLive = useIsCallLive();

//   useEffect(() => {
//     if (!isCallLive || !call) return;
//     call.join().catch((err) => {
//       console.error(`Failed to join the call`, err);
//     });
//   }, [call, isCallLive])
  
//   return (
//     <StreamVideo client={client}>
//       <StreamCall call={call}>
//       {!isCallLive ? (
//           <LivestreamLayout
//             showParticipantCount={true}
//             showDuration={true}
//             showLiveBadge={true}
//           />
//         ) : (
//           <div>Call is not live yet </div>
//         )}
//         </StreamCall>
//     </StreamVideo>
//   )
// }

// export default JoinStream