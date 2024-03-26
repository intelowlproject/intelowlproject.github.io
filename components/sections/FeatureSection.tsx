import { FeaturesData } from "../../constants/featuresdata";
export default function FeatureSection() {
  return (
    <div id="">
      <div className="mx-auto max-w-screen-lg lg:px-8 lg:py-16 sm:px-6 sm:py-3 md:py-5 ">
        <div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-2 lg:gap-8">
          {FeaturesData.map((feature, index) => {
            if (feature.color === "darker") {
              return (
                <div
                  key={index}
                  className="transform transition-transform duration-3 hover:scale-105 mb-8 bg-[#17171D] sm:break-inside-avoid rounded-2xl border-solid border border-[#212123]"
                >
                  <h3 className="text-xl md:text-3xl font-SpaceGrotesk text-white px-5 py-5 opacity-90">
                    {feature.title}
                  </h3>
                  <h4 className="text-md md:text-lg font-SpaceGrotesk text-white px-5 py-5 opacity-70">
                    {feature.description}
                  </h4>
                </div>
              );
            } else if (feature.color === "lighter") {
              return (
                <div
                  key={index}
                  className="transform transition-transform duration-3 hover:scale-105 bg-[#1B1B23] mb-8 sm:break-inside-avoid rounded-2xl border-solid border border-[#212123]"
                >
                  <h3 className="text-xl md:text-3xl font-SpaceGrotesk text-white px-5 py-5 opacity-90">
                    {feature.title}
                  </h3>
                  <h4 className="text-md md:text-lg font-SpaceGrotesk text-white px-5 py-5 opacity-70">
                    {feature.description}
                  </h4>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}
