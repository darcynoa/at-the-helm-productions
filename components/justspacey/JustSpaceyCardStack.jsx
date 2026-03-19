"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { urlFor } from "../utils/SanityImageUrl";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function JustSpaceyCardStack({ data }) {
  const topCard = useRef(null);
  const topCardText = useRef(null);
  const middleOverlay = useRef(null);
  const bottomCard = useRef(null);
  const bottomCardText = useRef(null);
  const container = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    const topCardSplit = new SplitText(topCardText.current, {
      type: "words",
      mask: "words",
    });
    const bottomCardSplit = new SplitText(bottomCardText.current, {
      type: "words",
      mask: "words",
    });

    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      // const pin = ScrollTrigger.create({
      //   trigger: bottomCard.current,
      //   start: "bottom+=1100px top+=220px",
      //   end: "+=500px",
      //   pin: true,
      //   pinSpacing: false,
      //   anticipatePin: true,
      //   pinType: "fixed",
      //   pinReparent: true,
      // });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=1100px",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        .from(topCardSplit.words, {
          yPercent: 100,
          stagger: 0.15,
          duration: 2,
          ease: "power2.inOut",
        })
        .to(
          topCard.current,
          {
            yPercent: -100,
            ease: "linear",
            duration: 10,
          },
          ">",
        )
        .to(
          middleOverlay.current,
          {
            autoAlpha: 0,
            ease: "linear",
            duration: 6,
          },
          "<",
        )
        .from(
          bottomCardSplit.words,
          {
            yPercent: 100,
            stagger: 0.15,
            duration: 2,
            ease: "power2.out",
          },
          "+=0.1",
        );
    });

    mm.add("(min-width: 768px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=1100px",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        .from(topCardSplit.words, {
          yPercent: 100,
          stagger: 0.15,
          duration: 2,
          ease: "power2.inOut",
        })
        .to(topCard.current, {
          y: "-100vh",
          ease: "linear",
          duration: 10,
        })
        .to(
          middleOverlay.current,
          {
            autoAlpha: 0,
            ease: "linear",
            duration: 10,
          },
          "<",
        )
        .from(
          bottomCardSplit.words,
          {
            yPercent: 100,
            stagger: 0.15,
            duration: 2,
            ease: "power2.out",
          },
          "+=0.1",
        );
    });
    return () => mm.revert();
  });

  const topCardImageUrl = urlFor(data.topCardImage).url();
  const bottomCardImageUrl = urlFor(data.bottomCardImage).url();

  const topCardStyles = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `linear-gradient(to bottom,rgba(7,6,6,1) 0%, rgba(7,6,6,0) 40%), url('${topCardImageUrl}')`,
  };

  const bottomCardStyles = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `linear-gradient(to bottom,rgba(7,6,6,0.3) 0%, rgba(7,6,6,0.3) 40%), url('${bottomCardImageUrl}')`,
  };

  return (
    <section ref={sectionRef}>
      <h1 className="font-display text-center text-[5rem] leading-[1.2] font-black text-white uppercase mix-blend-exclusion lg:text-[9.5rem] lg:leading-normal">
        {data.headerInHeaderFont}
        <span className="lg:hidden">
          <br />
        </span>
        <span className="font-spacey tracking-[0.04em]">
          &nbsp;{data.headerInSpaceyFont}
        </span>
      </h1>
      <div ref={container} className="relative">
        <div
          ref={topCard}
          className="absolute top-0 left-0 z-5 flex h-[110vh] w-full items-center justify-center lg:h-screen"
          style={topCardStyles}
        >
          <h3
            ref={topCardText}
            className="w-[70%] text-center font-sans text-[1.5rem] leading-[1.2] text-white uppercase lg:text-[3.5rem]"
          >
            {data.topCardText}
          </h3>
        </div>
        <div
          ref={bottomCard}
          className="relative z-3 flex h-[110vh] w-full items-center justify-center lg:h-screen"
          style={bottomCardStyles}
        >
          <div
            ref={middleOverlay}
            className="absolute top-0 left-0 z-4 h-[110vh] w-full bg-[linear-gradient(to_bottom,rgba(7,6,6,0.7)_0%,rgba(7,6,6,0.7)_100%)] lg:h-screen"
          ></div>
          <h3
            ref={bottomCardText}
            className="w-[70%] text-center font-sans text-[1.5rem] leading-[1.2] text-white uppercase lg:text-[3.5rem]"
          >
            {data.bottomCardText}
          </h3>
        </div>
      </div>
    </section>
  );
}
