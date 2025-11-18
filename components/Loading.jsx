"use client";

import WheelSVG from "./WheelSVG";
import WheelThreeQuarterSVG from "./WheelThreeQuarterSVG";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import DecorativeWave from "./DecorativeWave";
import Logo from "./Logo";
import TheHelmMask from "./TheHelmMask";
import LoadingSVGGroup from "./LoadingSVGGroup";

export default function Loading() {
  const loadingBar = useRef(null);
  const loadingValue = useRef(null);
  const loadingBarContainer = useRef(null);
  const fullLogo = useRef(null);

  // The Querying of the SVG parts
  const fullWheel = "#fullWheel";
  const threeQuarterWheel = "#threeQuarterWheel";

  useGSAP(() => {
    gsap.set(threeQuarterWheel, { opacity: 0, x: 209 });
    gsap.set("#wave", { y: 100, x: 0, scaleX: -1 });
    gsap.set("#testRect", { transformOrigin: "50% 50%" });
    const tl = gsap
      .timeline()
      .to(fullWheel, {
        rotate: 1080,
        transformOrigin: "50% 50%",
        duration: 3,
        ease: "sine.inOut",
      })
      .to(fullWheel, {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
      })
      .to(
        threeQuarterWheel,
        {
          opacity: 1,
          ease: "none",
        },
        "<",
      )
      .to(
        [loadingBar.current, loadingValue.current],
        {
          opacity: 0,
          duration: 0.5,
          ease: "sine.in",
        },
        "<",
      )
      .to(threeQuarterWheel, {
        x: 0,
        duration: 1,
        ease: "power2.inOut",
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
    <div className="absolute top-0 left-0 flex h-screen w-full flex-col items-center justify-center gap-[8rem] bg-black">
      {/* <div className="relative flex w-full items-center justify-center">
        <DecorativeWave className="absolute left-[27.1%] scale-[31.8%]" />
        <TheHelmMask className="absolute top-[16.5%] left-[39.1%]" />
        <Logo
          ref={fullLogo}
          className="absolute left-[30.4%] hidden scale-[80%]"
        />
        <WheelThreeQuarterSVG
          ref={svgWheel34}
          className="absolute left-[37.25%] w-[11rem] opacity-0 lg:w-auto"
        />
        <WheelSVG ref={svgWheel} className="w-[11rem] lg:w-auto" />
      </div> */}
      <LoadingSVGGroup />
      <div className="flex w-screen flex-col items-center gap-[1.5rem]">
        <div
          ref={loadingBarContainer}
          className="relative h-[2px] w-3/4 lg:w-1/2"
        >
          <hr
            ref={loadingBar}
            className="bg-purple absolute h-full w-full origin-top-left"
          />
        </div>
        <p
          ref={loadingValue}
          className="text-purple font-sans text-[1.25rem] font-black"
        >
          0
        </p>
      </div>
    </div>
  );
}
