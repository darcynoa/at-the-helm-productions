import Image from "next/image";

export default function JustSpaceyDescription() {
  return (
    <section className="w-full text-white flex flex-col">
      {/* First row: 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
        <p className="font-sans font-normal uppercase text-[15px] lg:text-[1.8rem] text-white self-start pt-[4rem]">
          logline
        </p>
        <Image
          src="/just-spacey-poster.png"
          alt="The official poster for Just Spacey"
          width={406}
          height={540}
        />
        <p className="font-sans font-normal uppercase text-[15px] lg:text-[1.8rem] text-white self-start pt-[4rem]">
          When an orderly mortician is forced to bring his recently suspended
          10-year-old daughter with raging ADHD to the morgue, they must work
          together to ensure that the resulting chaos does not see the light of
          day.
        </p>
      </div>
      <Image
        src="/cookie-is-bored.png"
        alt="I mean, you can't see it but Cookie is bored af"
        width={1920}
        height={924}
        className="w-full"
      />
      {/* Second row: 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <Image
          src="/body-drawers.png"
          alt="Nice looking body drawers, for no reason at all"
          width={960}
          height={863}
        />
        <p className="w-[50%] font-sans font-normal uppercase text-[15px] lg:text-[1.8rem] text-white pt-[4rem] mix-blend-exclusion">
          ADHD characters are rarely seen on screen – let alone is there any
          mention of the symptoms that can be an advantage rather than a
          constant pain.
        </p>
      </div>
      {/* Third row: 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <p className="w-[50%] font-sans font-normal uppercase text-[15px] lg:text-[1.8rem] text-white pt-[4rem] mix-blend-exclusion">
          Just Spacey is a morgue-comedy short film that touches on the
          unexpected humor, chaos, and brilliance of thinking differently.
        </p>
        <Image
          src="/this-foot-is-stuck.png"
          alt="Don't mind us, just this foot being stuck"
          width={960}
          height={863}
        />
      </div>
    </section>
  );
}
