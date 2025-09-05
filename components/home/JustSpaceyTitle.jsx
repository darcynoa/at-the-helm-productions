import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JustSpaceyTitle() {
  const carousel = useRef(null);
  const jsText = useRef(null);
  const jsHeader = useRef(null);
  const jsBackground = useRef(null);
  useGSAP(() => {
    gsap.to(carousel.current, {
      x: -1800,
      scrollTrigger: {
        trigger: carousel.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to([jsText.current, jsHeader.current], {
      y: 750,
      ease: "cubic-bezier(.79,.68,.39,.47)",
      scrollTrigger: {
        trigger: jsBackground.current,
        start: "top center",
        end: "center center",
        scrub: true,
      },
    });
  });
  return (
    <section className="overflow-hidden flex flex-col justify-center items-center gap-[2rem]">
      <div ref={carousel} className="relative flex gap-[1rem] px-[4rem]">
        {Array.from({ length: 6 }).map((_, i) => (
          <Image
            key={i}
            src={`/carousel/${i + 1}.png`}
            alt={`Image ${i + 1}`}
            width={600}
            height={200}
          />
        ))}
      </div>
      <p
        ref={jsText}
        className="text-white font-sans text-[1.5rem] uppercase mix-blend-exclusion"
      >
        Everyone had fun on this one
      </p>
      <h1
        ref={jsHeader}
        className=" font-display text-white font-black text-[5rem] lg:text-[9.5rem] uppercase text-center mix-blend-exclusion"
      >
        Just spacey
      </h1>
      <Image
        ref={jsBackground}
        src="/justspacey-hero.png"
        alt="I love this photo"
        width={1921}
        height={1080}
      />
    </section>
  );
}
