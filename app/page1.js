"use client";
import { useRef } from "react";

export default function Home() {
  const videoRef = useRef();

  const videoConstraints = {
    audio: false,
    video: { width: 1280, height: 720 },
  };

  const showVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(videoConstraints);
      console.log(stream)
      window.stream = stream;
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>hey there</h1>
      <video
        content="width=device-width, initial-scale=0.5"
        autoplay="true"
        playsinline
        ref={videoRef}
      ></video>
      <button onClick={showVideo}>Open Camera</button>
    </>
  );
}
