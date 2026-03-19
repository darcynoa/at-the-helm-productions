"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer({ footerData }) {
  const pathname = usePathname();
  const isJustSpacey = pathname === "/justspacey";
  const isStudio =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/studio");

  return (
    !isStudio && (
      <footer
        id="footer"
        className="flex items-center justify-between px-[1rem] py-[1rem] font-sans text-[0.5rem] text-white uppercase lg:px-[5rem] lg:text-[1rem]"
      >
        <Link
          href="/"
          className={`${isJustSpacey ? "opacity-100" : "opacity-0"} font-handwriting text-cyan text-[1.5rem] transition-shadow duration-300 ease-in-out hover:drop-shadow-[4px_4px_14px_rgba(5,255,192,1)] lg:text-[3.5rem]`}
        >
          {footerData.backToHomeText}
        </Link>
        {footerData.copyrightText}
      </footer>
    )
  );
}
