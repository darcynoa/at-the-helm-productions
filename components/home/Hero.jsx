import Test from "../Test";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import SplitText from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(DrawSVGPlugin, SplitText);

export default function Hero() {
  const hero = useRef(null);
  const wrapParty = useRef(null);
  const finalText = useRef(null);
  const line = useRef(null);
  const merryTime = useRef(null);

  useGSAP(() => {
    gsap.set(merryTime.current, { autoAlpha: 0, y: 50 });

    const splitFinalText = new SplitText(finalText.current, {
      type: "lines",
    });

    gsap.set(splitFinalText.lines, { autoAlpha: 0, y: 20 });

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: hero.current,
          start: "top top+=1vh",
          end: "bottom center",
          pin: true,
          scrub: 1,
        },
      })
      .fromTo(
        ".stroke-shape",
        {
          drawSVG: "0%",
          strokeWidth: 4,
        },
        {
          drawSVG: "100%",
          duration: 1.3,
          ease: "expo.inOut",
        },
      )
      .to(
        [wrapParty.current, line.current],
        {
          display: "none",
          autoAlpha: 0,
        },
        "+=0.5",
      )
      .to(
        splitFinalText.lines,
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.25,
          ease: "expo.inOut",
        },
        "-=0.4",
      )
      .to(merryTime.current, {
        autoAlpha: 1,
        y: 0,
        duration: 1.5,
        ease: "expo.inOut",
      });
  });
  return (
    <section
      ref={hero}
      className="relative -z-20 -mt-[1%] -mb-[2rem] flex h-screen w-full flex-col items-center justify-center bg-[linear-gradient(to_bottom,rgba(7,6,6,0)_61%,rgba(7,6,6,1)_100%),url(/home-hero.png)] bg-cover bg-top leading-[1]"
    >
      <h1 className="font-display flex items-center justify-center px-[2rem] pb-[4rem] text-center text-[5rem] leading-[1] font-black text-white uppercase drop-shadow-[0px_0px_34px_rgba(7,6,6,1)] lg:px-0 lg:text-[9.5rem]">
        When We&apos;re <br /> At The Helm
      </h1>
      <div className="relative flex flex-col">
        <p
          ref={finalText}
          className="w-[30ch] text-center font-sans text-[15px] leading-[1.2] font-normal text-white uppercase drop-shadow-[0px_0px_24px_rgba(7,6,6,1)] lg:text-[1.8rem]"
        >
          You know it&apos;s going to be <br /> a safe &amp; collaborative space
          to make bold films
        </p>
        <p
          ref={wrapParty}
          className="absolute w-[30ch] text-center font-sans text-[15px] leading-[1.2] font-normal text-white uppercase drop-shadow-[0px_0px_24px_rgba(7,6,6,1)] lg:text-[1.8rem]"
        >
          You know there&apos;s gonna be a great wrap party
        </p>
        <Test
          ref={line}
          className="absolute -top-[3rem] left-0 w-[100%] lg:-top-[2rem]"
        />
      </div>
      <p
        ref={merryTime}
        className="font-handwriting rotate-12 pl-[40%] text-[15px] text-white drop-shadow-[0px_0px_24px_rgba(7,6,6,1)] lg:text-[1.8rem]"
      >
        and have a merry time doing it!
      </p>
    </section>
  );
}
