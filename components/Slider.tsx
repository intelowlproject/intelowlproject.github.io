/* eslint-disable @next/next/no-img-element */
"use client";

import { TestimonialData } from "../constants/testimonialsdata";
import { Sponsordata } from "../constants/sponsordata";
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, Navigation]);

interface SliderProps {
  isTestimonial: boolean;
}

export default function Slider(props: SliderProps) {
  const { isTestimonial } = props;

  return (
    <>
      {isTestimonial ? (
        <div id="testimonials-element" className="w-[100%] relative">
          <div className="mx-auto max-w-screen-xl py-16 sm:px-6 lg:px-8">
            <Swiper
              spaceBetween={25}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              className="h-full"
            >
              {TestimonialData.map((testimonial, index) => (
                <SwiperSlide key={index} className="bg-[#16161D] md:!h-[30rem] lg:!h-[30rem] p-8 xl:p-8 rounded-xl mx-2 border-solid border border-[#39393F]">
                  <div className="h-full w-full flex flex-col justify-between">
                    <p className="relative mt-4 text-gray-500">
                      <span className="text-xl">&ldquo;</span>
                      {testimonial.review.length <= 300 ? testimonial.review : testimonial.review.slice(0, 300) + "..."}
                      <span className="text-xl">&rdquo;</span>
                    </p>
                    <div className="flex flex-row gap-4 text-left items-start">
                      <figcaption className="flex justify-center items-center space-x-3">
                        <img
                          className="w-12 h-12 rounded-full"
                          src="/images/favicon.png"
                          alt="profile picture"
                        />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <p className="font-medium font-SpaceGrotesk opacity-90 text-white text-xl">
                            {testimonial.name}
                          </p>
                          <p className="font-medium font-SpaceGrotesk text-white opacity-70 text-md text-left">
                            {testimonial.designation}
                          </p>
                        </div>
                      </figcaption>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      ) : (
        <div id="sponsor-element" className="w-[90%]">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 relative">
            <Swiper
              spaceBetween={25}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
              }}
              className="h-full"
            >
              {Sponsordata.map((sponsor, index) => {
                return (
                  <div key={index} className="swiper-slide">

                    <SwiperSlide className="bg-[#16161D] md:!h-[35rem] p-8 xl:p-16 rounded-xl mx-2 border-solid border border-[#39393F]">

                      <div className="flex flex-col items-center justify-around space-y-7 ">

                        <p className="relative  mt-4 text-gray-500">
                          {sponsor.companydesc}
                        </p>
                        <Link href={sponsor.companylink}>
                          <img
                            className="items-center justify-center self-center"
                            src={sponsor.companylogo}
                            width={200}
                            height={50}
                            alt="sponsor-image"
                          ></img>
                        </Link>
                        <div className="flex items-center gap-4">
                          <div className="text-lg text-center">
                            <p className="font-medium font-SpaceGrotesk opacity-90 text-white text-lg">
                              {sponsor.companyname}
                            </p>
                            <p className="font-medium font-SpaceGrotesk text-white opacity-70 text-md">
                              {sponsor.companylevel}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
            <div className="swiper-button-next ssn"></div>
            <div className="swiper-button-prev ssp"></div>
          </div>
        </div>
      )}
    </>
  );
}
