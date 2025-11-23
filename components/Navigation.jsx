"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Menu from "./Menu.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import MenuSVG from "./MenuSVG.jsx";
import { MorphSVGPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, MorphSVGPlugin);

export default function Navigation() {
  useEffect(() => {
    const handle = () => ScrollTrigger.refresh();
    window.addEventListener("load", handle);

    return () => window.removeEventListener("load", handle);
  }, []);

  const menuButton = useRef(null);
  const tl = useRef(null);
  const [menuOpen, setmenuOpen] = useState(false);

  const toggleMenu = () => {
    setmenuOpen(!menuOpen);
  };

  useGSAP(() => {
    const menuElement = document.getElementById("menu");
    const menuItems = gsap.utils.toArray("#menu a");
    // console.log(menuItems);
    const open = document.getElementById("menuOpen");
    const close = document.getElementById("menuClose");
    gsap.set(menuElement, { yPercent: -100 });
    gsap.set(menuItems, { opacity: 0 });

    tl.current = gsap
      .timeline({
        paused: true,
      })
      .to(menuElement, {
        yPercent: 0,
        duration: 1,
        ease: "power2.out",
      })
      .to(open, { duration: 1, morphSVG: close, ease: "power2.inOut" }, "<")
      .to(
        menuItems,
        {
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=1",
      );
  });

  useEffect(() => {
    if (menuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 z-[9998] flex h-[5.5rem] w-full items-center justify-between bg-black px-[2rem] lg:px-[4rem]">
        <Link href="/">
          <div
            id="navBarWrapper"
            className="relative flex h-[49px] w-[78px] items-center justify-center"
          >
            <img
              id="navLogo"
              src="/logo.svg"
              alt="At The Helm Company Logo"
              className="h-auto w-full opacity-0"
              width={78}
              height={49}
            />
          </div>
        </Link>
        <MenuSVG
          id="menuSvg"
          onClick={toggleMenu}
          ref={menuButton}
          className="cursor-pointer"
        />
      </nav>
      <Menu toggleMenu={toggleMenu} />
    </>
  );
}
