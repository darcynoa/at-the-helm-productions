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

  useEffect(() => {
    function snapshot(label = "") {
      const hero =
        document.querySelector("section[ref='hero']") ||
        document.querySelector("section"); // fallback
      const jsBg = document.querySelector(".marker-2"); // JustSpaceyTitle background wrapper
      const whats =
        document.querySelector(".marker-3") ||
        document.querySelector("#about-us"); // your WhatsAtTheHelm container selector
      console.log(`\n---- SNAPSHOT ${label} ----`);
      console.log("window.scrollY", window.scrollY);
      console.log("document.body.offsetHeight", document.body.offsetHeight);
      [
        { n: "hero", el: hero },
        { n: "jsBg", el: jsBg },
        { n: "whats", el: whats },
      ].forEach((o) => {
        if (!o.el) return console.log(o.n, "MISSING");
        const r = o.el.getBoundingClientRect();
        console.log(
          o.n,
          "offsetTop:",
          o.el.offsetTop,
          "bcr.top:",
          r.top,
          "absY:",
          r.top + window.scrollY,
          "height:",
          r.height,
        );
      });
      console.log("----------------------------\n");
    }

    // snapshots
    snapshot("initial");

    // after small delay
    setTimeout(() => snapshot("after 250ms"), 250);
    setTimeout(() => snapshot("after 800ms"), 800);

    // when page becomes visible again (coming back from other page)
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        snapshot("visibility:visible");
        // also refresh
        ScrollTrigger.refresh();
        setTimeout(() => snapshot("visibility:visible + 200ms"), 200);
      }
    });

    window.addEventListener("focus", () => {
      snapshot("window focus");
      ScrollTrigger.refresh();
      setTimeout(() => snapshot("window focus + 200ms"), 200);
    });

    return () => {
      window.removeEventListener("focus", () => {});
      document.removeEventListener("visibilitychange", () => {});
    };
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
