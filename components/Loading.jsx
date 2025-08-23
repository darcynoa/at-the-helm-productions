"use client";

import WheelSVG from "./WheelSVG";
import WheelThreeQuarterSVG from "./WheelThreeQuarterSVG";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

export default function Loading() {
  const svgWheel = useRef(null);
  const svgWheel34 = useRef(null);
  const loadingBar = useRef(null);
  const loadingValue = useRef(null);
  useGSAP(() => {
    const tl = gsap
      .timeline()
      .to(svgWheel.current, {
        rotate: 1080,
        duration: 3,
        ease: "sine.inOut",
      })
      .to(svgWheel.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
      });

    gsap.from(loadingBar.current, {
      scaleX: 0,
      duration: 3,
      ease: "expo.inOut",
      onUpdate: () => {
        const scaleX = gsap.getProperty(loadingBar.current, "scaleX");
        const percentage = Math.round(scaleX * 100);
        loadingValue.current.innerText = percentage;
      },
    });

    // tl.play();
  });
  return (
    <div className="w-screen h-screen absolute top-0 left-0 bg-black flex flex-col justify-center items-center gap-[8rem]">
      <div className="relative w-screen flex justify-center items-center">
        <WheelThreeQuarterSVG
          ref={svgWheel34}
          className="w-[11rem] lg:w-auto absolute left-[34.25%]"
        />
        <WheelSVG ref={svgWheel} className="w-[11rem] lg:w-auto" />
      </div>
      <div className="w-screen flex flex-col items-center gap-[1.5rem]">
        <div className="w-3/4 h-[2px] relative lg:w-1/2">
          <hr
            ref={loadingBar}
            className="bg-purple origin-top-left absolute w-full h-full"
          />
        </div>
        <p
          ref={loadingValue}
          className="font-sans font-black text-[1.25rem] text-purple"
        >
          55
        </p>
      </div>
    </div>
  );
}
