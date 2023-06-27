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
          <div className="grid h-full grid-cols-6 mx-auto items-center ml-6  ">
            <Link href="https://intelowlproject.github.io/site/">
              <img
                className=""
                src="/site/images/intelowlwhite.png"
                alt="intelowl logo"
              ></img>
            </Link>

            <Link
              href="https://intelowlproject.github.io/site/"
              className="text-white font-SpaceGrotesk font-light text-right invisible md:visible"
            >
              Features
            </Link>
            <Link
              href="https://intelowlproject.github.io/site/"
              className="text-white font-SpaceGrotesk font-light text-right invisible md:visible"
            >
              Testimonials
            </Link>
            <Link
              href="https://intelowlproject.github.io/site/"
              className="text-white font-SpaceGrotesk font-light text-right -ml-2 invisible md:visible"
            >
              Sponsors
            </Link>
            <Link
              href={"/blogs"}
              className="text-white font-SpaceGrotesk font-light text-center collapse md:visible"
            >
              Blogs
            </Link>
            <span className="flex flex-row justify-center space-x-2 mr-5">
              <Link href={"https://github.com/intelowlproject"}>
                <Image
                  width={25}
                  height={25}
                  className=""
                  src="/site/images/githublogo.png"
                  alt="github logo"
                />
              </Link>
              <Link href={"https://twitter.com/intel_owl?lang=en"}>
                <Image
                  width={25}
                  height={25}
                  className=""
                  src="/site/images/twitterlogo.png"
                  alt="twitter logo"
                />
              </Link>
              <Link href={"https://www.linkedin.com/company/intelowl"}>
                <Image
                  width={25}
                  height={25}
                  className=""
                  src="/site/images/linkedinlogo.png"
                  alt="linkedin logo"
                />
              </Link>
            </span>
          </div>
        </div>
      ) : (
        <div className="fixed z-50 w-full h-16 max-w-xs md:max-w-3xl -translate-x-1/2 rounded-full top-10 left-1/2 bg-[#1C1C1F] border-solid border border-[#29292d]">
          <div className="grid h-full grid-cols-6 mx-auto items-center ml-6  ">
            <Link href="#hero-section" onClick={handleScroll}>
              <img
                className=""
                src="/site/images/intelowlwhite.png"
                alt="intelowl logo"
              ></img>
            </Link>

            <Link
              href="#feature-section"
              onClick={handleScroll}
              className="text-white font-SpaceGrotesk font-light text-right invisible md:visible"
            >
              Features
            </Link>
            <Link
              href="#testimonials-section"
              onClick={handleScroll}
              className="text-white font-SpaceGrotesk font-light text-right invisible md:visible"
            >
              Testimonials
            </Link>
            <Link
              href="#sponsor-section"
              onClick={handleScroll}
              className="text-white font-SpaceGrotesk font-light text-right -ml-2 invisible md:visible"
            >
              Sponsors
            </Link>
            <Link
              href="/blogs"
              className="text-white font-SpaceGrotesk font-light text-center collapse md:visible"
            >
              Blogs
            </Link>
            <span className="flex flex-row justify-center space-x-2 mr-5">
              <Link href={"https://github.com/intelowlproject"}>
                <Image
                  width={25}
                  height={25}
                  className=""
                  src="/site/images/githublogo.png"
                  alt="intelowl logo"
                />
              </Link>
              <Link href={"https://twitter.com/intel_owl?lang=en"}>
                <Image
                  width={25}
                  height={25}
                  className=""
                  src="/site/images/twitterlogo.png"
                  alt="intelowl logo"
                />
              </Link>
              <Link href={"https://www.linkedin.com/company/intelowl"}>
                <Image
                  width={25}
                  height={25}
                  className=""
                  src="/site/images/linkedinlogo.png"
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
