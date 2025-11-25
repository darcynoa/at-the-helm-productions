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

  const handleTouchStart = () => {
    setIsPressed(true);
  };

  const handleTouchEnd = () => {
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
        end: "+=1000px",
        pin: true,
        pinSpacing: false,
        pinType: "fixed",
      });

      gsap.to(carousel.current, {
        x: -1200,
        ease: "linear",
        scrollTrigger: {
          trigger: carousel.current,
          start: "bottom+=10px bottom",
          end: "+=800px",
          scrub: 1.3,
        },
      });

      return () => {
        pin.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
        gsap.globalTimeline.clear();
      };
    });

    mm.add("(min-width: 768px)", () => {
      gsap.to(carousel.current, {
        x: -1600,
        ease: "linear",
        scrollTrigger: {
          trigger: carousel.current,
          start: "bottom+=50px bottom",
          end: "+=1000px",
          scrub: 1.3,
        },
      });
    });

    mm.add("(min-width: 1024px)", () => {
      gsap.from([jsText.current, jsHeader.current], {
        y: -700,
        ease: "expo.in",
        scrollTrigger: {
          trigger: jsBackground.current,
          start: "top center-=100px",
          end: "center center+=100px",
          scrub: 1,
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        gsap.globalTimeline.clear();
      };
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
        <CustomLink
          href={"/justspacey"}
          className="pointer-events-none block h-full w-full md:pointer-events-auto"
        >
          <Image
            src="/justspacey-hero.png"
            alt="Just Spacey Hero Background"
            fill
            className="pointer-events-auto hidden object-cover lg:block"
          />
          <div className="block h-screen w-full object-cover lg:hidden">
            <Image
              className="-z-10 w-full origin-center scale-120 object-cover object-[0%]"
              src="/just-spacey-title-mobile.JPG"
              alt="Rotated light from set"
              fill
            />
            <div className="z-10 h-screen w-full bg-[linear-gradient(to_bottom,rgba(7,6,6,1)_-1%,rgba(7,6,6,0.5)_10%,rgba(7,6,6,0)_20%,rgba(7,6,6,0)_70%,rgba(7,6,6,0.25)_75%,rgba(7,6,6,0.65)_82%,rgba(7,6,6,1)_92%)]"></div>
          </div>
        </CustomLink>

        {/* overlay centered on image; pointer-events-none allows clicks to pass to the link,
            but make the header itself pointer-events-auto so it's clickable */}
        <div className="pointer-events-none absolute inset-0 top-[01%] flex flex-col items-center justify-center text-white lg:top-[20%]">
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
              "font-display absolute bottom-[calc(30%_+_11px)] text-[1rem] text-black transition-all duration-300 lg:hidden " +
              (isPressed ? "tracking-[0.16em]" : "tracking-[0.04em]")
            }
          >
            View
          </div>
          {/* text sits above and uses normal blending */}
          <Link
            href="/justspacey"
            className={
              "font-display pointer-events-auto absolute bottom-[30%] isolate z-[10] flex h-[3rem] w-[6rem] items-center justify-center rounded-[5rem] bg-white text-[1rem] uppercase mix-blend-difference transition-all lg:hidden " +
              (isPressed ? "scale-[1.15]" : "scale-[1]")
            }
            ref={viewButton}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
          >
            {/* <span className="font-display font-black text-white uppercase mix-blend-normal">
              view
            </span> */}
          </Link>
        </div>
      </div>
    </section>
  );
}
