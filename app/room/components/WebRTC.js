// 'use client'
// import { useEffect, useRef } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:3001');

// export default function WebRTCComponent() {
//   const localVideoRef = useRef();
//   const remoteVideoRef = useRef();
//   let localStream;
//   let remoteStream;
//   let peerConnection;

//   useEffect(() => {
//     async function initWebRTC() {
//       try {
//         localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//         localVideoRef.current.srcObject = localStream;
        
//         peerConnection = new RTCPeerConnection();

//         peerConnection.addEventListener('track', event => {
//           remoteStream.addTrack(event.track, remoteStream);
//           remoteVideoRef.current.srcObject = remoteStream;
//         });

//         localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

//         peerConnection.addEventListener('icecandidate', event => {
//           if (event.candidate) {
//             socket.emit('ice-candidate', event.candidate);
//           }
//         });

//         socket.on('ice-candidate', candidate => {
//           peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
//         });

//         // Offer creation and exchange logic
//       } catch (error) {
//         console.error('Error accessing media devices:', error);
//       }
//     }

//     initWebRTC();

//     return () => {
//       // Clean up code if needed
//     };
//   }, []);

//   return (
//     <div>
//       <video ref={localVideoRef} autoplay="true" playsInline muted></video>
//       <video ref={remoteVideoRef} autoplay="true" playsInline></video>
//     </div>
//   );
// }