"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/* eslint-disable react/jsx-no-undef */
interface HeroSectionProps {
  isMobile: boolean;
}

export default function HeroSection(props: HeroSectionProps) {
  const { isMobile } = props;
  const [words] = useState(["hash.", "ip.", "malware.", "domain."]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, 1400);
    return () => clearInterval(intervalId);
  }, [words]);
  return (
    <>
      {isMobile ? (
        <div
          id="hero-section"
          className="flex flex-col w-screen justify-items-end space-y-5 items-end mt-32 pb-24"
        >
          <div className="bg-inherit w-full flex flex-col items-center justify-center px-5">
            <h1 className="text-white text-center text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
              Get Threat Intelligence data about a{" "}
              <span className="text-[#00ADEF]">{words[currentWordIndex]}</span>
            </h1>
            <h2 className=" text-white text-center text-lg mt-8 font-SpaceGrotesk font-extralight px-4">
              From multiple sources with just a{" "}
              <span className="text-[#00ADEF]">single API request.</span>
            </h2>
            <Link
              href={
                "https://intelowl.readthedocs.io/en/latest/Installation.html"
              }
              className="btn bg-[#00ADEE] hover:bg-blue-700 text-white py-2 mb-12 px-4 text-sm rounded w-32 h-10 mt-8 font-SpaceGrotesk text-center"
            >
              get started ➔
            </Link>
          </div>
          <div className="bg-inherit w-full flex flex-col items-center justify-center px-10 ">
            <div className="flex flex-col relative  items-center justify-center bg-[#0D0D0E] rounded-2xl border border-[#212123] w-[80%] ">
              <motion.img
                className="px-10 my-16"
                initial={{ clipPath: "circle(10.4% at 50% 50%)" }}
                animate={{ clipPath: "circle(42.1% at 50% 50%)" }}
                transition={{
                  duration: 2,
                }}
                src="images/linegraphic.png"
                alt={""}
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          id="hero-section"
          className="flex flex-row h-screen w-screen justify-center items-center mt-8"
        >
          <div className="bg-inherit w-4/6 flex flex-col items-left justify-center px-16">
            <h1 className="text-white text-left text-5xl lg:text-6xl xl:text-7xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
              Get Threat Intelligence data about a{" "}
              <span className="text-[#00ADEF]">{words[currentWordIndex]}</span>
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
            <div className="flex flex-col relative  items-center justify-center bg-[#0D0D0E] rounded-2xl border border-[#212123] w-[80%] ">
              <motion.img
                className="px-10 my-16"
                initial={{ clipPath: "circle(10.4% at 50% 50%)" }}
                animate={{ clipPath: "circle(42.1% at 50% 50%)" }}
                transition={{
                  duration: 2,
                }}
                src="images/linegraphic.png"
                alt={""}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
