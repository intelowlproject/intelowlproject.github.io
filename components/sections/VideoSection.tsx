/* eslint-disable @next/next/no-img-element */
export default function VideoSection() {
  return (
    <>
      <div className="flex flex-col">
        <div
          id="text"
          className="flex flex-col w-full md:h-2/5 items-center justify-center sm:mt-20 md:mt-32"
        >
          <h2 className="w-4/5 text-center text-xl text-white md:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold">
            Your <span className="text-[#00ADEF]">Open Source </span> Solution for your day-to-day activities.
          </h2>
          <h3 className="text-center md:w-2/3 mx-6 text-white text-lg md:text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mt-2">
             <br/>
            Threat Hunting, SOC operations, Incident Response, Threat Intelligence, Vulnerability Management, etc. We got you covered. You can adapt the application to your specific use cases.
          </h3>
        </div>
      </div>
      <div id="video" className="flex flex-col justify-center items-center md:w-screen md:h-3/5 rounded-3xl mt-12 sm: pb-2 xl:mt-[-2rem]" style={{alignItems:'center', justifyContent: 'center'}}>
        <iframe
            className="md:w-[70%] md:h-[100%] lg:h-[150%] lg:w-[60%] xl:h[150%] xl:w-1/2 rounded-3xl md:mb-16"
            src="https://www.youtube.com/embed/pHnh3qTzSeM">
        </iframe>
      </div>
    </>
  );
}
