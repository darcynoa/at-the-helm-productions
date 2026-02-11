"use client";
// Libraries
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import Contact from "@/components/Contact";
import AuthenticLocations from "@/components/justspacey/AuthenticLocations";
import JustSpaceyCardStack from "@/components/justspacey/JustSpaceyCardStack";
import JustSpaceyHero from "@/components/justspacey/JustSpaceyHero";
import SneakPeek from "@/components/justspacey/SneakPeek";

export default function JustSpaceyClient({ contactData }) {
  // Ensure scroll position is at 0 and scrolltriggers adjust accordingly
  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      window.scrollTo(0, 250);
    }, 20);

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);
  }, []);
  return (
    <>
      <JustSpaceyHero />
      <JustSpaceyCardStack />
      <SneakPeek />
      <AuthenticLocations />
      <Contact contactData={contactData} />
    </>
  );
}
