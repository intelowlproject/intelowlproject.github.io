import Link from "next/link";
import Image from "next/image";

/* eslint-disable react/jsx-no-undef */
export default function HeroSection() {
    return(
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
    );

}