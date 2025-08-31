import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="w-full h-[5.5rem] flex justify-between items-center px-[2rem] lg:px-[4rem] z-50 absolute top-0 left-0 bg-black">
      <Image
        src="/logo.svg"
        alt="At The Helm Company Logo"
        width={78}
        height={49}
      />
      <Image
        className="cursor-pointer"
        src="/menu.svg"
        alt="Menu Icon"
        width={12}
        height={12}
      />
    </nav>
  );
}
