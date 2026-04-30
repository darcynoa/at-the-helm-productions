import HeroLine from "../HeroLine";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import SplitText from "gsap/SplitText";
import LightBall from "../LightBall";
import { urlFor } from "../utils/SanityImageUrl";
import Image from "next/image";

gsap.registerPlugin(DrawSVGPlugin, SplitText);

export default function Hero({ heroData }) {
  const hero = useRef(null);
  const wrapParty = useRef(null);
  const finalText = useRef(null);
  const line = useRef(null);
  const merryTime = useRef(null);
  const scrollCTA = useRef(null);
  const scrollCTAText = useRef(null);

  useGSAP(() => {
    gsap.set(merryTime.current, { autoAlpha: 0, y: 50 });

    const splitFinalText = new SplitText(finalText.current, {
      type: "lines",
    });

    gsap.set(splitFinalText.lines, { autoAlpha: 0, y: 20 });

    const displayWidth = window.innerWidth;
    const overallDuration = displayWidth < 768 ? "+=1000" : "+=2000";
    const scribbleDuration = 0.475;

    gsap.to(scrollCTAText.current, {
      rotate: -360,
      ease: "linear",
      repeat: -1,
      duration: 10,
    });

    const tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: hero.current,
          start: "top top+=1vh",
          end: overallDuration,
          pin: true,
          scrub: 1,
        },
      })
      .fromTo(
        ".heroline-stroke-shape",
        {
          drawSVG: "0%",
          strokeWidth: 4,
        },
        {
          drawSVG: "100%",
          duration: scribbleDuration,
          ease: "linear",
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
      .to(
        merryTime.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 1.5,
          ease: "expo.inOut",
        },
        "-=1.3",
      );

    return () => {
      // Kill the rotation animation on cleanup
      gsap.killTweensOf(scrollCTAText.current);
    };
  });

  useEffect(() => {
    // Force image reload with cache busting
    if (scrollCTAText.current) {
      const img = scrollCTAText.current;
      // Reset the src to trigger a fresh load
      const src = img.src;
      img.src = "";
      img.src = src;
    }
  }, []);

  const backgroundImageUrl = urlFor(heroData.backgroundImage).url();

  return (
    <section
      ref={hero}
      id="hero"
      className="relative -z-20 -mt-[1%] flex h-svh w-full flex-col items-center justify-center bg-cover bg-no-repeat leading-[1] lg:overflow-y-hidden"
    >
      <Image
        src={backgroundImageUrl}
        alt="Change this to something in Sanity"
        width={1920}
        height={1080}
        className="absolute top-1/2 h-[50vh] w-full -translate-y-1/2 object-cover object-[80%] lg:top-0 lg:h-screen lg:-translate-y-0 lg:object-center"
      />
      <div className="absolute top-0 left-0 h-screen w-full bg-[linear-gradient(to_bottom,rgba(7,6,6,1)_25%,rgba(7,6,6,0)_50%,rgba(7,6,6,1)_70%)] lg:bg-[linear-gradient(to_bottom,rgba(7,6,6,0)_61%,rgba(7,6,6,1)_100%)]"></div>
      <h1 className="font-display px-[2rem] pt-[10rem] pb-[2rem] text-center text-[4rem] leading-[1] font-black text-white uppercase drop-shadow-[0px_0px_34px_rgba(7,6,6,1)] lg:px-0 lg:pt-0 lg:text-[9.5rem]">
        {heroData.heading_line_1} <br /> {heroData.heading_line_2}
      </h1>
      <div className="relative flex flex-col">
        <p
          ref={wrapParty}
          className="absolute w-[30ch] text-center font-sans text-[15px] leading-[1.2] font-normal text-white uppercase drop-shadow-[0px_0px_24px_rgba(7,6,6,1)] lg:text-[1.8rem]"
        >
          {heroData.scribbledOutText}
        </p>
        <HeroLine
          ref={line}
          className="absolute -top-[3rem] left-0 w-[100%] lg:-top-[2rem]"
        />
        <p
          ref={finalText}
          className="w-[30ch] text-center font-sans text-[15px] leading-[1.2] font-normal text-white uppercase drop-shadow-[0px_0px_24px_rgba(7,6,6,1)] lg:text-[1.8rem]"
        >
          {heroData.swappedInText}
        </p>
      </div>
      <p
        ref={merryTime}
        className="font-handwriting rotate-12 pl-[45%] text-[15px] text-white drop-shadow-[0px_0px_24px_rgba(7,6,6,1)] lg:text-[1.8rem]"
      >
        and have a merry time doing it!
      </p>
      <div
        ref={scrollCTA}
        className="absolute -bottom-[4rem] flex origin-center scale-75 items-center justify-center lg:scale-100"
      >
        <img
          src="/scroll-cta.png"
          alt="Scroll Now!"
          className="absolute"
          ref={scrollCTAText}
        />
        <LightBall className="origin-center scale-150" />
      </div>
    </section>
  );
}
