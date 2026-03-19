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

export default function JustSpaceyClient({ justSpaceyData, contactData }) {
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
      <JustSpaceyHero data={justSpaceyData.hero} />
      <JustSpaceyCardStack data={justSpaceyData.whatIsJustSpacey} />
      <SneakPeek data={justSpaceyData.sneakPeek} />
      <AuthenticLocations data={justSpaceyData.authenticLocations} />
      <Contact contactData={contactData} />
    </>
  );
}
