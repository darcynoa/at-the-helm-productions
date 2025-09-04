"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function ScrollCta() {
  const cta = useRef(null);
  const ctaText = useRef(null);
  const light = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(cta.current, {
      rotate: -360,
      duration: 20,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });
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
          "radial-gradient(circle, #c07124 0%,rgba(213, 137, 147, 0) 100%)",
        delay: 1.5,
      })
      .to(light.current, {
        backgroundImage:
          "radial-gradient(circle, rgba(5, 255, 192, 1) 0%, rgba(5, 255, 192, 0) 100%)",
        delay: 3.5,
      });

    // First scroll-triggered scale up
    gsap.to(cta.current, {
      scale: 3,
      y: -500,
      ease: "linear",
      scrollTrigger: {
        trigger: ".testing123",
        scrub: 1,
        start: "top bottom",
        end: "center center",
      },
    });

    // Second scroll-triggered scale down
    gsap.fromTo(
      cta.current,
      { y: -500, scale: 3 },
      {
        scale: 3,
        y: -1400,
        ease: "linear",
        scrollTrigger: {
          trigger: ".testing123",
          scrub: 1,
          start: "center+=1px center",
          end: "bottom top",
        },
      }
    );
    gsap.to(ctaText.current, {
      opacity: 0,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".testing123",
        start: "top+=200px bottom",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <div
      ref={cta}
      className="fixed left-1/2 -translate-x-1/2 bottom-[-3rem] lg:bottom-[-6rem] -z-10"
    >
      <Image
        ref={ctaText}
        src="/scroll-cta.png"
        alt="Scroll Image that calls the user to scroll"
        width={146}
        height={152}
      />
      <div
        ref={light}
        className="rounded-full w-[131px] aspect-square bg-radial from-cyan to-transparent fixed top-[0.5rem] left-[0.5rem] blur-lg"
      ></div>
    </div>
  );
}
