import Slider from "../../components/Slider";
import HeroSection from "../../components/sections/HeroSection";
import { Header } from "../../components/Header";
import VideoSection from "../../components/sections/VideoSection";
import FeatureSection from "../../components/sections/FeatureSection";
import Footer from "../../components/Footer";
import FAQSection from "../../components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <Header></Header>
      <main className="h-full w-full">
        <section
          id="hero-section-md"
          className="md:w-screen md:h-screen hidden md:table"
        >
          <HeroSection isMobile={false}></HeroSection>
        </section>
        <section id="hero-section-mobile" className="w-screen md:hidden">
          ˝<HeroSection isMobile={true}></HeroSection>
        </section>
        <div
          id="quick-stats"
          className="w-full flex-col h-14 items-center justify-center -mt-4 hidden md:flex"
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
          className="flex flex-col items-center justify-center md:h-screen md:w-screen mt-14"
        >
          <VideoSection></VideoSection>
        </section>
        <section
          id="feature-section"
          className=" w-screen flex flex-col mt-14 md:mt-0 items-center justify-start xl:mt-14 mb-24"
        >
          <h2 className="text-center text-2xl text-white md:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
            What do we provide?
          </h2>
          <h3 className="text-center md:w-2/3 mx-6 text-white text-lg md:text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mt-2">
            this is what we provide, compared to others.
          </h3>
          <FeatureSection></FeatureSection>
        </section>
        <section
          id="testimonials-section"
          className="md:h-screen w-screen flex flex-col items-center justify-start xl:mt-16"
        >
          <h2 className="text-center text-2xl text-white md:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
            What Theyre Saying
          </h2>
          <h3 className="text-center md:w-2/3 mx-6 text-white text-lg md:text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mt-2">
            Dont just take our word for it, see what our satisfied customers and
            valued partners have to say about intelowl.
          </h3>
          <Slider isTestimonial={true}></Slider>
        </section>
        <section
          id="faq-section"
          className="flex flex-col items-center justify-start w-screen md:h-screen"
        >
          <h2 className="text-center text-3xl text-white md:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
            FAQs
          </h2>
          <h3 className="text-center md:w-2/3 mx-6 text-white text-lg md:text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mt-2 mb-14 ">
            Dont just take our word for it, see what our satisfied customers and
            valued partners have to say about intelowl.
          </h3>
          <FAQSection></FAQSection>
        </section>
        <section
          id="sponsor-section"
          className="h-screen md:w-screen flex flex-col items-center justify-start mt-16"
        >
          <h2 className="text-center text-4xl text-white lg:text-5xl xl:text-6xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-semibold ">
            Our Sponsors
          </h2>
          <h3 className="text-center md:w-2/3 mx-6 text-white text-lg md:text-2xl lg:text-2xl xl:text-3xl leading-snug lg:leading-snug xl:leading-snug font-SpaceGrotesk font-light opacity-70 mt-2">
            We need sponsors to improve the project and let it grow stronger and
            stronger. This the list of our sponsors and donators.
          </h3>
          <Slider isTestimonial={false}></Slider>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
