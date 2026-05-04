"use client";
// Components
import Contact from "@/components/Contact";
import AuthenticLocations from "@/components/justspacey/AuthenticLocations";
import JustSpaceyCardStack from "@/components/justspacey/JustSpaceyCardStack";
import JustSpaceyHero from "@/components/justspacey/JustSpaceyHero";
import SneakPeek from "@/components/justspacey/SneakPeek";

export default function JustSpaceyClient({ justSpaceyData, contactData }) {
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
