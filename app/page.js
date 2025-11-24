"use client";

import { useEffect } from "react";
import Hero from "@/components/home/Hero";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhatIsAtTheHelm from "@/components/home/WhatsAtTheHelm";
import JustSpaceyTitle from "@/components/home/JustSpaceyTitle";
import Contact from "@/components/Contact";
import WhosRunningTheShip from "@/components/home/WhosRunningTheShip";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Home() {
  useEffect(() => {
    function activate() {
      console.log("Page activated, power level at 9000");
    }

    window.addEventListener("pointermove", activate, { once: true });
    return () => window.removeEventListener("pointermove", activate);
  }, []);

  return (
    <>
      <Hero />
      <JustSpaceyTitle />
      <WhatIsAtTheHelm />
      <WhosRunningTheShip />
      <Contact />
    </>
  );
}
