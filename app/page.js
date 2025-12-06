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
    const target = sessionStorage.getItem("scrollToSection");

    if (target) {
      // Double RAF ensures layout + ScrollTrigger + images settle
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const el = document.getElementById(target);
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top: y, behavior: "instant" });
          }

          ScrollTrigger.refresh();
          sessionStorage.removeItem("scrollToSection");
        });
      });

      return;
    }

    // NORMAL load (no anchor navigation)
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, []);
  /** DEBUG */
  useEffect(() => {
    console.log("whatthefuck");
    function dumpLayout(tag) {
      const helm = document.querySelector(".whatsatthehelm");
      const js = document.getElementById("justspaceytitle");
      const hero = document.getElementById("hero");

      if (!helm || !js || !hero) return;

      console.log(`---- SNAPSHOT: ${tag} ----`);
      console.log("scrollY:", window.scrollY);
      console.log(
        "hero top:",
        hero.getBoundingClientRect().top + window.scrollY,
      );
      console.log("js top:", js.getBoundingClientRect().top + window.scrollY);
      console.log(
        "helm top:",
        helm.getBoundingClientRect().top + window.scrollY,
      );
      console.log("--------------------------");
    }

    dumpLayout("initial");

    setTimeout(() => dumpLayout("after 200ms"), 200);

    window.addEventListener("focus", () => dumpLayout("window focus"));

    return () => window.removeEventListener("focus", dumpLayout);
  }, []);

  /** DEBUG END */
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
