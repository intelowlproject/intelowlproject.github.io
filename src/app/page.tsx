/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="h-full w-full">
        <div className="fixed z-50 w-full h-16 max-w-3xl -translate-x-1/2 rounded-full top-10 left-1/2 bg-[#1C1C1F] border-gray-600">
          <div className="grid h-full grid-cols-6 mx-auto items-center ml-6 ">
            <img
              className=""
              src="images/intelowlwhite.png"
              alt="intelowl logo"
            ></img>

            <Link
              href={""}
              className="text-white font-SpaceGrotesk font-light text-right"
            >
              Features
            </Link>
            <Link
              href={""}
              className="text-white font-SpaceGrotesk font-light text-right"
            >
              Testimonials
            </Link>
            <Link
              href={""}
              className="text-white font-SpaceGrotesk font-light text-right -ml-2"
            >
              Sponsors
            </Link>
            <Link
              href={""}
              className="text-white font-SpaceGrotesk font-light text-center"
            >
              Docs
            </Link>
            <span className="flex flex-row justify-center space-x-2">
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

        <section id="hero-section" className="h-screen w-screen">
          <div className="flex flex-row h-screen w-screen">
            <div className="bg-inherit w-4/6 flex flex-col items-left justify-center px-16">
              <h1 className="text-white text-left text-5xl lg:text-6xl xl:text-7xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
                Get Threat Intelligence data about a{" "}
                <span className="text-[#00ADEF]">hash.</span>
              </h1>
              <h2 className=" text-white text-left text-3xl lg:text-3xl xl:text-4xl mt-8 font-SpaceGrotesk font-extralight">
                From multiple sources with just a{" "}
                <span className="text-[#00ADEF]">
                  single
                  <br /> API request.
                </span>
              </h2>
              <Link
                href={
                  "https://intelowl.readthedocs.io/en/latest/Installation.html"
                }
                className="btn bg-[#00ADEE] hover:bg-blue-700 text-white py-2 px-4 rounded w-36 h-10 mt-16 font-SpaceGrotesk text-center"
              >
                get started ➔
              </Link>
            </div>
            <div className="bg-inherit h-screen w-2/6 flex flex-col items-center justify-center px-10">
              <Image
                className="items center justify-center"
                src="images/nodescomplete.png"
                width={290}
                height={250}
                alt={""}
              />
            </div>
          </div>
        </section>

        <div
          id="quick-stats"
          className="w-full h-14 items-center justify-center"
        >
          <div className="flex flex-row w-full h-14 items-center justify-center space-x-6">
            {" "}
            <a
              href="#"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-[#00ADEF] rounded-full text-white px-4 py-1.5 mr-3 text-center justify-center">
                New
              </span>{" "}
              <span className="text-sm font-medium">100K+ Docker Pulls</span>
            </a>
            <a
              href="#"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-[#00ADEF] rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>{" "}
              <span className="text-sm font-medium">100K+ Docker Pulls</span>
            </a>
            <a
              href="#"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-[#00ADEF] rounded-full text-white px-4 py-1.5 mr-3">
                New
              </span>{" "}
              <span className="text-sm font-medium">100K+ Docker Pulls</span>
            </a>
          </div>
        </div>
        <section id="video-section"></section>
        <section id="feature-section"></section>
        <section id="testimonials-section"></section>
        <section className="h-screen w-screen bg-inherit"></section>
      </main>
    </>
  );
}
