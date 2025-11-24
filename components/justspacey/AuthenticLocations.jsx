"use client";
import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AuthenticLocations() {
  const container = useRef(null);
  const petBg = useRef(null);
  const middleOverlay = useRef(null);
  const locationName = useRef(null);
  const videoContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      petBg.current,
      {
        backgroundImage:
          "linear-gradient(to bottom, rgba(7,6,6,0) 0%, rgba(7,6,6,0) 100%), url(/pet-passages.jpg)",
      },
      {
        backgroundImage:
          "linear-gradient(to bottom, rgba(7,6,6,0.5) 0%, rgba(7,6,6,0.5) 100%), url(/pet-passages.jpg)",
        duration: 0.75,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: petBg.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      })
      .to(petBg.current, {
        yPercent: -100,
        ease: "linear",
      })
      .to(
        middleOverlay.current,
        {
          autoAlpha: 0,
          ease: "linear",
        },
        "<",
      );
  });

  return (
    <section ref={sectionRef}>
      <h1 className="font-display pb-[4rem] text-center text-[4rem] leading-[1] font-black text-white uppercase mix-blend-exclusion lg:text-[9.5rem]">
        Authentic <br /> Locations & Props
      </h1>
      <div ref={container} className="relative h-screen">
        <div
          ref={petBg}
          className="absolute z-5 flex h-screen w-full flex-col justify-between gap-[8rem] bg-[url(/pet-passages.jpg)] bg-cover bg-center py-[5rem]"
        >
          <h2
            ref={locationName}
            className="font-display text-center text-[3rem] font-black text-white uppercase lg:text-[7rem]"
          >
            Real Crematory
          </h2>
          <div className="flex flex-col items-start justify-between gap-[1rem] px-[0.5rem] lg:flex-row lg:items-center lg:gap-0 lg:px-[5rem]">
            <h4 className="w-1/2 font-sans text-[0.95rem] leading-[1.2] text-white uppercase lg:w-1/3 lg:text-[2.5rem]">
              Thanks to the kind and generous folks at{" "}
              <span className="font-handwriting text-cyan text-[1rem] lg:text-[length:inherit]">
                Pet Passages – Livonia
              </span>
              &nbsp;for bringing this dream to life.
            </h4>
            <Link
              className="font-sans text-[15px] font-normal text-white uppercase mix-blend-exclusion transition-shadow duration-300 ease-in-out hover:drop-shadow-[4px_4px_14px_rgba(5,255,192,1)] lg:text-[1.8rem]"
              href={"https://livonia.mi.petpassages.com/"}
              target="_blank"
            >
              Visit their site
            </Link>
          </div>
        </div>
        <div
          ref={middleOverlay}
          className="absolute top-0 left-0 z-4 h-screen w-full bg-[linear-gradient(to_bottom,rgba(7,6,6,0.7)_0%,rgba(7,6,6,0.7)_100%)]"
        ></div>
        <div
          ref={videoContainerRef}
          className="relative z-3 h-screen w-full overflow-hidden"
        >
          <div className="object-fit-video absolute inset-0 h-full w-full overflow-hidden lg:origin-top lg:scale-140">
            <iframe
              src="https://player.vimeo.com/video/1136329521?h=2a9ec0ab28&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;background=1&amp;controls=0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="pointer-events-none"
              title="B-roll1_trimmed"
            ></iframe>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          <div className="absolute top-0 left-0 z-[2] flex h-full w-full flex-col justify-between gap-[8rem] pt-[10rem] pb-[5rem]">
            <h2
              ref={locationName}
              className="font-display text-center text-[3rem] leading-[1.2] font-black text-white uppercase lg:text-[7rem] lg:leading-normal"
            >
              Anatomy of Death Museum
            </h2>
            <div className="flex flex-col items-start justify-between gap-[1rem] px-[0.5rem] lg:flex-row lg:items-center lg:gap-0 lg:px-[5rem]">
              <h4 className="w-1/2 font-sans text-[0.95rem] leading-[1.2] text-white uppercase lg:w-1/3 lg:text-[2.5rem]">
                Thanks to the incredible Museum owner, we had access to{" "}
                <span className="font-handwriting text-cyan text-[1rem] lg:text-[length:inherit]">
                  authentic embalming tools and set pieces.
                </span>
              </h4>
              <Link
                className="font-sans text-[15px] font-normal text-white uppercase transition-shadow duration-300 ease-in-out hover:drop-shadow-[4px_4px_14px_rgba(5,255,192,1)] lg:text-[1.8rem]"
                href={"https://anatomyofdeathmuseum.com/"}
                target="_blank"
              >
                Visit their site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
