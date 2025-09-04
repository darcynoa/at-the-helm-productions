"use client";

import Hero from "@/components/home/Hero";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Brief from "@/components/home/Brief";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Home() {
  return (
    <>
      <Hero />
      <Brief />
      <section className="h-screen"></section>
    </>
  );
}
