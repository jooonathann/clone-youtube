"use client";
import { useSearchParams } from "next/navigation";

export default function Watch() {
  const videSrc = useSearchParams().get("v");
  const videoPrefix =
    "https://storage.googleapis.com/j-clone-yt-processed-videos/";
  return (
    <div>
      <h1>Watch page</h1>
      <video controls src={videoPrefix + videSrc} />
    </div>
  );
}
