import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ScrollCta() {
  const cta = useRef(null);
  const light = useRef(null);

  useGSAP(() => {
    gsap.to(cta.current, {
      rotate: -360,
      duration: 20,
      ease: "none",
      repeat: -1,
      transformOrigin: "50% 50%",
    });
    const tl = gsap.timeline({ repeat: -1, ease: "power1.inOut" });
    tl.to(light.current, {
      backgroundImage:
        "radial-gradient(circle, rgba(128, 99, 242, 1) 0%,rgba(128, 99, 242, 0) 100%)",
      delay: 2.5,
    })
      .to(light.current, {
        backgroundImage:
          "radial-gradient(circle, rgba(255, 142, 156, 1) 0%,rgba(213, 137, 147, 0) 100%)",
        delay: 1.5,
      })
      .to(light.current, {
        backgroundImage:
          "radial-gradient(circle, rgba(5, 255, 192, 1) 0%, rgba(5, 255, 192, 0) 100%)",
        delay: 3.5,
      });
  });
  return (
    <div ref={cta} class="absolute bottom-[-3rem] lg:bottom-[-6rem]">
      <Image
        className=" z-10"
        src="/scroll-cta.png"
        alt="Scroll Image that calls the user to scroll"
        width={146}
        height={152}
      />
      <div
        ref={light}
        className="rounded-full w-[131px] aspect-square bg-radial from-cyan to-transparent fixed top-[0.5rem] left-[0.5rem] blur-lg"
      ></div>
    </div>
  );
}
