import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Brief() {
  const text = useRef(null);
  const container = useRef(null);
  useGSAP(() => {
    const split = new SplitText(text.current, {
      type: "words",
      wordsClass: "mix-blend-exclusion",
    });
    gsap.from(split.words, {
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
      opacity: 0.25,
      stagger: 0.25,
      duration: 1,
      ease: "power2.out",
    });
  });
  return (
    <section
      ref={container}
      className="testing123 h-screen flex flex-col justify-center items-center"
    >
      <h3
        ref={text}
        className="font-sans text-[2rem] lg:text-[3.5rem] text-white w-[70%] uppercase text-center leading-[1.2] mix-blend-difference z-50"
      >
        At The Helm Productions is an emerging indie production company focused
        on using kooky, comedic narratives to enhance meaningful subject
        matters.
      </h3>
    </section>
  );
}
