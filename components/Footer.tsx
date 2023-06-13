/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className="relative z-50 bg-[#17171D] md:pt-32 pt-16 md:mt-32 pb-10 lg:pt-[120px] lg:pb-20 md:rounded-t-[75px] rounded-t-[40px]">
      <div className="container mx-auto w-5/6">
        <div className="-mx-4 flex flex-wrap justify-around">
          <div className="w-full px-4 sm:w-2/3 lg:w-6/12">
            <div className="mb-10 w-full">
              <a href="/" className="mb-6 inline-block max-w-[160px]">
                <img
                  src="images/intelowlwhite.png"
                  alt="logo"
                  className="max-w-full"
                />
              </a>
              <p className="text-body-color mb-7 text-base text-white">
                Sed ut perspiciatis undmnis is iste natus error sit amet
                voluptatem totam rem aperiam.
              </p>
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
                    href="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    SaaS Development
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    Our Products
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-body-color hover:text-primary mb-2 inline-block text-base leading-loose"
                  >
                    User Flow
                  </a>
                </li>
                <li>
                  <a
                    href="/"
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
  );
}
