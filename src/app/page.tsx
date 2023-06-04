"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Swiper from "swiper";

export default function Home() {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 8,
      autoplay: {
        delay: 8000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1.5,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);
  return (
    <>
      <main className="h-full w-full">
        <div className="fixed z-50 w-full h-16 max-w-3xl -translate-x-1/2 rounded-full top-10 left-1/2 bg-[#1C1C1F] border-solid border border-[#29292d]">
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
          <div className="flex flex-row h-screen w-screen justify-center items-center mt-8">
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
          className="w-full flex flex-col h-14 items-center justify-center -mt-4"
        >
          <div className="flex flex-row w-full h-14 items-center justify-center space-x-6">
            {" "}
            <a
              href="#"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-[#00ADEF] rounded-full text-white px-4 py-1.5 mr-3 text-center justify-center">
                100+
              </span>{" "}
              {/* link to prolly the docs where analyzers are explained */}
              <span className="text-sm font-normal font-SpaceGrotesk ">
                Analyzers
              </span>
            </a>
            <a
              href="#"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-[#00ADEF] rounded-full text-white px-4 py-1.5 mr-3">
                20+
              </span>{" "}
              <span className="text-sm font-SpaceGrotesk font-normal">
                Connectors
              </span>
            </a>
            <a
              href="#"
              className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
              role="alert"
            >
              <span className="text-xs bg-[#00ADEF] rounded-full text-white px-4 py-1.5 mr-3">
                10+
              </span>{" "}
              <span className="text-sm font-SpaceGrotesk font-normal">
                Playbooks
              </span>
            </a>
          </div>
        </div>
        <section
          id="video-section"
          className="flex flex-col items-center justify-center h-screen w-screen mt-14"
        >
          <div className="flex flex-col ">
            <div
              id="text"
              className="flex flex-col w-full h-2/5 items-center justify-center"
            >
              <h2 className="text-center text-4xl text-white lg:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
                The OSINT Solution for
              </h2>
              <h3 className="text-center w-2/3 mx-auto text-white text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mt-2">
                getting threat intelligence data about a malware/IP/domain with
                single API request.(need new content here)
              </h3>
            </div>
          </div>
          <br></br>
          <div id="video" className="w-4/5 h-3/5 rounded-3xl ">
            <a
              className="rounded-3xl"
              href="https://asciinema.org/a/377595"
              target="_blank"
            >
              <img src="https://asciinema.org/a/377595.svg" alt="demo-vid" />
            </a>
          </div>
        </section>
        <section
          id="feature-section"
          className=" w-screen flex flex-col items-center justify-start xl:mt-14 mb-24"
        >
          <h2 className="text-center text-4xl text-white lg:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
            What do we provide?
          </h2>
          <h3 className="text-center w-2/3 mx-auto text-white text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mb-14">
            this is what we provide, compared to others.
          </h3>
          <div id="all-feature-boxes" className="flex flex-col items-center ">
            <div
              id="feature-boxes"
              className="flex flex-row w-5/6 xl:w-4/6 space-x-5 items-start justify-items-center mt-8"
            >
              <div className="w-[45%]  bg-[#1B1B23] rounded-2xl border-solid border border-[#212123] ">
                <h3 className="text-3xl font-SpaceGrotesk text-white px-5 py-5 opacity-90">
                  feature Title
                </h3>
                <h4 className="text-lg font-SpaceGrotesk text-white px-5 py-5 opacity-70">
                  Intel Owl is composed of analyzers that can be run to retrieve
                  data from external sources (like VirusTotal or AbuseIPDB) or
                  to generate intel from internal analyzers (like Yara or
                  Oletools)
                </h4>
              </div>
              <div className="w-[55%] bg-[#17171D] rounded-2xl border-solid border border-[#212123]">
                <h3 className="text-3xl font-SpaceGrotesk text-white px-5 py-5 opacity-90">
                  feature Title
                </h3>
                <h4 className="text-lg font-SpaceGrotesk text-white px-5 py-5 opacity-70">
                  Intel Owl is composed of analyzers that can be run to retrieve
                  data from external sources (like VirusTotal or AbuseIPDB) or
                  to generate intel from internal analyzers (like Yara or
                  Oletools) Intel Owl is composed of analyzers that can be run
                  to retrieve data from external sources (like VirusTotal or
                  AbuseIPDB) or to generate intel from internal analyzers (like
                  Yara or Oletools)
                </h4>
              </div>
            </div>
            {/* if there's a problem in getting them in same depths, as in figma you basically make em of same width, ez */}
            <div
              id="feature-boxes"
              className="flex flex-row w-5/6 xl:w-4/6 space-x-5 items-start justify-items-center mt-8"
            >
              <div className="w-[45%]  bg-[#1B1B23] rounded-2xl border-solid border border-[#212123]">
                <h3 className="text-3xl font-SpaceGrotesk text-white px-5 py-5 opacity-90">
                  feature Title
                </h3>
                <h4 className="text-lg font-SpaceGrotesk text-white px-5 py-5 opacity-70">
                  Intel Owl is composed of analyzers that can be run to retrieve
                  data from external sources (like VirusTotal or AbuseIPDB) or
                  to generate intel from internal analyzers (like Yara or
                  Oletools)
                </h4>
              </div>
              <div className="w-[55%] bg-[#17171D] rounded-2xl border-solid border border-[#212123]">
                <h3 className="text-3xl font-SpaceGrotesk text-white px-5 py-5 opacity-90">
                  feature Title
                </h3>
                <h4 className="text-lg font-SpaceGrotesk text-white px-5 py-5 opacity-70">
                  Intel Owl is composed of analyzers that can be run to retrieve
                  data from external sources (like VirusTotal or AbuseIPDB) or
                  to generate intel from internal analyzers (like Yara or
                  Oletools) Intel Owl is composed of analyzers that can be run
                  to retrieve data from external sources (like VirusTotal or
                  AbuseIPDB) or to generate intel from internal analyzers (like
                  Yara or Oletools)
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section
          id="testimonials-section"
          className="h-screen w-screen flex flex-col items-center justify-start xl:mt-16"
        >
          <h2 className="text-center text-4xl text-white lg:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
            What Theyre Saying
          </h2>
          <h3 className="text-center w-2/3 mx-auto text-white text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mb-14">
            Dont just take our word for it, see what our satisfied customers and
            valued partners have to say about intelowl.
          </h3>
          <div id="testimonials-element" className="w-[90%]">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
              <div className="swiper-container !overflow-hidden">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <blockquote className="bg-[#16161D] p-8 xl:p-16 rounded-xl mx-2 border-solid border border-[#39393F] ">
                      <p className="relative mt-4 text-gray-500">
                        <span className="text-xl">&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni assumenda officiis sit amet itaque eveniet
                        accusantium corporis tempora, soluta perspiciatis rerum,
                        ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span className="text-xl">&rdquo;</span>
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="text-lg mt-14">
                          <p className="font-medium font-SpaceGrotesk opacity-90 text-white text-xl">
                            Abheek Tripathy
                          </p>
                          <p className="font-medium font-SpaceGrotesk text-white opacity-70 text-lg">
                            Frontend Engineer
                          </p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <div className="swiper-slide">
                    <blockquote className="bg-[#16161D] p-8 xl:p-16 rounded-xl mx-2 border-solid border border-[#39393F] ">
                      <p className="relative mt-4 text-gray-500">
                        <span className="text-xl">&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni assumenda officiis sit amet itaque eveniet
                        accusantium corporis tempora, soluta perspiciatis rerum,
                        ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span className="text-xl">&rdquo;</span>
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="text-lg mt-14">
                          <p className="font-medium font-SpaceGrotesk opacity-90 text-white text-xl">
                            Abheek Tripathy
                          </p>
                          <p className="font-medium font-SpaceGrotesk text-white opacity-70 text-lg">
                            Frontend Engineer
                          </p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <div className="swiper-slide">
                    <blockquote className="bg-[#16161D] p-8 xl:p-16 rounded-xl mx-2 border-solid border border-[#39393F] ">
                      <p className="relative mt-4 text-gray-500">
                        <span className="text-xl">&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni assumenda officiis sit amet itaque eveniet
                        accusantium corporis tempora, soluta perspiciatis rerum,
                        ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span className="text-xl">&rdquo;</span>
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="text-lg mt-14">
                          <p className="font-medium font-SpaceGrotesk opacity-90 text-white text-xl">
                            Abheek Tripathy
                          </p>
                          <p className="font-medium font-SpaceGrotesk text-white opacity-70 text-lg">
                            Frontend Engineer
                          </p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                  <div className="swiper-slide">
                    <blockquote className="bg-[#16161D] p-8 xl:p-16 rounded-xl mx-2 border-solid border border-[#39393F] ">
                      <p className="relative mt-4 text-gray-500">
                        <span className="text-xl">&ldquo;</span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni assumenda officiis sit amet itaque eveniet
                        accusantium corporis tempora, soluta perspiciatis rerum,
                        ratione animi nemo inventore repellat, commodi in esse
                        quisquam.
                        <span className="text-xl">&rdquo;</span>
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="text-lg mt-14">
                          <p className="font-medium font-SpaceGrotesk opacity-90 text-white text-xl">
                            Abheek Tripathy
                          </p>
                          <p className="font-medium font-SpaceGrotesk text-white opacity-70 text-lg">
                            Frontend Engineer
                          </p>
                        </div>
                      </div>
                    </blockquote>
                  </div>
                </div>
                <div className="swiper-pagination !relative !bottom-0 mt-12"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-screen w-screen bg-inherit"></section>
      </main>
    </>
  );
}
