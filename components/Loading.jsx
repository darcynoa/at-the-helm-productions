"use client";

import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

import LoadingSVGGroup from "./LoadingSVGGroup";

export default function Loading() {
  const loadingBar = useRef(null);
  const loadingValue = useRef(null);
  const loadingBarContainer = useRef(null);
  const loaderLogoRef = useRef(null);
  const loader = useRef(null);

  // The Querying of the SVG parts
  const fullWheel = "#fullWheel";
  const threeQuarterWheel = "#threeQuarterWheel";
  const atTextWave = "#atTextWave";
  const bigWave = "#bigWave";
  const theHelmText = "#theHelmText";
  const productionsWaveMask = "#productionWaveMask";

  const [shouldRenderLoader, setShouldRenderLoader] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      // Set render loader to false
      setShouldRenderLoader(false);

      // Make the nav logo visible immediately
      const navLogo = document.getElementById("navLogo");
      if (navLogo) navLogo.style.opacity = 1;

      const menu = document.getElementById("menuSvg");
      if (menu) menu.style.opacity = 1;

      return; // 🚀 Skip building timeline entirely
    }

    sessionStorage.setItem("hasVisited", "true");
    setShouldRenderLoader(true);
  }, []);

  useGSAP(() => {
    // if (!shouldRenderLoader) return;

    if (sessionStorage.getItem("hasVisited")) return;
    gsap.set(threeQuarterWheel, { opacity: 0, x: 209 });
    gsap.set("#menuSvg", { autoAlpha: 0 });

    const tl = gsap
      .timeline()
      .to(fullWheel, {
        rotate: 360,
        transformOrigin: "50% 50%",
        duration: 1,
        ease: "sine.out",
      })
      .to(threeQuarterWheel, {
        opacity: 1,
        ease: "none",
        duration: 0.001,
      })
      .to(fullWheel, {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
      })
      .to(threeQuarterWheel, {
        x: 0,
        duration: 1,
        ease: "sine.inOut",
      })
      .to(
        atTextWave,
        {
          y: -140,
          x: 650,
          duration: 1.4,
          ease: "linear",
        },
        "<0.5",
      )
      .to(
        bigWave,
        {
          x: 10,
          y: 0,
          duration: 1.4,
          ease: "linear",
        },
        "-=0.1",
      )
      .to(theHelmText, {
        opacity: 1,
        ease: "none",
        duration: 0.001,
      })
      .to(bigWave, {
        y: 200,
        duration: 1.4,
        ease: "power4.in",
      })
      .to(productionsWaveMask, {
        y: 70,
        duration: 1.4,
        ease: "power4.out",
        onComplete: () => {
          const loaderLogo = loaderLogoRef.current;
          const navLogo = document.getElementById("navLogo");
          const flipState = Flip.getState(loaderLogo);
          // Move loader logo into nav logo's container
          navLogo.parentNode.appendChild(loaderLogo);
          Flip.from(flipState, {
            duration: 1.2,
            ease: "power3.inOut",
            absolute: true, // keeps transforms consistent
            onComplete() {
              gsap.to(navLogo, {
                opacity: 1,
                duration: 0.4,
                pointerEvents: "auto",
              });
              gsap.to(loaderLogo, { opacity: 0, duration: 0.4 });
              gsap.to("#menuSvg", { autoAlpha: 1, duration: 0.4 });
            },
          });
        },
      })
      .to([loadingBar.current, loadingValue.current], {
        opacity: 0,
        duration: 0.5,
        ease: "sine.in",
      })
      .to(
        loader.current,
        {
          yPercent: -100,
          duration: 1,
          ease: "power2.in",
        },
        "+=1.5",
      );

    gsap.from(loadingBar.current, {
      scaleX: 0,
      duration: tl.duration() - 1,
      ease: "expo.inOut",
      onUpdate: () => {
        const scaleX = gsap.getProperty(loadingBar.current, "scaleX");
        const percentage = Math.round(scaleX * 100);
        loadingValue.current.innerText = percentage;
      },
    });

    // tl.play();
  });

  return (
    <div
      ref={loader}
      style={{ display: shouldRenderLoader ? "flex" : "none" }}
      className="fixed top-0 left-0 z-[9997] flex h-screen w-screen flex-col items-center justify-end gap-[8rem] bg-black pb-[4rem]"
    >
      <LoadingSVGGroup
        ref={loaderLogoRef}
        className="absolute top-1/2 left-1/2 h-auto max-w-[946px] -translate-x-[45%] -translate-y-1/2 lg:-translate-x-1/2"
      />

      <div className="flex w-screen flex-col items-center gap-[1.5rem]">
        <div
          ref={loadingBarContainer}
          className="relative h-[2px] w-3/4 lg:w-1/2"
        >
          <hr
            ref={loadingBar}
            className="bg-purple absolute h-full w-full origin-top-left"
          />
        </div>
        <p
          ref={loadingValue}
          className="text-purple font-sans text-[1.25rem] font-black"
        >
          0
        </p>
      </div>
    </div>
  );
}
