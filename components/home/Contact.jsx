import Link from "next/link";

export default function Contact() {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-[4rem]">
      <h1 className="font-display px-[1rem] text-center text-[6rem] font-black text-white uppercase mix-blend-exclusion lg:text-[9.5rem]">
        contact us
      </h1>
      <div className="flex flex-col items-center justify-center gap-[2rem]">
        <Link
          className="font-sans text-[15px] font-normal text-white uppercase mix-blend-exclusion transition-shadow duration-300 ease-in-out hover:drop-shadow-[4px_4px_14px_rgba(5,255,192,1)] lg:text-[1.8rem]"
          href="mailto:info@atthehelmproductions.com"
          target="_blank"
        >
          Email: info@atthehelmproductions.com
        </Link>
        <Link
          className="font-sans text-[15px] font-normal text-white uppercase mix-blend-exclusion transition-shadow duration-300 ease-in-out hover:drop-shadow-[4px_4px_14px_rgba(5,255,192,1)] lg:text-[1.8rem]"
          href="https://www.instagram.com/justspaceymovie"
          target="_blank"
        >
          Instagram: @justspaceymovie
        </Link>
      </div>
    </section>
  );
}
