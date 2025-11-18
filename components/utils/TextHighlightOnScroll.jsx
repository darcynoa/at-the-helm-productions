"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TextHighlightOnScroll({
  children,
  container, // expect: const container = useRef(null) passed from parent
  speed = 2,
  difference,
}) {
  const textRef = useRef(null);

  useGSAP(() => {
    // wait until both refs are mounted
    if (!textRef.current || !container || !container.current) {
      // helpful while debugging — remove later
      console.log(
        "waiting for refs:",
        textRef.current,
        container && container.current,
      );
      return;
    }

    const split = new SplitText(textRef.current, {
      type: "words",
      wordsClass: difference ? "mix-blend-exclusion" : "",
    });

    const tween = gsap.fromTo(
      split.words,
      { opacity: 0.25 },
      {
        opacity: 1,
        stagger: 0.25,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: `+=${speed * 1000}px`,
          scrub: true,
          pin: true,
          // set markers: true while debugging to see start/end
          markers: true,
          invalidateOnRefresh: true,
        },
      },
    );

    return () => {
      // cleanup
      tween.kill();
      split.revert();
      // remove any ScrollTriggers that reference this trigger element
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === container.current) st.kill();
      });
    };
  });

  return (
    <h3
      ref={textRef}
      className="z-50 w-[70%] text-center font-sans text-[2rem] leading-[1.2] text-white uppercase lg:text-[3.5rem]"
    >
      {children}
    </h3>
  );
}
