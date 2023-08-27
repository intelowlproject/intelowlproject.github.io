"use client";
import Image from "next/image";
import Link from "next/link";

interface Headerprops {
  blogsection: boolean;
}

/* eslint-disable @next/next/no-img-element */
export function Header(props: Headerprops) {
  const { blogsection } = props;
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      {blogsection ? (
        <div className="fixed z-50 w-full h-16 max-w-xs md:max-w-3xl -translate-x-1/2 rounded-full top-10 left-1/2 bg-[#1C1C1F] border-solid border border-[#29292d]">
          <div className=" md:grid h-full md:grid-cols-6 flex flex-row justify-between mx-auto items-center ml-6 ">
            <Link href="/">
              <img
                className="max-w-[100px] md:max-w-[110px]"
                src="/images/intelowlwhite.png"
                alt="intelowl logo"
              ></img>
            </Link>

            <Link
              href="/#feature-section"
              className="text-white font-SpaceGrotesk font-light hidden md:flex md:justify-center md:flex-row"
            >
              Features
            </Link>
            <Link
              href="/#testimonial-section"
              className="text-white font-SpaceGrotesk font-light hidden md:flex md:justify-center md:flex-row"
            >
              Testimonials
            </Link>
            <Link
              href={"/blogs"}
              className="text-white font-SpaceGrotesk font-light hidden md:flex md:justify-center md:flex-row"
            >
              Blogs
            </Link>
            <Link
              href="https://opencollective.com/intelowl-project/donate"
              className="text-white font-SpaceGrotesk font-light hidden md:flex md:justify-center md:flex-row"
            >
              Donate
            </Link>
            <span className="flex flex-row justify-center space-x-2 mr-5">
              <Link href={"https://github.com/intelowlproject"}>
                <Image
                  width={25}
                  height={25}
                  className=""
                  src="/images/githublogo.png"
                  alt="github logo"
                />
              </Link>
              <Link href={"https://twitter.com/intel_owl?lang=en"}>
                <Image
                  width={25}
                  height={25}
                  className=""
                  src="/images/twitterlogo.png"
                  alt="twitter logo"
                />
              </Link>
              <Link href={"https://www.linkedin.com/company/intelowl"}>
                <Image
                  width={25}
                  height={25}
                  className=""
                  src="/images/linkedinlogo.png"
                  alt="linkedin logo"
                />
              </Link>
            </span>
          </div>
        </div>
      ) : (
        <div className="fixed z-50 w-full h-16 max-w-xs md:max-w-3xl -translate-x-1/2 rounded-full top-10 left-1/2 bg-[#1C1C1F] border-solid border border-[#29292d]">
          <div className=" md:grid h-full md:grid-cols-6 flex flex-row justify-between mx-auto items-center ml-6  ">
            <Link href="#hero-section" onClick={handleScroll}>
              <img
                className="max-w-[100px] md:max-w-[110px]"
                src="/images/intelowlwhite.png"
                alt="intelowl logo"
              ></img>
            </Link>
            <Link
              href="#feature-section"
              onClick={handleScroll}
              className="text-white font-SpaceGrotesk font-light hidden md:flex md:justify-center md:flex-row"
            >
              Features
            </Link>
            <Link
              href="https://intelowl.readthedocs.io/en/latest"
              className="text-white font-SpaceGrotesk font-light text-center hidden md:flex md:justify-center md:flex-row"
            >
              Docs
            </Link>
            <Link
              href="/blogs"
              className="text-white font-SpaceGrotesk font-light text-center hidden md:flex md:justify-center md:flex-row"
            >
              Blogs
            </Link>
            <Link
              href="https://opencollective.com/intelowl-project/donate"
              className="text-white font-SpaceGrotesk font-light text-center hidden md:flex md:justify-center md:flex-row"
            >
              Donate
            </Link>
            <span className="flex flex-row justify-center space-x-2 mr-5">
              <Link href={"https://github.com/intelowlproject"}>
                <Image
                  width={25}
                  height={25}
                  className=""
                  src="/images/githublogo.png"
                  alt="intelowl logo"
                />
              </Link>
              <Link href={"https://twitter.com/intel_owl?lang=en"}>
                <Image
                  width={25}
                  height={25}
                  className=""
                  src="/images/twitterlogo.png"
                  alt="intelowl logo"
                />
              </Link>
              <Link href={"https://www.linkedin.com/company/intelowl"}>
                <Image
                  width={25}
                  height={25}
                  className=""
                  src="/images/linkedinlogo.png"
                  alt="linkedin logo"
                />
              </Link>
            </span>
          </div>
        </div>
      )}
    </>
  );
}
