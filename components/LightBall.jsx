"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function LightBall({ className = "", ...props }) {
  const light = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({ repeat: -1, ease: "power1.inOut" });
    tl.to(light.current, {
      backgroundImage:
        "radial-gradient(circle, rgba(128, 99, 242, 1) 0%,rgba(128, 99, 242, 0) 100%)",
      delay: 2.5,
    })
      .to(light.current, {
        backgroundImage:
          "radial-gradient(circle, rgba(255, 142, 156, 1) 0%,rgba(213, 137, 147, 0) 100%)",
        delay: 1.5,
      })
      .to(light.current, {
        backgroundImage:
          "radial-gradient(circle, #123dfa 0%,rgba(213, 137, 147, 0) 100%)",
        delay: 1.5,
      })
      .to(light.current, {
        backgroundImage:
          "radial-gradient(circle, rgba(5, 255, 192, 1) 0%, rgba(5, 255, 192, 0) 100%)",
        delay: 3.5,
      });
  });

  return (
    <div className={className} {...props}>
      <div
        ref={light}
        className="from-cyan aspect-square w-[131px] rounded-full bg-radial to-transparent blur-lg"
      ></div>
    </div>
  );
}
