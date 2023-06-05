"use client"


export default function Slider() {
    useEffect(() => {
        const swiper = new Swiper(".swiper-container", {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 8,
          autoplay: {
            delay: 8000,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            640: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 3,
            },
          },
        });
    
        return () => {
          swiper.destroy();
        };
      }, []);

    return(
        <div id="testimonials-element" className="w-[90%]">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="swiper-container !overflow-hidden">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <blockquote className="bg-[#16161D] p-8 xl:p-16 rounded-xl mx-2 border-solid border border-[#39393F] ">
                  <p className="relative mt-4 text-gray-500">
                    <span className="text-xl">&ldquo;</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni assumenda officiis sit amet itaque eveniet
                    accusantium corporis tempora, soluta perspiciatis rerum,
                    ratione animi nemo inventore repellat, commodi in esse
                    quisquam.
                    <span className="text-xl">&rdquo;</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-lg mt-14">
                      <p className="font-medium font-SpaceGrotesk opacity-90 text-white text-xl">
                        Abheek Tripathy
                      </p>
                      <p className="font-medium font-SpaceGrotesk text-white opacity-70 text-lg">
                        Frontend Engineer
                      </p>
                    </div>
                  </div>
                </blockquote>
              </div>
              <div className="swiper-slide">
                <blockquote className="bg-[#16161D] p-8 xl:p-16 rounded-xl mx-2 border-solid border border-[#39393F] ">
                  <p className="relative mt-4 text-gray-500">
                    <span className="text-xl">&ldquo;</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni assumenda officiis sit amet itaque eveniet
                    accusantium corporis tempora, soluta perspiciatis rerum,
                    ratione animi nemo inventore repellat, commodi in esse
                    quisquam.
                    <span className="text-xl">&rdquo;</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-lg mt-14">
                      <p className="font-medium font-SpaceGrotesk opacity-90 text-white text-xl">
                        Abheek Tripathy
                      </p>
                      <p className="font-medium font-SpaceGrotesk text-white opacity-70 text-lg">
                        Frontend Engineer
                      </p>
                    </div>
                  </div>
                </blockquote>
              </div>
              <div className="swiper-slide">
                <blockquote className="bg-[#16161D] p-8 xl:p-16 rounded-xl mx-2 border-solid border border-[#39393F] ">
                  <p className="relative mt-4 text-gray-500">
                    <span className="text-xl">&ldquo;</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni assumenda officiis sit amet itaque eveniet
                    accusantium corporis tempora, soluta perspiciatis rerum,
                    ratione animi nemo inventore repellat, commodi in esse
                    quisquam.
                    <span className="text-xl">&rdquo;</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-lg mt-14">
                      <p className="font-medium font-SpaceGrotesk opacity-90 text-white text-xl">
                        Abheek Tripathy
                      </p>
                      <p className="font-medium font-SpaceGrotesk text-white opacity-70 text-lg">
                        Frontend Engineer
                      </p>
                    </div>
                  </div>
                </blockquote>
              </div>
              <div className="swiper-slide">
                <blockquote className="bg-[#16161D] p-8 xl:p-16 rounded-xl mx-2 border-solid border border-[#39393F] ">
                  <p className="relative mt-4 text-gray-500">
                    <span className="text-xl">&ldquo;</span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni assumenda officiis sit amet itaque eveniet
                    accusantium corporis tempora, soluta perspiciatis rerum,
                    ratione animi nemo inventore repellat, commodi in esse
                    quisquam.
                    <span className="text-xl">&rdquo;</span>
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-lg mt-14">
                      <p className="font-medium font-SpaceGrotesk opacity-90 text-white text-xl">
                        Abheek Tripathy
                      </p>
                      <p className="font-medium font-SpaceGrotesk text-white opacity-70 text-lg">
                        Frontend Engineer
                      </p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
            <div className="swiper-pagination !relative !bottom-0 mt-12"></div>
          </div>
        </div>
      </div>
    );
}