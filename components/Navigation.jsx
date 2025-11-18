import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex h-[5.5rem] w-full items-center justify-between bg-black px-[2rem] lg:px-[4rem]">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="At The Helm Company Logo"
          width={78}
          height={49}
        />
      </Link>
      <Link href="mailto:info@atthehelmproductions.com" target="_blank">
        <Image
          className="cursor-pointer"
          src="/email-icon.svg"
          alt="Email Icon"
          width={24}
          height={24}
        />
      </Link>
    </nav>
  );
}
