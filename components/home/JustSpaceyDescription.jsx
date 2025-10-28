import Image from "next/image";

export default function JustSpaceyDescription() {
  return (
    <section className="flex w-full flex-col text-white lg:gap-0">
      {/* First row: 3 columns */}
      <div className="grid grid-cols-1 place-items-center gap-[4rem] md:grid-cols-2 lg:gap-4">
        <Image
          src="/just-spacey-poster.png"
          alt="The official poster for Just Spacey"
          width={406}
          height={540}
        />
        <p className="w-[75%] self-center pb-[4rem] font-sans text-[1.8rem] font-normal text-white uppercase">
          When an orderly mortician is forced to bring his recently suspended
          10-year-old daughter with raging ADHD to the morgue, they must work
          together to ensure that the resulting chaos does not see the light of
          day.
        </p>
      </div>
      <Image
        src="/cookie-is-bored.jpg"
        alt="I mean, you can't see it but Cookie is bored af"
        width={1920}
        height={924}
        className="w-full"
      />
      {/* Second row: 2 columns */}
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2">
        <Image
          src="/body-drawers.jpg"
          alt="Nice looking body drawers, for no reason at all"
          width={960}
          height={863}
        />
        <p className="w-[50%] pt-[4rem] pb-[4rem] font-sans text-[1.4rem] font-normal text-white uppercase mix-blend-exclusion lg:text-[1.8rem]">
          ADHD characters are rarely seen on screen – let alone is there any
          mention of the symptoms that can be an advantage rather than a
          constant pain.
        </p>
      </div>
      {/* Third row: 2 columns */}
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2">
        <p className="order-2 w-[50%] pt-[4rem] font-sans text-[1.4rem] font-normal text-white uppercase mix-blend-exclusion lg:order-1 lg:text-[1.8rem]">
          Just Spacey is a morgue-comedy short film that touches on the
          unexpected humor, chaos, and brilliance of thinking differently.
        </p>
        <Image
          className="order-1 lg:order-2"
          src="/this-foot-is-stuck.png"
          alt="Don't mind us, just this foot being stuck"
          width={960}
          height={863}
        />
      </div>
    </section>
  );
}
