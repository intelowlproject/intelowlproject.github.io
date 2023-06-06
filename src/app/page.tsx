"use client";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import Slider from "../../components/Slider";
import { useEffect, useState } from "react";
import Swiper from "swiper";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);
  
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

        <section id="hero-section-md" className="h-screen w-screen">
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
        {/* <section id="hero-section-mobile" className="h-screen w-screen visible md:hidden">
          <div className="flex flex-col w-screen justify-center items-center mt-8">
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
        </section> */}
        <div
          id="quick-stats"
          className="w-full flex flex-col h-14 items-center justify-center -mt-4 invisible md:visible"
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

        <section className="flex flex-col items-center justify-start w-screen h-screen">
          <h2 className="text-center text-4xl text-white lg:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
            FAQs
          </h2>
          <h3 className="text-center w-2/3 mx-auto text-white text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mb-16">
            Dont just take our word for it, see what our satisfied customers and
            valued partners have to say about intelowl.
          </h3>
          <div className="w-full lg:max-w-screen-md xl:max-w-screen-lg mt-5 space-y-5">
            <button className="w-full border-b-2 border-gray-500 pb-6 text-left group focus:outline-none">
              <div className="text-lg font-semibold text-white font-SpaceGrotesk opacity-90">
                Q: Is it only compatible on Linux?
              </div>
              <div className="mt-3 hidden text-white group-focus:flex font-SpaceGrotesk font-light opacity-70">
                <p>
                  IntelOwl is tested and supported to work in a Linux-based OS.
                  It may also run on windows, but that is not officially
                  supported yet. And Regarding client, i.e., Web-Interface or
                  pyintelowl can be accessed anywhere regardless of Operating
                  System.
                </p>
              </div>
            </button>
            <button className="w-full border-b-2 border-gray-500 pb-6 text-left group focus:outline-none">
              <div className="text-lg font-semibold text-white font-SpaceGrotesk opacity-90">
                Q: Is it only compatible on Linux?
              </div>
              <div className="mt-3 hidden text-white group-focus:flex font-SpaceGrotesk font-light opacity-70">
                <p>
                  IntelOwl is tested and supported to work in a Linux-based OS.
                  It may also run on windows, but that is not officially
                  supported yet. And Regarding client, i.e., Web-Interface or
                  pyintelowl can be accessed anywhere regardless of Operating
                  System.
                </p>
              </div>
            </button>
            <button className="w-full border-b-2 border-gray-500 pb-6 text-left group focus:outline-none">
              <div className="text-lg font-semibold text-white font-SpaceGrotesk opacity-90">
                Q: Is it only compatible on Linux?
              </div>
              <div className="mt-3 hidden text-white group-focus:flex font-SpaceGrotesk font-light opacity-70">
                <p>
                  IntelOwl is tested and supported to work in a Linux-based OS.
                  It may also run on windows, but that is not officially
                  supported yet. And Regarding client, i.e., Web-Interface or
                  pyintelowl can be accessed anywhere regardless of Operating
                  System.
                </p>
              </div>
            </button>
            <button className="w-full border-b-2 border-gray-500 pb-6 text-left group focus:outline-none">
              <div className="text-lg font-semibold text-white font-SpaceGrotesk opacity-90">
                Q: Is it only compatible on Linux?
              </div>
              <div className="mt-3 hidden text-white group-focus:flex font-SpaceGrotesk font-light opacity-70">
                <p>
                  IntelOwl is tested and supported to work in a Linux-based OS.
                  It may also run on windows, but that is not officially
                  supported yet. And Regarding client, i.e., Web-Interface or
                  pyintelowl can be accessed anywhere regardless of Operating
                  System.
                </p>
              </div>
            </button>
          </div>
        </section>
        <section
          id="sponsor-section"
          className="h-screen w-screen flex flex-col items-center justify-start xl:mt-16"
        >
          <h2 className="text-center text-4xl text-white lg:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
            Our Sponsors
          </h2>
          <h3 className="text-center w-2/3 mx-auto text-white text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mb-14">
            We need sponsors to improve the project and let it grow stronger and
            stronger. This the list of our sponsors and donators.
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
        <Slider></Slider>
      </main>
      <footer className="relative z-50 bg-[#17171D] pt-32 mt-32 pb-10 lg:pt-[120px] lg:pb-20 rounded-t-[75px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-around">
            <div className="w-full px-4 sm:w-2/3 lg:w-6/12">
              <div className="mb-10 w-full">
          <a href="javascript:void(0)" className="mb-6 inline-block max-w-[160px]">
                  <img
                    src="/images/intelowlwhite.png"
                    alt="logo"
                    className="max-w-full"
                  />
                </a>
                <p className="text-body-color mb-7 text-base text-white">
            Sed ut perspiciatis undmnis is iste natus error sit amet voluptatem
            totam rem aperiam.
                </p>
                {/* <p className="text-dark flex items-center text-sm font-medium">
            <span className="text-primary mr-3">
              <svg
                width="19"
                height="21"
                viewBox="0 0 19 21"
                className="fill-current"
              >
                <path
                  d="M17.8076 11.8129C17.741 11.0475 17.1088 10.5151 16.3434 10.5151H2.16795C1.40261 10.5151 0.803643 11.0808 0.703816 11.8129L0.00502514 18.8008C-0.0282506 19.2001 0.104853 19.6327 0.371059 19.9322C0.637265 20.2317 1.03657 20.398 1.46916 20.398H17.0755C17.4748 20.398 17.8741 20.2317 18.1736 19.9322C18.4398 19.6327 18.5729 19.2334 18.5396 18.8008L17.8076 11.8129ZM17.2751 19.1668C17.2419 19.2001 17.1753 19.2667 17.0422 19.2667H1.46916C1.36933 19.2667 1.2695 19.2001 1.23623 19.1668C1.20295 19.1336 1.1364 19.067 1.16968 18.9339L1.86847 11.9127C1.86847 11.7463 2.00157 11.6465 2.16795 11.6465H16.3767C16.5431 11.6465 16.6429 11.7463 16.6762 11.9127L17.375 18.9339C17.3417 19.0337 17.3084 19.1336 17.2751 19.1668Z"
                />
                <path
                  d="M9.25704 13.1106C7.95928 13.1106 6.92773 14.1422 6.92773 15.4399C6.92773 16.7377 7.95928 17.7693 9.25704 17.7693C10.5548 17.7693 11.5863 16.7377 11.5863 15.4399C11.5863 14.1422 10.5548 13.1106 9.25704 13.1106ZM9.25704 16.6046C8.6248 16.6046 8.09239 16.0722 8.09239 15.4399C8.09239 14.8077 8.6248 14.2753 9.25704 14.2753C9.88928 14.2753 10.4217 14.8077 10.4217 15.4399C10.4217 16.0722 9.88928 16.6046 9.25704 16.6046Z"
                />
                <path
                  d="M0.802807 6.05619C0.869358 7.52032 2.16711 8.11928 2.83263 8.11928H5.16193C5.19521 8.11928 5.19521 8.11928 5.19521 8.11928C6.19348 8.05273 7.19175 7.38722 7.19175 6.05619V5.25757C8.28985 5.25757 10.8188 5.25757 11.9169 5.25757V6.05619C11.9169 7.38722 12.9152 8.05273 13.9135 8.11928H13.9467H16.2428C16.9083 8.11928 18.206 7.52032 18.2726 6.05619C18.2726 5.95636 18.2726 5.59033 18.2726 5.25757C18.2726 4.99136 18.2726 4.75843 18.2726 4.72516C18.2726 4.69188 18.2726 4.6586 18.2726 4.6586C18.1727 3.72688 17.84 2.96154 17.2743 2.36258L17.241 2.3293C16.4091 1.56396 15.4109 1.13138 14.6455 0.865169C12.416 0 9.62088 0 9.48778 0C7.52451 0.0332757 6.26003 0.199654 4.36331 0.865169C3.63125 1.0981 2.63297 1.53068 1.80108 2.29603L1.7678 2.3293C1.20212 2.92827 0.869359 3.69361 0.769531 4.62533C0.769531 4.6586 0.769531 4.69188 0.769531 4.69188C0.769531 4.75843 0.769531 4.95809 0.769531 5.22429C0.802807 5.52377 0.802807 5.92308 0.802807 6.05619ZM2.5997 3.12792C3.26521 2.52896 4.09711 2.16292 4.7959 1.89672C6.52624 1.26448 7.65761 1.13138 9.55433 1.0981C9.68743 1.0981 12.2829 1.13138 14.2795 1.89672C14.9783 2.16292 15.8102 2.49568 16.4757 3.12792C16.8417 3.52723 17.0746 4.05964 17.1412 4.69188C17.1412 4.79171 17.1412 4.95809 17.1412 5.22429C17.1412 5.55705 17.1412 5.92308 17.1412 6.02291C17.1079 6.78825 16.3759 6.95463 16.276 6.95463H13.98C13.6472 6.92135 13.1148 6.78825 13.1148 6.05619V4.69188C13.1148 4.42567 12.9485 4.22602 12.7155 4.12619C12.5159 4.05964 6.69262 4.05964 6.49296 4.12619C6.26003 4.19274 6.09365 4.42567 6.09365 4.69188V6.05619C6.09365 6.78825 5.56124 6.92135 5.22848 6.95463H2.93246C2.83263 6.95463 2.10056 6.78825 2.06729 6.02291C2.06729 5.92308 2.06729 5.55705 2.06729 5.22429C2.06729 4.95809 2.06729 4.82498 2.06729 4.72516C2.00073 4.05964 2.23366 3.52723 2.5997 3.12792Z"
                />
              </svg>
            </span>
            <span>+012 (345) 678 99</span>
          </p> */}
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 lg:w-6/12">
              <div className="mb-10 w-full text-white">
                <h4 className="text-dark mb-9 text-lg font-semibold">
                  Resources
                </h4>
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      SaaS Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      Our Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      User Flow
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                    >
                      User Strategy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}
