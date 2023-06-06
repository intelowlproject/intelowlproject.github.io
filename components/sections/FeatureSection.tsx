export default function FeatureSection() {

    return(
      <div>
      <div className="mx-auto max-w-screen-lg px-8 py-16 sm:px-6 ">
        <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-2 lg:gap-8">
          <div className=" mb-8 bg-[#17171D] sm:break-inside-avoid rounded-2xl border-solid border border-[#212123]">
            <h3 className="text-xl md:text-3xl font-SpaceGrotesk text-white px-5 py-5 opacity-90">
              feature Title
            </h3>
            <h4 className="text-md md:text-lg font-SpaceGrotesk text-white px-5 py-5 opacity-70">
              Intel Owl is composed of analyzers that can be run to
              retrieve data from external sources (like VirusTotal or
              AbuseIPDB) or to generate intel from internal analyzers
              (like Yara or Oletools) Intel Owl is composed of analyzers
              that can be run to retrieve data from external sources (like
              VirusTotal or AbuseIPDB) or to generate intel from internal
              analyzers (like Yara or Oletools)
            </h4>
          </div>
          <div className="bg-[#1B1B23] mb-8 sm:break-inside-avoid rounded-2xl border-solid border border-[#212123]">
            <h3 className="text-xl md:text-3xl  font-SpaceGrotesk text-white px-5 py-5 opacity-90">
              feature Title
            </h3>
            <h4 className="text-md md:text-lg font-SpaceGrotesk text-white px-5 py-5 opacity-70">
              Intel Owl is composed of analyzers that can be run to
              retrieve data from external sources (like VirusTotal or
              AbuseIPDB) or to generate intel from internal analyzers
              (like Yara or Oletools)
            </h4>
          </div>
        </div>
      </div>
    </div>
    );

}