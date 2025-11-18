"use client";

import Link from "next/link";

export default function CustomLink({ href, children, className, ...props }) {
  function handleEnter() {
    document.dispatchEvent(new CustomEvent("cursor:show"));
  }
  function handleLeave() {
    document.dispatchEvent(new CustomEvent("cursor:hide"));
  }

  // legacyBehavior ensures an <a> is used so pointer events are reliable
  return (
    <Link
      href={href}
      {...props}
      className={className}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
    >
      {children}
    </Link>
  );
}
