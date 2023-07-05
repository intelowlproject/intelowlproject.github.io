/* eslint-disable @next/next/no-img-element */
"use client";

import { TestimonialData } from "../constants/testimonialsdata";
import { Sponsordata } from "../constants/sponsordata";
import Link from "next/link";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface sliderProps {
  isTestimonial: boolean;
}

export default function Slider(props: sliderProps) {
  const { isTestimonial } = props;

  return (
    <>
      {isTestimonial ? (
        <div id="testimonials-element" className="w-[90%]">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <Swiper
              spaceBetween={25}
              slidesPerView={3}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="h-full"
            >
              {TestimonialData.map((testimonial, index) => {
                return (
                  <div key={index} className="swiper-slide h-full bg-white">
                    <SwiperSlide className="bg-[#16161D] !h-[30rem] p-8 xl:p-16 rounded-xl mx-2 border-solid border border-[#39393F]">
                      <p className="relative mt-4 text-gray-500">
                        <span className="text-xl">&ldquo;</span>
                        {testimonial.review}
                        <span className="text-xl">&rdquo;</span>
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="text-lg mt-14">
                          <p className="font-medium font-SpaceGrotesk opacity-90 text-white text-xl">
                            {testimonial.name}
                          </p>
                          <p className="font-medium font-SpaceGrotesk text-white opacity-70 text-lg">
                            {testimonial.designation}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      ) : (
        <div id="sponsor-element" className="w-[90%]">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <Swiper
              spaceBetween={25}
              slidesPerView={3}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              {Sponsordata.map((sponsor, index) => {
                return (
                  <div key={index} className="swiper-slide">
                    <SwiperSlide className="bg-[#16161D] !h-[35rem] p-8 xl:p-16 rounded-xl mx-2 border-solid border border-[#39393F] flex flex-col justify-center items-center space-y-7 ">
                      <p className="relative mt-4 text-gray-500">
                        {sponsor.companydesc}
                      </p>
                      <Link href={sponsor.companylink}>
                        <img
                          className="items-center justify-center "
                          src={sponsor.companylogo}
                          width={250}
                          height={50}
                          alt="hj"
                        ></img>
                      </Link>
                      <div className="flex items-center gap-4">
                        <div className="text-lg ">
                          <p className="font-medium font-SpaceGrotesk opacity-90 text-white text-lg">
                            {sponsor.companyname}
                          </p>
                          <p className="font-medium font-SpaceGrotesk text-white opacity-70 text-md">
                            {sponsor.companylevel}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}
