/* eslint-disable @next/next/no-img-element */
export default function VideoSection() {
  return (
    <>
      <div className="flex flex-col ">
        <div
          id="text"
          className="flex flex-col w-full md:h-2/5 items-center justify-center -mt-12"
        >
          <h2 className="w-4/5 text-center text-2xl text-white md:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
            Your Open Source Solution for your day-to-day activities.
          </h2>
          <h3 className="text-center md:w-2/3 mx-6 text-white text-lg md:text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mt-2">
             <br/>
            Threat Hunting, SOC operations, Incident Response, Threat Intelligence, Vulnerability Management, etc... <br/> We got you covered. You can adapt the application to your specific use cases.
          </h3>
        </div>
      </div>
      <div id="video" className=" md:h-3/5 rounded-3xl mt-12" style={{alignItems:'center', justifyContent: 'center'}}>
        <iframe
            className="rounded-3xl"
            width={800}
            height={500}
            src="https://www.youtube.com/embed/pHnh3qTzSeM">
        </iframe>
      </div>
    </>
  );
}
