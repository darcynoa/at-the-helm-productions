import Contact from "@/components/home/Contact";
import AuthenticLocations from "@/components/justspacey/AuthenticLocations";
import JustSpaceyCardStack from "@/components/justspacey/JustSpaceyCardStack";
import JustSpaceyIntro from "@/components/justspacey/JustSpaceyIntro";
import SneakPeek from "@/components/justspacey/SneakPeek";

export default function JustSpacey() {
  return (
    <div>
      <JustSpaceyIntro />
      <JustSpaceyCardStack />
      <SneakPeek />
      <AuthenticLocations />
      <Contact />
    </div>
  );
}
