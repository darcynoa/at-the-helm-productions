"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SneakPeek() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const trailerImageRef = useRef(null);
  const playButtonRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // useGSAP(() => {
  //   const mm = gsap.matchMedia();

  //   mm.add(
  //     // mobile
  //     "(max-width: 767px)",
  //     () => {
  //       const tl = gsap.timeline({
  //         scrollTrigger: {
  //           trigger: containerRef.current,
  //           start: "top center-=33px",
  //           end: "+=400px",
  //           scrub: 1,
  //           pin: true,
  //           // markers: true,
  //         },
  //       });

  //       // animate both scale and height on mobile
  //       tl.fromTo(
  //         trailerImageRef.current,
  //         {
  //           scale: 0.2,
  //         },
  //         {
  //           scale: 1,
  //           ease: "power2.inOut",
  //         },
  //       ).to(
  //         playButtonRef.current,
  //         {
  //           opacity: 1,
  //           ease: "linear",
  //         },
  //         "-=0.2",
  //       );
  //     },
  //   );

  //   // desktop/tablet: only scale
  //   mm.add("(min-width: 768px)", () => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: "top top+=20vh",
  //         end: "+=500px",
  //         scrub: 1,
  //         pin: true,
  //       },
  //     });

  //     tl.to(trailerImageRef.current, {
  //       scale: 1,
  //       ease: "power2.inOut",
  //     }).to(
  //       playButtonRef.current,
  //       {
  //         opacity: 1,
  //         ease: "linear",
  //       },
  //       "-=0.5",
  //     );

  //     return () => {
  //       tl.scrollTrigger && tl.scrollTrigger.kill();
  //       tl.kill();
  //     };
  //   });
  //   // overall cleanup for matchMedia when useGSAP unmounts
  //   return () => mm.revert();
  // });

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
    <section
      ref={containerRef}
      className="relative mt-[4rem] flex h-[45vh] w-full items-start justify-center lg:mt-0 lg:h-screen"
    >
      {!isPlaying ? (
        <div className="relative flex flex-col items-center justify-center gap-[1rem]">
          <p className="font-handwriting text-cyan text-[1.3rem] uppercase mix-blend-difference lg:text-[3rem]">
            Here's a sneak peek!
          </p>
          <div
            ref={trailerImageRef}
            className="flex w-screen items-center justify-center py-[4rem] lg:py-[10rem]"
          >
            <Image
              src="/trailer-thumbnail.png"
              alt="Trailer Thumbnail"
              width={1240}
              height={519}
              className="h-auto max-w-full object-contain"
              onLoad={() => {
                // ensure ScrollTrigger measure is correct after image loads
                if (typeof window !== "undefined" && window.ScrollTrigger) {
                  window.ScrollTrigger && window.ScrollTrigger.refresh();
                }
              }}
            />
          </div>
          <button
            className="absolute inset-0 top-[4rem] flex cursor-pointer items-center justify-center opacity-0 lg:top-0"
            onClick={handlePlay}
            aria-label="Play Trailer"
            ref={playButtonRef}
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="38" fill="rgba(0,0,0,0.5)" />
              <polygon points="32,25 60,40 32,55" fill="#fff" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="relative flex flex-col items-center justify-center gap-[1rem]">
          <p className="font-sans text-[1rem] text-white uppercase">
            Here's a sneak peek!
          </p>
          <iframe
            ref={videoRef}
            src="https://player.vimeo.com/video/1135896162?h=b2eb03451a&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share;"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              height: "70vh",
              width: "100vh",
            }}
            title="Just Spacey Teaser"
          ></iframe>

          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      )}
    </section>
  );
}
