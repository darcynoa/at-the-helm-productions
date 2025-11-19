"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Menu from "./Menu.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import MenuSVG from "./MenuSVG.jsx";
import { MorphSVGPlugin } from "gsap/all";

gsap.registerPlugin(SplitText, MorphSVGPlugin);

export default function Navigation() {
  const menuButton = useRef(null);
  const tl = useRef(null);
  const [menuOpen, setmenuOpen] = useState(false);

  const toggleMenu = () => {
    setmenuOpen(!menuOpen);
  };

  useGSAP(() => {
    const menuElement = document.getElementById("menu");
    const menuItems = menuElement.querySelectorAll(".menu-item");
    const open = document.getElementById("menuOpen");
    const close = document.getElementById("menuClose");
    gsap.set(menuElement, { yPercent: -100 });
    gsap.set(menuItems, { y: -20, opacity: 0 });

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
          y: 0,
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
      <nav className="fixed top-0 left-0 z-[9999] flex h-[5.5rem] w-full items-center justify-between bg-black px-[2rem] lg:px-[4rem]">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="At The Helm Company Logo"
            width={78}
            height={49}
          />
        </Link>
        <MenuSVG
          onClick={toggleMenu}
          ref={menuButton}
          className="cursor-pointer"
        />
      </nav>
      <Menu toggleMenu={toggleMenu} />
    </>
  );
}
