"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";

const menuItems = [
  {
    title: "home",
    href: "/",
    color: "white",
  },
  {
    title: "about us",
    href: "/#about-us",
    color: "blue",
  },
  {
    title: "just spacey",
    href: "/justspacey",
    color: "cyan",
  },
  {
    title: "contact",
    href: "/#contact",
    color: "pink",
  },
];

export default function Menu({ toggleMenu, tl }) {
  const overlays = useRef([]);
  const headings = useRef([]);

  overlays.current = [];
  headings.current = [];
  const openOverlay = (overlay) => {
    gsap.set(overlay, { transformOrigin: "bottom center" });
    gsap.to(overlay, {
      scaleY: 1,
      opacity: 1,
      duration: 0.28,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const closeOverlay = (overlay) => {
    gsap.to(overlay, {
      scaleY: 0,
      opacity: 0,
      duration: 0.22,
      ease: "power2.in",
      overwrite: "auto",
    });
  };

  return (
    <div
      id="menu"
      className="fixed top-0 left-0 z-50 flex h-dvh w-screen bg-black pt-[8rem] text-white lg:h-screen lg:px-[3.5rem]"
    >
      <div className="flex w-full flex-col items-center justify-center gap-4 lg:items-start lg:justify-start lg:gap-0">
        {menuItems.map((item, index) => {
          return (
            <Link
              key={index} // Add a unique key for each item
              className="relative w-full"
              href={item.href}
              onMouseEnter={() =>
                openOverlay(overlays.current[index], headings.current[index])
              }
              onMouseLeave={() =>
                closeOverlay(overlays.current[index], headings.current[index])
              }
              onTouchStart={() =>
                openOverlay(overlays.current[index], headings.current[index])
              }
              onTouchEnd={() =>
                closeOverlay(overlays.current[index], headings.current[index])
              }
              onClick={() => {
                e.preventDefault();

                toggleMenu();
                tl.current.timeScale(1).reverse();

                // navigate after animation ends
                tl.current.eventCallback("onReverseComplete", () => {
                  router.push(item.href);
                });
              }}
            >
              <span
                ref={(el) => (overlays.current[index] = el)}
                className="-px-[2rem absolute inset-0 opacity-0 will-change-transform"
                style={{
                  transform: "scaleY(0)",
                  transformOrigin: "bottom center",
                  backgroundColor: item.color,
                }}
              ></span>
              <h1
                ref={(el) => (headings.current[index] = el)}
                className="menu-item font-display px-[2rem] text-center text-[4rem] leading-[1] font-black text-white uppercase mix-blend-difference lg:text-left lg:text-[7rem] 2xl:text-[9.5rem]"
              >
                {item.title}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
