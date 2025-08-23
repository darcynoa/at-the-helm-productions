"use client";

import ScrollCta from "@/components/home/ScrollCta";

export default function Home() {
  return (
    <>
      <section className="relative h-screen flex flex-col justify-between items-center bg-[linear-gradient(to_bottom,rgba(7,6,6,0),rgba(7,6,6,1)),url(/home-hero.jpg)] bg-cover bg-top -mb-[2rem] -mt-[1%]">
        <h1 className="pt-[10rem] flex justify-center items-center font-sans text-white font-black text-[5rem] lg:text-[9.5rem] uppercase text-center px-[2rem] lg:px-0 leading-[1.2]">
          we start where others stall
        </h1>
        <ScrollCta />
      </section>
      <section className="w-screen h-screen flex flex-col justify-center items-center bg-black text-white font-sans text-[2rem] lg:text-[3rem] font-light text-center px-[2rem] lg:px-0"></section>
    </>
  );
}
