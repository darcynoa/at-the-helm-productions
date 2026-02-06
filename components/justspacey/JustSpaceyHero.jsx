"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function JustSpaceyHero() {
  const container = useRef(null);
  const overlay = useRef(null);
  const text = useRef(null);
  const header = useRef(null);
  const displayWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const fadeInDuration = displayWidth > 767 ? 1 : 2;
  useGSAP(() => {
    gsap
      .timeline({ delay: 0.9 })
      .to(overlay.current, {
        opacity: 0.5,
        duration: fadeInDuration,
        ease: "power2.inOut",
      })
      .to(header.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(
        text.current,
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5",
      );

    const split = new SplitText(text.current, {
      type: "words",
      wordsClass: "mix-blend-exclusion",
    });
    gsap.from(split.words, {
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=2000px",
        scrub: true,
        pin: true,
      },
      opacity: 0.25,
      stagger: 0.25,
      duration: 1,
      ease: "power2.out",
    });
  });
  return (
    <section
      ref={container}
      className="relative mb-0 flex h-lvh w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative w-full">
        <Image
          ref={overlay}
          src="/just-spacey-logline.JPG"
          alt="The main picture of the logline"
          width={2048}
          height={1365}
          className="h-full w-full origin-center scale-185 object-contain object-[45%] opacity-0 lg:w-full lg:scale-none lg:object-cover lg:object-center"
        />
        {/* top dark overlay (initially solid, then fades out) */}
        <div className="absolute top-1/2 left-1/2 h-full w-full origin-center -translate-x-1/2 -translate-y-1/2 scale-186 bg-[linear-gradient(to_bottom,rgba(7,6,6,1)_0%,rgba(7,6,6,0.5)_10%,rgba(7,6,6,0)_20%,rgba(7,6,6,0)_70%,rgba(7,6,6,0.25)_75%,rgba(7,6,6,0.65)_82%,rgba(7,6,6,1)_92%)] lg:scale-none"></div>
      </div>
      <h1
        ref={header}
        className="font-spacey absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[5rem] font-black tracking-[0.04em] text-white uppercase mix-blend-exclusion hover:cursor-pointer lg:text-[9.5rem]"
      >
        Just spacey
      </h1>
      <h3
        className="absolute top-1/2 left-1/2 z-50 w-[70%] -translate-x-1/2 -translate-y-1/2 text-center font-sans text-[1rem] leading-[1.2] text-white uppercase opacity-0 lg:text-center lg:text-[3rem]"
        ref={text}
      >
        When an orderly mortician is forced to bring his recently suspended
        10-year-old daughter with raging ADHD to the morgue, they must work
        together to ensure that the resulting chaos does not see the light of
        day.
      </h3>
    </section>
  );
}
