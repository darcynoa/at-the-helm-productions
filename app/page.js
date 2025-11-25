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
      console.log("Page activated, and..... action!");
    }

    window.addEventListener("pointermove", activate, { once: true });
    return () => window.removeEventListener("pointermove", activate);
  }, []);

  useEffect(() => {
    const targetSection = sessionStorage.getItem("scrollToSection");
    const headerOffset = 60;
    const scrollTriggerOffset = targetSection === "contact" ? 6000 : 0;

    console.log("Target section: ", targetSection);

    if (targetSection) {
      // DO NOT scrollTo(0,0)
      // DO NOT clear ScrollMemory yet

      // Let layout and ScrollTrigger finish initialization
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const targetElement = document.getElementById(targetSection);
          if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top;
            console.log(elementPosition);
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;
            console.log(offsetPosition);
            window.scrollTo({
              top: offsetPosition,
              behavior: "instant",
            });
          }

          // Cleanup the flag
          sessionStorage.removeItem("scrollToSection");
        });
      });

      return;
    }

    // Default cold-load behavior
    window.scrollTo(0, 0);
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
