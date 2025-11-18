"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HelmerLine from "../HelmerLine";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(DrawSVGPlugin, SplitText);

export default function WhosRunningTheShip() {
  useGSAP(() => {
    gsap.set(emerging.current, { autoAlpha: 0, y: 220 });
    const mm = gsap.matchMedia();
    const roleItems = gsap.utils.toArray(roles.current.children);

    mm.add("(max-width: 767px)", () => {
      // Circle expansion animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: circleRef.current,
            start: "top center+=200px",
            end: "+=300px",
            scrub: 1,
          },
        })
        .to(circleRef.current, {
          clipPath: "circle(100% at 50% 14%)",
          ease: "linear",
        });

      // Gradient overlay animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: circleRef.current,
            start: "top center+=200px",
            end: "+=300px",
            scrub: 1,
          },
        })
        .fromTo(
          circleRef.current,
          {
            // same structure as the target gradient, but start fully transparent (or whatever start you want)
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%), url(/helmer-at-the-helm.jpg)",
          },
          {
            backgroundImage:
              "linear-gradient(to bottom, rgba(7,6,6,1) 0%, rgba(7,6,6,0.5) 50%, rgba(7,6,6,1) 100%), url(/helmer-at-the-helm.jpg)",
            ease: "linear",
            immediateRender: false,
            scrollTrigger: {
              trigger: circleRef.current,
              start: "center bottom",
              end: "+=250px",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          },
        );

      // Text and roles fade-in animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: circleRef.current,
            start: "center-=400px center",
            end: "+=400px",
            scrub: 1,
          },
        })
        .fromTo(
          helmer.current,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
        )
        .fromTo(
          roleItems,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.05,
          },
        );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: circleRef.current,
            start: "center-=300px center",
          },
        })
        .fromTo(
          ".helmerline-stroke-shape",
          {
            drawSVG: "0%",
          },
          {
            drawSVG: "100%",
            duration: 0.7,
            delay: 0.4,
            ease: "power2.inOut",
          },
        )
        .to(emerging.current, {
          y: 0,
          autoAlpha: 1,
          duration: 0.3,
          ease: "power2.out",
        });
    });

    mm.add("(min-width: 768px)", () => {
      // Circle expansion animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: circleRef.current,
            start: "top center",
            end: "+=500px",
            scrub: 1,
          },
        })
        .to(circleRef.current, {
          clipPath: "circle(100% at 50% 14%)",
          ease: "linear",
        });
      // Gradient overlay animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: circleRef.current,
            start: "center bottom",
            end: "+=500px",
            scrub: 1.3,
          },
        })
        .fromTo(
          circleRef.current,
          {
            // same structure as the target gradient, but start fully transparent (or whatever start you want)
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%), url(/helmer-at-the-helm.jpg)",
          },
          {
            backgroundImage:
              "linear-gradient(to bottom, rgba(7,6,6,1) 0%, rgba(7,6,6,0.5) 50%, rgba(7,6,6,1) 100%), url(/helmer-at-the-helm.jpg)",
            ease: "linear",
            immediateRender: false,
            scrollTrigger: {
              trigger: circleRef.current,
              start: "center bottom",
              end: "+=500px",
              scrub: 1.3,
              invalidateOnRefresh: true,
            },
          },
        );

      // Text and roles fade-in animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: circleRef.current,
            start: "center-=200px center",
            end: "+=300px",
            scrub: 1.5,
          },
        })
        .fromTo(
          helmer.current,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
        )
        .fromTo(
          roleItems,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.05,
          },
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: circleRef.current,
            start: "center center",
          },
        })
        .fromTo(
          ".helmerline-stroke-shape",
          {
            drawSVG: "0%",
          },
          {
            drawSVG: "100%",
            duration: 0.7,
            delay: 0.4,
            ease: "power2.inOut",
          },
        )
        .to(emerging.current, {
          y: 0,
          autoAlpha: 1,
          duration: 0.3,
          ease: "power2.out",
        });
    });
  });

  const circleRef = useRef(null);
  const container = useRef(null);
  const helmer = useRef(null);
  const roles = useRef(null);
  const emerging = useRef(null);
  return (
    <section ref={container} className="mt-[3rem] w-full lg:mt-[15rem]">
      <h1 className="font-display text-center text-[5rem] leading-[1] font-black text-white uppercase mix-blend-exclusion lg:text-[9.5rem] lg:leading-normal">
        Who's running the ship?
      </h1>
      <div
        ref={circleRef}
        className="clip-path-circle flex h-screen w-full flex-col items-center justify-center gap-[8rem] bg-[url(/helmer-at-the-helm.jpg)] bg-size-[260%] bg-position-[45%] bg-no-repeat lg:bg-cover lg:bg-center"
      >
        <h2
          ref={helmer}
          className="font-display text-center text-[4rem] leading-[1.2] font-black text-white uppercase lg:text-[7rem] lg:leading-normal"
        >
          Anna Helmer At The Helm
        </h2>
        <div
          ref={roles}
          className="relative grid grid-cols-3 place-items-center gap-[2rem]"
        >
          <h4 className="w-fit font-sans text-[1rem] leading-[1.2] text-white uppercase lg:text-[2.5rem]">
            Producer
          </h4>
          <h4 className="w-fit font-sans text-[1rem] leading-[1.2] text-white uppercase lg:text-[2.5rem]">
            Writer
          </h4>
          <h4 className="w-fit font-sans text-[1rem] leading-[1.2] text-white uppercase lg:text-[2.5rem]">
            Director
          </h4>
          <h4 className="w-fit font-sans text-[1rem] leading-[1.2] text-white uppercase lg:text-[2.5rem]">
            2nd AD
          </h4>
          <h4 className="w-fit font-sans text-[1rem] leading-[1.2] text-white uppercase lg:text-[2.5rem]">
            Production Assistant
          </h4>
          <h4 className="w-fit font-sans text-[1rem] leading-[1.2] text-white uppercase lg:text-[2.5rem]">
            Broke <span className="hidden">Emerging</span> Filmmaker
          </h4>
          <HelmerLine className="absolute right-[9%] bottom-[8%] w-[25%] lg:right-[18.5%] lg:bottom-0 lg:w-auto" />
          <p
            ref={emerging}
            className="font-handwriting text-cyan absolute right-[13%] bottom-[44%] -rotate-6 text-[1.5rem] opacity-0 lg:right-[20%] lg:bottom-[-45%] lg:w-fit lg:text-[3rem]"
          >
            Emerging
          </p>
        </div>
      </div>
    </section>
  );
}
