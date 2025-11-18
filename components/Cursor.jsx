"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    // center the element around the pointer and hide by default
    gsap.set(el, { xPercent: -50, yPercent: -50, autoAlpha: 0, scale: 0 });

    // smooth setters for position
    const setX = gsap.quickTo(el, "x", { duration: 0.18, ease: "power3.out" });
    const setY = gsap.quickTo(el, "y", { duration: 0.18, ease: "power3.out" });

    function onPointerMove(e) {
      setX(e.clientX);
      setY(e.clientY);
    }

    function show() {
      gsap.to(el, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.16,
        ease: "power1.out",
      });
    }
    function hide() {
      gsap.to(el, {
        autoAlpha: 0,
        scale: 0,
        duration: 0.16,
        ease: "power1.out",
      });
    }

    // hide cursor on any click/press
    function onPointerDown() {
      hide();
    }

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("cursor:show", show);
    document.addEventListener("cursor:hide", hide);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("cursor:show", show);
      document.removeEventListener("cursor:hide", hide);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="font-display pointer-events-none fixed z-[100] flex h-[3rem] w-[6rem] items-center justify-center rounded-[5rem] bg-white text-[1rem] text-black uppercase mix-blend-difference"
    >
      view
    </div>
  );
}
