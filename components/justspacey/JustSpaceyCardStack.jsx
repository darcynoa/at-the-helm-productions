"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function JustSpaceyCardStack() {
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
      const pin = ScrollTrigger.create({
        trigger: bottomCard.current,
        start: "bottom+=1000px top+=220px",
        end: "+=500px",
        pin: true,
        // markers: true,
        pinSpacing: false,
        anticipatePin: true,
        pinType: "fixed",
        pinReparent: true,
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=1000px",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        .from(topCardSplit.words, {
          yPercent: 100,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          topCard.current,
          {
            y: "-100vh",
            ease: "linear",
          },
          ">",
        )
        .to(
          middleOverlay.current,
          {
            autoAlpha: 0,
            ease: "linear",
          },
          "<",
        )
        .from(
          bottomCardSplit.words,
          {
            yPercent: 100,
            stagger: 0.02,
            duration: 0.2,
            ease: "power2.out",
          },
          "+=0.1",
        );

      return () => {
        pin.kill();
      };
    });

    mm.add("(min-width: 768px)", () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=1000px",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        .from(topCardSplit.words, {
          yPercent: 100,
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to(
          topCard.current,
          {
            y: "-100vh",
            ease: "linear",
          },
          ">",
        )
        .to(
          middleOverlay.current,
          {
            autoAlpha: 0,
            ease: "linear",
          },
          "<",
        )
        .from(
          bottomCardSplit.words,
          {
            yPercent: 100,
            stagger: 0.02,
            duration: 0.2,
            ease: "power2.out",
          },
          "+=0.1",
        );
    });
    return () => mm.revert();
  });

  return (
    <section ref={sectionRef}>
      <h1 className="font-display text-center text-[5rem] leading-[1.2] font-black text-white uppercase mix-blend-exclusion lg:text-[9.5rem] lg:leading-normal">
        What is{" "}
        <span className="lg:hidden">
          <br />
        </span>
        <span className="font-spacey tracking-[0.04em]">Just Spacey?</span>
      </h1>
      <div ref={container} className="relative">
        <div
          ref={topCard}
          className="absolute top-0 left-0 z-5 flex h-[110vh] w-full items-center justify-center bg-[linear-gradient(to_bottom,rgba(7,6,6,1)_0%,rgba(7,6,6,0)_40%),url('/body-drawers.jpg')] bg-cover bg-center lg:h-screen"
        >
          <h3
            ref={topCardText}
            className="w-[70%] text-center font-sans text-[2rem] leading-[1.2] text-white uppercase lg:text-[3.5rem]"
          >
            ADHD characters are rarely seen on screen – let alone is there any
            mention of the symptoms that can be an advantage rather than a
            constant pain.
          </h3>
        </div>
        <div
          ref={bottomCard}
          className="relative z-3 flex h-[110vh] w-full items-center justify-center bg-[linear-gradient(to_bottom,rgba(7,6,6,0.3)_0%,rgba(7,6,6,0.3)_40%),url('/just-spacey-bottom-card.jpg')] bg-cover bg-center lg:h-screen"
        >
          <div
            ref={middleOverlay}
            className="absolute top-0 left-0 z-4 h-[110vh] w-full bg-[linear-gradient(to_bottom,rgba(7,6,6,0.7)_0%,rgba(7,6,6,0.7)_100%)] lg:h-screen"
          ></div>
          <h3
            ref={bottomCardText}
            className="w-[70%] text-center font-sans text-[2rem] leading-[1.2] text-white uppercase lg:text-[3.5rem]"
          >
            Just Spacey is a morgue-comedy short film that touches on the
            unexpected humor, chaos, and brilliance of thinking differently.
          </h3>
        </div>
      </div>
    </section>
  );
}
