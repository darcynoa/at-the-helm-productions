// app/globals.js
"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

// Register GSAP plugins globally
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Normalize scroll ONCE globally
  ScrollTrigger.normalizeScroll(true);

  // Optional but recommended:
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  });
}
