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
    window.scrollTo(0, 0);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 20);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);
  }, []);
  /** DEBUG */
  useEffect(() => {
    function getEl(selector) {
      return document.querySelector(selector);
    }

    function snapshot(label = "") {
      const hero = getEl("section"); // Your Hero is the first <section>
      const jsTitle = getEl(".marker-2"); // JustSpaceyTitle background wrapper
      const helm = getEl("#about-us"); // WhatsAtTheHelm section (adjust if needed)

      console.log(`\n---- SNAPSHOT: ${label} ----`);
      console.log("scrollY:", window.scrollY);
      console.log("body height:", document.body.offsetHeight);

      [
        { name: "HERO", el: hero },
        { name: "JUST_SPACEY_TITLE", el: jsTitle },
        { name: "WHATS_AT_THE_HELM", el: helm },
      ].forEach(({ name, el }) => {
        if (!el) return console.log(`${name}: MISSING`);
        const r = el.getBoundingClientRect();
        console.log(
          `${name}: offsetTop=${el.offsetTop}, top=${r.top}, absY=${r.top + window.scrollY}, height=${r.height}`,
        );
      });

      console.log("--------------------------\n");
    }

    // Initial snapshots
    snapshot("initial");
    setTimeout(() => snapshot("after 250ms"), 250);

    // When coming back from another page
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        snapshot("visibility:visible");
        setTimeout(() => snapshot("visibility:visible + 200ms"), 200);
      }
    });

    window.addEventListener("focus", () => {
      snapshot("window focus");
      setTimeout(() => snapshot("window focus + 200ms"), 200);
    });

    return () => {
      window.removeEventListener("focus", () => {});
      document.removeEventListener("visibilitychange", () => {});
    };
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
