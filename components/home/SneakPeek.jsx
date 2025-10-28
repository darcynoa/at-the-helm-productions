import { useRef, useState } from "react";
import Image from "next/image";

export default function SneakPeek() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = async () => {
    setIsPlaying(true);
    // Wait for state to update and video to render
    setTimeout(async () => {
      if (videoRef.current) {
        // Request fullscreen
        if (videoRef.current.requestFullscreen) {
          await videoRef.current.requestFullscreen();
        } else if (videoRef.current.webkitRequestFullscreen) {
          await videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.mozRequestFullScreen) {
          await videoRef.current.mozRequestFullScreen();
        } else if (videoRef.current.msRequestFullscreen) {
          await videoRef.current.msRequestFullscreen();
        }
        // Play video
        videoRef.current.play();
      }
    }, 100);
  };
  return (
    <section className="relative flex h-screen w-full items-center justify-center">
      {!isPlaying ? (
        <div className="relative flex flex-col items-center justify-center gap-[1rem]">
          <p className="absolute -top-[3rem] font-sans text-[1rem] text-white uppercase mix-blend-difference">
            Here's a sneak peek!
          </p>
          <Image
            src="/trailer-thumbnail.png"
            alt="Trailer Thumbnail"
            width={1240}
            height={519}
            className="w-screen lg:w-[75%]"
          />
          <button
            className="absolute inset-0 flex cursor-pointer items-center justify-center"
            onClick={handlePlay}
            aria-label="Play Trailer"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="38" fill="rgba(0,0,0,0.5)" />
              <polygon points="32,25 60,40 32,55" fill="#fff" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="relative flex flex-col items-center justify-center gap-[1rem]">
          <p className="absolute -top-[4rem] font-sans text-[1rem] text-white uppercase">
            Here's a sneak peek!
          </p>
          <video
            ref={videoRef}
            src="https://wopjdcd9b6yaeiad.public.blob.vercel-storage.com/trailer.mov"
            className="w-screen lg:w-[75%]"
            controls
            autoPlay
          />
        </div>
      )}
    </section>
  );
}
