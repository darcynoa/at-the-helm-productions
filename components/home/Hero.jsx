export default function Hero() {
  return (
    <section className="relative w-full h-screen leading-[1] flex flex-col justify-center items-center bg-[linear-gradient(to_bottom,rgba(7,6,6,0)_61%,rgba(7,6,6,1)_100%),url(/home-hero.png)] bg-cover bg-top -mb-[2rem] -mt-[1%] -z-20">
      <h1 className="flex justify-center drop-shadow-[0px_0px_34px_rgba(7,6,6,1)] items-center font-display text-white font-black text-[5rem] lg:text-[9.5rem] uppercase text-center pb-[4rem] px-[2rem] lg:px-0 leading-[1]">
        When We&apos;re <br /> At The Helm
      </h1>
      <p className="font-sans font-normal uppercase w-[30ch] text-[15px] lg:text-[1.8rem] text-center drop-shadow-[0px_0px_24px_rgba(7,6,6,1)] leading-[1.2] text-white pb-[1rem]">
        You know it&apos;s going to be a safe &amp; collaborative space to make
        bold meaningful films
      </p>
      <p className="font-handwriting text-[15px] lg:text-[1.8rem] drop-shadow-[0px_0px_24px_rgba(7,6,6,1)] text-white pl-[40%] rotate-12">
        ~~and have a merry time doing it!
      </p>
    </section>
  );
}
