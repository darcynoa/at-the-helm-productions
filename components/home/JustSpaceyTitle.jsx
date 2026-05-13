import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomLink from "@/components/CustomLink";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { urlFor } from "../utils/SanityImageUrl";

gsap.registerPlugin(ScrollTrigger);

export default function JustSpaceyTitle({ justSpaceyData, carouselData }) {
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

  // Waits for all images to load and then do Scrolltrigger.refresh()
  // Ensure images are loaded before ScrollTrigger measures
  useEffect(() => {
    const el = carousel.current;
    if (!el) return;

    const imgs = Array.from(el.querySelectorAll("img"));
    if (imgs.length === 0) {
      ScrollTrigger.refresh();
      return;
    }

    const wait = Promise.allSettled(
      imgs.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((res) =>
              img.addEventListener("load", res, { once: true }),
            ),
      ),
    );

    let refreshed = false;

    wait.then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!refreshed) {
            refreshed = true;
            ScrollTrigger.refresh();
          }
        });
      });
    });

    const timeout = setTimeout(() => {
      if (!refreshed) {
        refreshed = true;
        ScrollTrigger.refresh();
      }
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // pin the whole section while the next scroll animation runs
    mm.add("(max-width: 767px)", () => {
      // ---------- DEBUG + SPACER + RO ----------
      const el = sectionRef.current;
      let spacer = null;
      let ro = null;

      function createSpacer() {
        spacer = document.createElement("div");
        spacer.setAttribute("aria-hidden", "true");
        spacer.style.width = "100%";
        spacer.style.display = "block";
        spacer.style.pointerEvents = "none";
        spacer.style.height = `${el.offsetHeight}px`;
        el.parentNode.insertBefore(spacer, el);

        // create ResizeObserver to keep spacer in sync (activate only when spacer exists)
        if (!ro) {
          ro = new ResizeObserver(() => {
            if (spacer && el) {
              spacer.style.height = `${el.offsetHeight}px`;
            }
          });
          try {
            ro.observe(el);
          } catch (err) {
            console.warn("[JUSTSPACEY PIN] ResizeObserver failed:", err);
          }
        }
      }

      function updateSpacerHeight() {
        if (!spacer || !el) {
          return;
        }
        spacer.style.height = `${el.offsetHeight}px`;
      }

      function removeSpacer() {
        if (!spacer) {
          return;
        }
        spacer.remove();
        spacer = null;
        if (ro) {
          ro.disconnect();
          ro = null;
        }
      }

      // Create ScrollTrigger pin but keep pinSpacing: false
      const pin = ScrollTrigger.create({
        trigger: el,
        start: "center+=27.5% top",
        end: "+=1000px",
        pin: el,
        pinSpacing: false,
        pinType: "fixed",

        onEnter: () => {
          createSpacer();
        },
        onLeave: () => {
          removeSpacer();
        },
        onEnterBack: () => {
          createSpacer();
        },
        onLeaveBack: removeSpacer,

        onRefreshInit: removeSpacer,

        onRefresh: updateSpacerHeight,
      });

      // ensure layout is correct if pin is active immediately after creation
      requestAnimationFrame(() => {
        if (pin.isActive) {
          createSpacer();
        }
      });

      // Also log when pin is killed (for debugging)
      const originalKill = pin.kill.bind(pin);
      pin.kill = function () {
        removeSpacer();
        originalKill();
      };

      // existing carousel scroll animation
      gsap.to(carousel.current, {
        x: -1200,
        ease: "none",
        scrollTrigger: {
          trigger: carousel.current,
          start: "bottom+=10px bottom",
          end: "+=800px",
          scrub: 0.5,
          fastScrollEnd: true,
        },
      });

      return () => {
        pin.kill();
        removeSpacer();
        ScrollTrigger.getAll().forEach((st) => st.kill());
        gsap.globalTimeline.clear();
      };
    });

    mm.add("(min-width: 768px)", () => {
      gsap.to(carousel.current, {
        x: -1600,
        ease: "none",
        scrollTrigger: {
          trigger: carousel.current,
          start: "bottom+=50px bottom",
          end: "+=1000px",
          scrub: true,
          fastScrollEnd: true,
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
      id="justspaceytitle"
      className="flex flex-col items-center justify-center overflow-hidden lg:mb-0"
    >
      <div
        ref={carousel}
        className="relative flex h-[200px] gap-[1rem] px-[4rem] will-change-transform lg:h-[480px]"
        style={{ transform: "translateZ(0)" }} // Force GPU acceleration
      >
        {Object.values(carouselData).map((item, index) => (
          <Image
            key={index}
            src={urlFor(item).url()}
            alt={`Image ${index + 1}`}
            width={960}
            height={480}
            className="h-auto w-auto object-cover"
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
            src={urlFor(justSpaceyData.backgroundImageForDesktop).url()}
            alt={justSpaceyData.backgroundImageAltText}
            fill
            className="pointer-events-auto hidden object-cover lg:block"
          />
          <div className="block h-screen w-full object-cover lg:hidden">
            <Image
              className="-z-10 w-full origin-center scale-120 object-cover object-[0%]"
              src={urlFor(justSpaceyData.backgroundImageForMobile).url()}
              alt={justSpaceyData.backgroundImageAltText}
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
            {justSpaceyData.subheading}
          </p>
          <h1
            ref={jsHeader}
            className="font-spacey text-center text-[5rem] font-black tracking-[0.04em] uppercase mix-blend-difference lg:text-[9.5rem]"
          >
            {justSpaceyData.heading}
          </h1>
          <div
            className={
              "font-display absolute bottom-[calc(30%_+_15px)] z-[10] text-[1.55rem] text-white transition-all duration-300 lg:hidden " +
              (isPressed ? "tracking-[0.2em]" : "tracking-[0.04em]")
            }
          >
            View
          </div>
          {/* text sits above and uses normal blending */}
          <Link
            href="/justspacey"
            className={
              "font-display pointer-events-auto absolute bottom-[30%] z-[9] flex h-[4rem] w-[8rem] items-center justify-center rounded-[5rem] bg-white uppercase mix-blend-difference drop-shadow-[0px_0px_16px_rgba(140,170,0,1)] transition-all lg:hidden " +
              (isPressed ? "scale-[1.15]" : "scale-[1]")
            }
            style={{ transform: "translate3d(0, 0, 0)" }}
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
