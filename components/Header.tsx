import Image from "next/image";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export function Header() {
  return (
    <div className="fixed z-50 w-full h-16 max-w-xs md:max-w-3xl -translate-x-1/2 rounded-full top-10 left-1/2 bg-[#1C1C1F] border-solid border border-[#29292d]">
    <div className="grid h-full grid-cols-6 mx-auto items-center ml-6  ">
      <img
        className=""
        src="images/intelowlwhite.png"
        alt="intelowl logo"
      ></img>

      <Link
        href={""}
        className="text-white font-SpaceGrotesk font-light text-right invisible md:visible"
      >
        Features
      </Link>
      <Link
        href={""}
        className="text-white font-SpaceGrotesk font-light text-right invisible md:visible"
      >
        Testimonials
      </Link>
      <Link
        href={""}
        className="text-white font-SpaceGrotesk font-light text-right -ml-2 invisible md:visible"
      >
        Sponsors
      </Link>
      <Link
        href={""}
        className="text-white font-SpaceGrotesk font-light text-center collapse md:visible"
      >
        Docs
      </Link>
      <span className="flex flex-row justify-center space-x-2 mr-5">
        <Link href={"/b"}>
          <Image
            width={25}
            height={25}
            className=""
            src="images/githublogo.png"
            alt="intelowl logo"
          />
        </Link>
        <Link href={"/qds"}>
          <Image
            width={25}
            height={25}
            className=""
            src="images/twitterlogo.png"
            alt="intelowl logo"
          />
        </Link>
      </span>
    </div>
  </div>
  );
}
