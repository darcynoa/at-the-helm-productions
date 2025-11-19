"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LightBall from "../LightBall";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function WhatIsAtTheHelm() {
  const text = useRef(null);
  const light = useRef(null);
  useGSAP(() => {
    const split = new SplitText(text.current, {
      type: "words",
      wordsClass: "mix-blend-difference",
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=2000px",
            scrub: true,
            pin: true,
          },
        })
        .from(split.words, {
          opacity: 0.25,
          stagger: 0.25,
          duration: 1,
          ease: "power2.out",
        })
        .to(
          light.current,
          {
            scale: 4,
            duration: 4,
            ease: "linear",
          },
          "<",
        );
    });

    mm.add("(max-width: 767px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top center-=180px",
            end: "+=2000px",
            scrub: true,
            pin: true,
          },
        })
        .from(split.words, {
          opacity: 0.25,
          stagger: 0.25,
          duration: 1,
          ease: "power2.out",
        })
        .to(
          light.current,
          {
            scale: 2,
            duration: 1,
            ease: "linear",
          },
          "<",
        );
    });
  });
  const container = useRef(null);
  const bracelet = useRef(null);
  return (
    <section
      ref={container}
      id="about-us"
      className="relative flex flex-col items-center justify-between gap-[4.5rem] lg:gap-[6rem]"
    >
      <LightBall
        ref={light}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="flex h-auto w-full flex-col items-center justify-center gap-[4.5rem] py-[0rem] lg:h-screen lg:gap-[5rem] lg:py-[5rem]">
        <h1 className="font-display max-w-[375px] text-center text-[5rem] leading-[1] font-black text-white uppercase mix-blend-exclusion lg:max-w-full lg:text-[9.5rem] lg:leading-normal">
          What's at the helm
        </h1>
        <h3
          className="z-50 w-[70%] text-center font-sans text-[1rem] leading-[1.2] text-white uppercase mix-blend-difference lg:text-[3.5rem]"
          ref={text}
        >
          At The Helm Productions is an emerging indie production company
          focused on using kooky, comedic narratives to enhance meaningful
          subject matters.
        </h3>
      </div>
      <Image
        ref={bracelet}
        src="/at-the-helm-bracelet.png"
        alt="The At The Helm Bracelet"
        width={3539}
        height={1247}
        className="marker-3 w-full object-cover"
      />
    </section>
  );
}
