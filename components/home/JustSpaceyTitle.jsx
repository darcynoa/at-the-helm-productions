import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomLink from "@/components/CustomLink";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function JustSpaceyTitle() {
  const carousel = useRef(null);
  const jsText = useRef(null);
  const jsHeader = useRef(null);
  const jsBackground = useRef(null);
  const sectionRef = useRef(null);
  const viewButton = useRef(null);
  const [isPressed, setIsPressed] = useState(false);

  const handleTouchStart = (e) => {
    setIsPressed(true);
  };

  const handleTouchEnd = (e) => {
    setIsPressed(false);
  };

  const handleTouchCancel = () => setIsPressed(false);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // pin the whole section while the next scroll animation runs
    mm.add("(max-width: 767px)", () => {
      const pin = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center+=27.5% top",
        // match this to the pinned animation distance (e.g. "+=600px") or tune as needed
        end: "+=2000px",
        pin: true,
        pinSpacing: false,
        pinType: "fixed",
      });

      gsap.to(carousel.current, {
        xPercent: -600,
        ease: "linear",
        scrollTrigger: {
          trigger: carousel.current,
          start: "bottom bottom",
          end: "+=1500px",
          scrub: 1.3,
        },
      });

      return () => pin.kill();
    });

    mm.add("(min-width: 768px)", () => {
      gsap.to(carousel.current, {
        xPercent: -200,
        ease: "linear",
        scrollTrigger: {
          trigger: carousel.current,
          start: "bottom bottom",
          end: "+=1500px",
          scrub: 1.3,
        },
      });
    });

    mm.add("(min-width: 1024px)", () => {
      gsap.from([jsText.current, jsHeader.current], {
        y: "-68vh",
        ease: "power3.in",
        scrollTrigger: {
          trigger: jsBackground.current,
          start: "top center-=10vh",
          end: "center center",
          scrub: 1,
        },
      });
    });
  });
  return (
    <section
      ref={sectionRef}
      className="marker-1 flex flex-col items-center justify-center overflow-hidden lg:mb-0"
    >
      <div ref={carousel} className="relative flex gap-[1rem] px-[4rem]">
        {Array.from({ length: 6 }).map((_, i) => (
          <Image
            key={i}
            src={`/carousel/${i + 1}.png`}
            alt={`Image ${i + 1}`}
            width={600}
            height={200}
          />
        ))}
      </div>
      {/* background container - position:relative so overlay can center on it */}
      <div
        ref={jsBackground}
        className="marker-2 relative h-screen w-full overflow-hidden"
      >
        {/* background image fills the container */}
        <CustomLink href={"/justspacey"} className="block h-full w-full">
          <Image
            src="/justspacey-hero.png"
            alt="Just Spacey Hero Background"
            fill
            className="hidden object-cover lg:block"
          />
          <div className="h-screen w-full bg-[linear-gradient(to_bottom,rgba(7,6,6,1)_-1%,rgba(7,6,6,0.5)_10%,rgba(7,6,6,0.1)_20%,rgba(7,6,6,0)_22%,rgba(7,6,6,0)_70%,rgba(7,6,6,1)_90%),url(/just-spacey-title-mobile.JPG)] bg-cover bg-[15%]"></div>
        </CustomLink>

        {/* overlay centered on image; pointer-events-none allows clicks to pass to the link,
            but make the header itself pointer-events-auto so it's clickable */}
        <div className="pointer-events-none absolute inset-0 top-[20%] flex flex-col items-center justify-center text-white">
          <p
            ref={jsText}
            className="font-sans text-[15px] uppercase mix-blend-exclusion lg:text-[1.5rem]"
          >
            Everyone had fun on this one
          </p>
          <h1
            ref={jsHeader}
            className="font-spacey text-center text-[5rem] font-black tracking-[0.04em] uppercase mix-blend-difference lg:text-[9.5rem]"
          >
            Just spacey
          </h1>
          <div
            className={
              "font-display absolute bottom-[38%] text-[1rem] text-black transition-all duration-300 lg:hidden " +
              (isPressed ? "tracking-[0.16em]" : "tracking-[0.04em]")
            }
          >
            View
          </div>
          {/* text sits above and uses normal blending */}
          <Link
            href="/justspacey"
            className={
              "font-display pointer-events-auto relative z-[10] flex h-[3rem] w-[6rem] rounded-[5rem] bg-white text-[1rem] uppercase mix-blend-exclusion transition-all lg:hidden " +
              (isPressed ? "scale-[1.15]" : "scale-[1]")
            }
            ref={viewButton}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
          ></Link>
        </div>
      </div>
    </section>
  );
}
