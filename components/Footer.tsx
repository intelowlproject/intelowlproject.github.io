/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className="relative z-50 bg-[#17171D] md:pt-32 pt-16 md:mt-10 pb-10 lg:pt-[120px] lg:pb-20 md:rounded-t-[75px] rounded-t-[40px]  ">
      <div className="container mx-auto w-[90vw]">
        <div className="-mx-4 flex flex-wrap justify-around">
          <div className="w-full px-4 sm:w-2/3 lg:w-6/12">
            <div className="mb-10 w-full">
              <a href="/" className="mb-6 inline-block max-w-[160px]">
                <img
                  src="/images/intelowlwhite.png"
                  alt="logo"
                  className="max-w-full"
                />
              </a>
              <p className="text-body-color mb-7 text-base text-white">
                From the beginning of 2020, we are here to help the Infosec community all over the world.
              </p>
              <a className="mb-6 inline-block max-w-[160px]" href="https://opencollective.com/intelowl-project/donate" target="_blank">
                <img
                    src="https://opencollective.com/intelowl-project/donate/button@2x.png?color=blue"
                    className="max-w-full"
                    alt="donate"
                    width={200}
                />
              </a>
            </div>
          </div>
          <div className="px-2 xl:w-[50vh] md:w-[65vh] lg:w-[50vh]">
            <div className="mb-10 text-white" id="contributors">
              <h4 className="text-dark mb-9 text-xl font-semibold">Maintainers</h4>
              <ul className="flex flex-col">
                <li className="flex items-center w-full mb-2">
                  <a
                    href="https://twitter.com/matte_lodi"
                    className="text-body-color font-semibold hover:text-primary inline-block text-md leading-loose"
                    style={{ width: '200px' }} // Fixed width for name block
                  >
                    Matteo Lodi
                  </a>
                  <span className="font-small text-sm opacity-90 font-SpaceGrotesk">
                    Author, Advisor and Administrator
                  </span>
                </li>
                <li className="flex items-center w-full mb-2">
                  <a
                    href="https://github.com/drosetti"
                    className="text-body-color font-semibold hover:text-primary inline-block text-md leading-loose"
                    style={{ width: '200px' }} // Fixed width for name block
                  >
                    Daniele Rosetti
                  </a>
                  <span className="font-small text-sm opacity-90 font-SpaceGrotesk">
                    Administrator and Frontend Maintainer
                  </span>
                </li>
                <li className="flex items-center w-full mb-2">
                  <a
                    href="https://twitter.com/0ssig3no"
                    className="text-body-color font-semibold hover:text-primary inline-block text-md leading-loose"
                    style={{ width: '200px' }} // Fixed width for name block
                  >
                    Simone Berni
                  </a>
                  <span className="font-small text-sm opacity-90 font-SpaceGrotesk">
                    Backend Maintainer
                  </span>
                </li>
                <li className="flex items-center w-full mb-2">
                  <a
                    href="https://x.com/fgibertoni1"
                    className="text-body-color font-semibold hover:text-primary inline-block text-md leading-loose"
                    style={{ width: '200px' }} // Fixed width for name block
                  >
                    Federico Gibertoni
                  </a>
                  <span className="font-small text-sm opacity-90 font-SpaceGrotesk">
                    Maintainer and Community Assistant
                  </span>
                </li>
                <li className="flex items-center w-full mb-2">
                  <a
                    href="https://twitter.com/eshaan7_"
                    className="text-body-color font-semibold hover:text-primary inline-block text-md leading-loose"
                    style={{ width: '200px' }} // Fixed width for name block
                  >
                    Eshaan Bansal
                  </a>
                  <span className="font-small text-sm opacity-90 font-SpaceGrotesk">
                    Key Contributor
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
