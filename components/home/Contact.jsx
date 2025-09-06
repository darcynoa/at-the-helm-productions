import Link from "next/link";

export default function Contact() {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-[4rem]">
      <h1 className="font-display text-white font-black text-[6rem] px-[1rem] lg:text-[9.5rem] uppercase text-center mix-blend-exclusion">
        contact us
      </h1>
      <div className="flex flex-col justify-center items-center gap-[2rem]">
        <Link
          className="font-sans font-normal uppercase text-[15px] lg:text-[1.8rem] text-white mix-blend-exclusion hover:drop-shadow-[4px_4px_14px_rgba(5,255,192,1)] transition-shadow duration-300 ease-in-out"
          href="mailto:info@atthehelmproductions.com"
        >
          Email: info@atthehelmproductions.com
        </Link>
        <Link
          className="font-sans font-normal uppercase text-[15px] lg:text-[1.8rem] text-white mix-blend-exclusion hover:drop-shadow-[4px_4px_14px_rgba(5,255,192,1)] transition-shadow duration-300 ease-in-out"
          href="https://www.instagram.com/justspaceymovie"
        >
          Instagram: @justspaceymovie
        </Link>
      </div>
    </section>
  );
}
