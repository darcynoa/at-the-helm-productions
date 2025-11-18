"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function JustSpaceyLogline() {
  const container = useRef(null);
  const text = useRef(null);
  const header = useRef(null);
  useGSAP(() => {
    gsap
      .timeline({ delay: 0.9 })
      .to(container.current, {
        backgroundImage:
          "linear-gradient(to bottom, rgba(7,6,6,0.5) 0%, rgba(7,6,6,0.5) 100%), url(/just-spacey-logline.JPG)",
        duration: 1,
        ease: "power2.out",
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
      className="relative mb-0 flex h-lvh w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom,rgba(7,6,6,1)_0%,rgba(7,6,6,1)_100%),url(/just-spacey-logline.JPG)] bg-size-[175%] bg-position-[45%] bg-no-repeat lg:mb-[8rem] lg:bg-cover"
    >
      <h1
        ref={header}
        className="font-spacey absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[5rem] font-black tracking-[0.04em] text-white uppercase mix-blend-exclusion hover:cursor-pointer lg:text-[9.5rem]"
      >
        Just spacey
      </h1>
      <h3
        className="z-50 w-[70%] text-center font-sans text-[1rem] leading-[1.2] text-white uppercase opacity-0 lg:text-center lg:text-[3.5rem]"
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
