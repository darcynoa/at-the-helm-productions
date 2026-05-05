"use client";
import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../utils/SanityImageUrl";

gsap.registerPlugin(ScrollTrigger);

const customComponents = {
  marks: {
    strong: ({ children }) => (
      <span className="font-handwriting text-cyan text-[1rem] lg:text-[length:inherit]">
        {children}
      </span>
    ),
  },
  block: {
    normal: ({ children }) => (
      <h4 className="w-1/2 font-sans text-[0.95rem] leading-[1.2] text-white uppercase lg:w-1/3 lg:text-[2.5rem]">
        {children}
      </h4>
    ),
  },
};

export default function AuthenticLocations({ data }) {
  const container = useRef(null);
  const petBg = useRef(null);
  const middleOverlay = useRef(null);
  const locationName = useRef(null);
  const videoContainerRef = useRef(null);
  const sectionRef = useRef(null);

  const petPassagesBackgroundImage = urlFor(
    data.petPassages.backgroundImage,
  ).url();

  useGSAP(() => {
    gsap.fromTo(
      petBg.current,
      {
        backgroundImage:
          "linear-gradient(to bottom, rgba(7,6,6,0) 0%, rgba(7,6,6,0) 100%), url(/pet-passages-resized.jpg)",
      },
      {
        backgroundImage:
          "linear-gradient(to bottom, rgba(7,6,6,0.5) 0%, rgba(7,6,6,0.5) 100%), url(/pet-passages-resized.jpg)",
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
          scrub: 0.6,
          pin: true,
          pinSpacing: true,
          fastScrollEnd: true,
        },
      })
      .to(petBg.current, {
        y: -window.innerHeight,
        ease: "linear",
        force3D: true,
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
        {data.headingLine1} <br /> {data.headingLine2}
      </h1>
      <div
        ref={container}
        className="relative h-screen"
        style={{ perspective: "1000px" }}
      >
        <div
          ref={petBg}
          className="absolute z-5 flex h-screen w-full flex-col justify-between gap-[8rem] bg-cover bg-position-[79%] py-[5rem] lg:bg-center"
          style={{
            backgroundImage: `url(${petPassagesBackgroundImage})`,
            WebkitTransform: "translate3d(0, 0, 0)",
            willChange: "transform",
          }}
        >
          <h2
            ref={locationName}
            className="font-display text-center text-[3rem] font-black text-white uppercase lg:text-[7rem]"
          >
            {data.petPassages.heading}
          </h2>
          <div className="flex flex-col items-start justify-between gap-[1rem] px-[0.5rem] lg:flex-row lg:items-center lg:gap-0 lg:px-[5rem]">
            <PortableText
              value={data.petPassages.description}
              components={customComponents}
            />
            <Link
              className="font-sans text-[15px] font-normal text-white uppercase mix-blend-exclusion transition-shadow duration-300 ease-in-out hover:drop-shadow-[4px_4px_14px_rgba(5,255,192,1)] lg:text-[1.8rem]"
              href={data.petPassages.linkToPetPassagesUrl}
              target="_blank"
            >
              {data.petPassages.linkToPetPassagesText}
            </Link>
          </div>
        </div>
        <div
          ref={middleOverlay}
          className="pointer-events-none absolute top-0 left-0 z-4 h-screen w-full bg-[linear-gradient(to_bottom,rgba(7,6,6,0.7)_0%,rgba(7,6,6,0.7)_100%)]"
        ></div>
        <div
          ref={videoContainerRef}
          className="relative z-3 h-screen w-full overflow-hidden"
        >
          <div
            className="object-fit-video absolute inset-0 h-full w-full overflow-hidden lg:origin-top lg:scale-140"
            style={{
              WebkitAcceleratedCompositing: "true",
              willChange: "transform",
            }}
          >
            <iframe
              src={data.anatomyOfDeathMuseum.backgroundVideoUrl}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              className="pointer-events-none"
              title="B-roll1_trimmed"
              style={{ WebkitAcceleratedCompositing: "true" }}
            ></iframe>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
          <div className="absolute top-0 left-0 z-[2] flex h-full w-full flex-col justify-between gap-[8rem] py-[8rem]">
            <h2
              ref={locationName}
              className="font-display text-center text-[3rem] leading-[1.2] font-black text-white uppercase lg:text-[7rem] xl:leading-normal"
            >
              {data.anatomyOfDeathMuseum.heading}
            </h2>
            <div className="flex flex-col items-start justify-between gap-[1rem] px-[0.5rem] lg:flex-row lg:items-center lg:gap-0 lg:px-[2.5rem] xl:px-[5rem]">
              <PortableText
                value={data.anatomyOfDeathMuseum.description}
                components={customComponents}
              />
              <Link
                className="font-sans text-[15px] font-normal text-white uppercase transition-shadow duration-300 ease-in-out hover:drop-shadow-[4px_4px_14px_rgba(5,255,192,1)] lg:text-[1.8rem]"
                href={data.anatomyOfDeathMuseum.linkToAnatomyOfDeathMuseumUrl}
                target="_blank"
              >
                {data.anatomyOfDeathMuseum.linkToAnatomyOfDeathMuseumText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
