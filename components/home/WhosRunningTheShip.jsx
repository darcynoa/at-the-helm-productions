"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HelmerLine from "../HelmerLine";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(DrawSVGPlugin, SplitText, ScrollTrigger);

export default function WhosRunningTheShip({ whosRunningTheShip }) {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    const roleItems = gsap.utils.toArray(roles.current.children);

    mm.add("(max-width: 767px)", () => {
      gsap.set(emerging.current, { autoAlpha: 0, y: -15 });

      // Circle expansion animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: circleRef.current,
            start: "top center+=200px",
            end: "+=480px",
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
            end: "top top+=68px",
            scrub: 1,
          },
        })
        // fromTo is enforced to ensure that linear gradient doesn't go through any other hues besides black
        .fromTo(
          overlay.current,
          {
            // same structure as the target gradient, but start fully transparent (or whatever start you want)
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
          },
          {
            backgroundImage:
              "linear-gradient(to bottom, rgba(7,6,6,1) 0%, rgba(7,6,6,0.5) 50%, rgba(7,6,6,1) 100%)",
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
            end: "+=350px",
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
          duration: 0.8,
          ease: "power2.out",
        });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        gsap.globalTimeline.clear();
      };
    });

    mm.add("(min-width: 768px)", () => {
      gsap.set(emerging.current, { autoAlpha: 0, y: 25 });

      // Circle expansion animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: circleRef.current,
            start: "top center",
            end: "+=500px",
            scrub: 1,
            // markers: true,
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
          overlay.current,
          {
            // same structure as the target gradient, but start fully transparent (or whatever start you want)
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 100%)",
          },
          {
            backgroundImage:
              "linear-gradient(to bottom, rgba(7,6,6,1) 0%, rgba(7,6,6,0.1) 50%, rgba(7,6,6,1) 100%)",
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
            end: "+=170px",
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
          duration: 0.8,
          ease: "power2.out",
        });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        gsap.globalTimeline.clear();
      };
    });
  });

  const circleRef = useRef(null);
  const container = useRef(null);
  const overlay = useRef(null);
  const helmer = useRef(null);
  const roles = useRef(null);
  const emerging = useRef(null);
  return (
    <section ref={container} className="mt-[3rem] w-full">
      <h1 className="font-display pb-[2rem] text-center text-[3.5rem] leading-[1] font-black text-white uppercase mix-blend-exclusion lg:pb-0 lg:text-[8.75vw] lg:leading-normal">
        {whosRunningTheShip.heading}
      </h1>
      <div
        ref={circleRef}
        className="clip-path-circle relative flex h-screen w-full flex-col items-center justify-end gap-[2rem] pb-[16rem] lg:gap-[7rem] lg:pb-[2rem]"
      >
        <Image
          src="/helmer-at-the-helm.jpg"
          alt="It's the Helmer who is always at the helm"
          width={5328}
          height={4000}
          className="absolute top-0 left-0 -z-10 h-screen w-full object-cover object-[center_20%]"
        />
        <div
          ref={overlay}
          className="absolute top-0 left-0 h-screen w-full bg-[linear-gradient(to_bottom,rgba(7,6,6,0)_0%,rgba(7,6,6,0)_92%)]"
        ></div>
        <h2
          ref={helmer}
          className="font-display px-[1rem] text-center text-[3rem] leading-[1.2] font-black text-white uppercase lg:px-0 lg:text-[7rem] lg:leading-normal"
        >
          {whosRunningTheShip.subheading}
        </h2>
        <div
          ref={roles}
          className="relative grid grid-cols-3 place-items-center gap-[2rem]"
        >
          {whosRunningTheShip.listOfAttributes.map((attributeObj, index) => (
            <h4
              key={index}
              className="w-fit text-center font-sans text-[1rem] leading-[1.2] text-white uppercase lg:text-[2.5rem]"
            >
              {attributeObj.attribute}
              {attributeObj.actualAttribute && (
                <>
                  <span
                    ref={emerging}
                    className="font-handwriting text-cyan absolute bottom-[40px] left-0 -rotate-6 text-[1rem] opacity-0 lg:-bottom-[40px] lg:w-fit lg:text-[2rem] [@media(519px_<_width_<_64rem)]:bottom-[24px]"
                  >
                    {attributeObj.actualAttribute}
                  </span>
                  <HelmerLine className="absolute -top-[14px] left-[10px] w-[80%] lg:top-0 lg:-left-[37px] lg:w-auto" />
                </>
              )}
            </h4>
          ))}
        </div>
      </div>
    </section>
  );
}
