import Contact from "@/components/Contact";
import AuthenticLocations from "@/components/justspacey/AuthenticLocations";
import JustSpaceyCardStack from "@/components/justspacey/JustSpaceyCardStack";
import JustSpaceyHero from "@/components/justspacey/JustSpaceyHero";
import SneakPeek from "@/components/justspacey/SneakPeek";

export default function JustSpacey() {
  return (
    <div>
      <JustSpaceyHero />
      <JustSpaceyCardStack />
      <SneakPeek />
      <AuthenticLocations />
      <Contact />
    </div>
  );
}
