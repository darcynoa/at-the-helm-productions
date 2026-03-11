"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LightBall from "../LightBall";
import { urlFor } from "../utils/SanityImageUrl";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function WhatIsAtTheHelm({ whatsAtTheHelmData }) {
  const text = useRef(null);
  const light = useRef(null);
  const container = useRef(null);
  const bracelet = useRef(null);

  useGSAP(() => {
    const split = new SplitText(text.current, {
      type: "words",
      wordsClass: "mix-blend-difference",
    });

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap
        .timeline({ paused: true })
        .from(split.words, {
          opacity: 0.25,
          stagger: 0.25,
          duration: 1,
          ease: "linear",
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

      gsap.fromTo(
        tl,
        {
          progress: 0.15,
        },
        {
          progress: 1,
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=1500px",
            scrub: true,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        },
      );

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        gsap.globalTimeline.clear();
      };
    });

    mm.add("(max-width: 767px)", () => {
      const tl = gsap
        .timeline({ paused: true })
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

      gsap.fromTo(
        tl,
        {
          progress: 0.15,
        },
        {
          progress: 1,
          scrollTrigger: {
            trigger: container.current,
            start: "top center-=180px",
            end: "+=820px",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        },
      );

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        gsap.globalTimeline.clear();
      };
    });
  });

  const imageUrl = urlFor(whatsAtTheHelmData.image).url();

  return (
    <section
      ref={container}
      id="about-us"
      className="whatsatthehelm relative flex flex-col items-center justify-between gap-[4.5rem] lg:gap-[6rem]"
    >
      <LightBall
        ref={light}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <div className="flex h-auto w-full flex-col items-center justify-center gap-[4.5rem] py-[0rem] lg:h-screen lg:gap-[5rem] lg:py-[5rem]">
        <h1 className="font-display max-w-[375px] text-center text-[5rem] leading-[1] font-black text-white uppercase mix-blend-exclusion lg:max-w-full lg:text-[7rem] lg:leading-normal 2xl:text-[9.5rem]">
          {whatsAtTheHelmData.heading}
        </h1>
        <h3
          className="z-50 w-[70%] text-center font-sans text-[1rem] leading-[1.2] text-white uppercase mix-blend-difference lg:text-[3.5rem]"
          ref={text}
        >
          {whatsAtTheHelmData.description}
        </h3>
      </div>
      <Image
        ref={bracelet}
        src={imageUrl}
        alt={whatsAtTheHelmData.imageAltText}
        width={3539}
        height={1247}
        className="marker-3 w-full object-cover"
      />
    </section>
  );
}
