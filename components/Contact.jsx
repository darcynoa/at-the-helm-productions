"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import LightBall from "./LightBall";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { urlFor } from "./utils/SanityImageUrl";

gsap.registerPlugin(ScrollTrigger);

export default function Contact({ contactData }) {
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
        {contactData.heading}
      </h1>
      <div className="flex flex-col items-center justify-center gap-[2rem]">
        {contactData.socials.map((social) => {
          const iconStyling = `w-[${social.mobileWidthPercentage}%] lg:w-auto`;

          return (
            <Link
              key={social._key}
              className="flex items-center justify-center gap-[0.4rem] font-sans text-[15px] font-normal text-white uppercase mix-blend-exclusion transition-shadow duration-300 ease-in-out hover:drop-shadow-[4px_4px_14px_rgba(5,255,192,1)] lg:justify-between lg:gap-[1rem] lg:text-[3rem]"
              href={
                social.platform.toLowerCase() === "email"
                  ? `mailto:${social.url}`
                  : social.url
              }
              target="_blank"
            >
              <Image
                src={urlFor(social.icon).url()}
                alt={`${social.platform} icon`}
                width={48}
                height={48}
                className={iconStyling}
              />
              {social.displayText}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
