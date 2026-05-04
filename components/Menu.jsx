"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useRouter, usePathname } from "next/navigation";

export default function Menu({ menuItems, toggleMenu, tl }) {
  const overlays = useRef([]);
  const headings = useRef([]);
  overlays.current = [];
  headings.current = [];

  const router = useRouter();
  const pathname = usePathname();

  const handleOnClick = (e, item) => {
    const href = item.slug;
    const isAnchor = href.startsWith("/#");
    const targetId = isAnchor ? href.replace("/#", "") : null;

    const isHome = pathname === "/";

    // CASE 1 — already on home AND it's an anchor (#about-us or #contact)
    if (isHome && isAnchor) {
      // Let the browser do normal anchor scroll
      toggleMenu();
      tl.current.timeScale(1).reverse();

      // After menu closes, scroll to the element
      tl.current.eventCallback("onReverseComplete", () => {
        const el = document.getElementById(targetId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      });

      return; // IMPORTANT
    }

    // CASE 2 — coming FROM another page (e.g., Just Spacey)
    if (isAnchor) {
      e.preventDefault();

      // set flag so home page scrolls properly
      sessionStorage.setItem("scrollToSection", targetId);

      toggleMenu();
      tl.current.timeScale(1).reverse();

      tl.current.eventCallback("onReverseComplete", () => {
        router.push("/");
      });

      return;
    }

    // CASE 3 — normal internal link
    e.preventDefault();
    toggleMenu();
    tl.current.timeScale(1).reverse();
    tl.current.eventCallback("onReverseComplete", () => {
      router.push(href);
    });
  };

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
              href={item.slug}
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
              onClick={(e) => {
                handleOnClick(e, item);
              }}
            >
              <span
                ref={(el) => (overlays.current[index] = el)}
                className="-px-[2rem pointer-events-none absolute inset-0 opacity-0 will-change-transform"
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
                {item.label}
              </h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
