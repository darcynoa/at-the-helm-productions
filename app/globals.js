// app/globals.js
"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins globally ONCE
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // NO normalizeScroll
  // NO ScrollTrigger.config()
}
