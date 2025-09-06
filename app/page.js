"use client";

import Hero from "@/components/home/Hero";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Brief from "@/components/home/Brief";
import JustSpaceyTitle from "@/components/home/JustSpaceyTitle";
import JustSpaceyDescription from "@/components/home/JustSpaceyDescription";
import SneakPeek from "@/components/home/SneakPeek";
import Contact from "@/components/home/Contact";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Home() {
  return (
    <>
      <Hero />
      <Brief />
      <JustSpaceyTitle />
      <JustSpaceyDescription />
      <SneakPeek />
      <Contact />
    </>
  );
}
