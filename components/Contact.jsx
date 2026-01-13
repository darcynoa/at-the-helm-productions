"use client";

import Link from "next/link";
import { useRef } from "react";
import LightBall from "./LightBall";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const light = useRef(null);
  const container = useRef(null);
  useGSAP(() => {
    gsap.from(light.current, {
      scale: 1,
      yPercent: 100,
      ease: "circ.in",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  });

  return (
    <section
      id="contact"
      ref={container}
      className={`footer__height relative mt-[4rem] mb-[6rem] flex h-auto flex-col items-center justify-center gap-[4rem] lg:my-0`}
    >
      <LightBall
        ref={light}
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[3] lg:top-1/2 lg:scale-[7]"
      />
      <h1 className="font-display px-[1rem] text-center text-[4rem] font-black text-white uppercase mix-blend-exclusion lg:text-[9.5rem]">
        contact us
      </h1>
      <div className="flex flex-col items-center justify-center gap-[2rem]">
        <Link
          className="flex items-center justify-center gap-[0.4rem] font-sans text-[15px] font-normal text-white uppercase mix-blend-exclusion transition-shadow duration-300 ease-in-out hover:drop-shadow-[4px_4px_14px_rgba(5,255,192,1)] lg:justify-between lg:gap-[1rem] lg:text-[3rem]"
          href="mailto:info@atthehelmproductions.com"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            className="w-[9%] lg:w-auto"
          >
            <path
              fill="#e5f1f2"
              d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"
            />
          </svg>{" "}
          info@atthehelmproductions.com
        </Link>
        <Link
          className="flex items-center justify-center gap-[0.4rem] font-sans text-[15px] font-normal text-white uppercase mix-blend-exclusion transition-shadow duration-300 ease-in-out hover:drop-shadow-[4px_4px_14px_rgba(5,255,192,1)] lg:justify-between lg:gap-[1rem] lg:text-[3rem]"
          href="https://instagram.com/justspaceymovie"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            className="w-[15%] lg:w-auto"
          >
            <circle cx="17" cy="7" r="1.5" fill="#e5f1f2" fillOpacity="0">
              <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="1.3s"
                dur="0.15s"
                values="0;1"
              />
            </circle>
            <g
              fill="none"
              stroke="#e5f1f2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path
                strokeDasharray="72"
                strokeDashoffset="72"
                d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.6s"
                  values="72;0"
                />
              </path>
              <path
                strokeDasharray="28"
                strokeDashoffset="28"
                d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.7s"
                  dur="0.6s"
                  values="28;0"
                />
              </path>
            </g>
          </svg>{" "}
          @JustSpaceyMovie
        </Link>
      </div>
    </section>
  );
}
