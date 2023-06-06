/* eslint-disable @next/next/no-img-element */
export default function VideoSection() {
  return (
    <>
      <div className="flex flex-col ">
        <div
          id="text"
          className="flex flex-col w-full md:h-2/5 items-center justify-center -mt-12"
        >
          <h2 className="text-center text-2xl text-white md:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
            The OSINT Solution for
          </h2>
          <h3 className="text-center md:w-2/3 mx-6 text-white text-lg md:text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mt-2">
            getting threat intelligence data about a malware/IP/domain with
            single API request.(need new content here)
          </h3>
        </div>
      </div>
      <div id="video" className="w-4/5 md:h-3/5 rounded-3xl mt-12">
        <a
          className="rounded-3xl"
          href="https://asciinema.org/a/377595"
          target="_blank"
        >
          <img src="https://asciinema.org/a/377595.svg" alt="demo-vid" />
        </a>
      </div>
    </>
  );
}
