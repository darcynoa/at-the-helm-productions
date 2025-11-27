"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LightBall from "../LightBall";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function WhatIsAtTheHelm() {
  const container = useRef(null);
  const bracelet = useRef(null);
  const text = useRef(null);
  const light = useRef(null);
  //* DEBUG *?/
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  // === DEBUG: Print transform chain ===
  console.log("========== TRANSFORM TRACE ==========");
  let el = container.current;
  while (el) {
    const style = window.getComputedStyle(el);
    console.log(el.tagName, el.className, "transform =", style.transform);
    el = el.parentElement;
  }
  console.log("======================================");

  function debugWhatsAtTheHelm(label, triggerEl) {
    if (!triggerEl) return;

    const rect = triggerEl.getBoundingClientRect();
    console.log(`\n======= ${label} =======`);
    console.log("Viewport scrollY:", window.scrollY);
    console.log("Trigger getBoundingClientRect().top:", rect.top);
    console.log("Trigger absolute Y:", rect.top + window.scrollY);
    console.log("offsetTop:", triggerEl.offsetTop);
    console.log("===========================\n");
  }
  useEffect(() => {
    const onFocus = () => {
      debugWhatsAtTheHelm("On page re-entry (window focus)", container.current);
    };

    window.addEventListener("focus", onFocus);

    return () => window.removeEventListener("focus", onFocus);
  }, []);

  //* DEBUG end *?/

  useGSAP(() => {
    if (!ready || !container.current) return;
    debugWhatsAtTheHelm("Before creating ScrollTrigger", container.current);
    ScrollTrigger.normalizeScroll(true);
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
            pinSpacing: true,
            // markers: true,
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
            end: "+=1000px",
            scrub: true,
            pin: true,
            markers: true,
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
    //* DEBUG *?/
    ScrollTrigger.addEventListener("refresh", () => {
      debugWhatsAtTheHelm("AFTER ScrollTrigger.refresh()", container.current);
    });

    ScrollTrigger.refresh();
    //* DEBUG END *?/
    return () => mm.revert();
  }, [ready]);

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
        <h1 className="font-display max-w-[375px] text-center text-[5rem] leading-[1] font-black text-white uppercase mix-blend-exclusion lg:max-w-full lg:text-[7rem] lg:leading-normal 2xl:text-[9.5rem]">
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
