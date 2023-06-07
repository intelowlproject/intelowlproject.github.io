"use client"

import { TestimonialData } from "../constants/testimonialsdata";
import { Sponsordata } from "../constants/sponsordata";
import { useEffect } from "react";
import Swiper from "swiper";
import Image from "next/image";

interface sliderProps {
    isTestimonial: boolean;
}

export default function Slider(props: sliderProps) {
  const { isTestimonial } = props;
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
      <>
      {isTestimonial ? (
        <div id="testimonials-element" className="w-[90%]">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="swiper-container !overflow-hidden">
            <div className="swiper-wrapper">
              {TestimonialData.map((testimonial,index)=>{
                return(
                  <div key= {index}className="swiper-slide">
                <blockquote className="bg-[#16161D] p-8 xl:p-16 rounded-xl mx-2 border-solid border border-[#39393F] ">
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
                </blockquote>
              </div>
                );
              })}
            </div>
            <div className="swiper-pagination !relative !bottom-0 mt-12"></div>
          </div>
        </div>
      </div>
      ): (
        <div id="sponsor-element" className="w-[90%]">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="swiper-container !overflow-hidden">
            <div className="swiper-wrapper">
              {Sponsordata.map((sponsor,index)=>{
                return(
                  <div key={index} className="swiper-slide">
                <blockquote className="bg-[#16161D] p-8 xl:p-16 rounded-xl mx-2 border-solid border border-[#39393F] flex flex-col justify-center items-center space-y-7 ">
                  <p className="relative mt-4 text-gray-500">
                  {sponsor.companydesc}
                  </p>
                  <Image
                  className="items-center justify-center "
                    src={sponsor.companylogo}
                    width={250}
                    height={50}
                    alt="hj"
                  >
                  </Image>
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
                </blockquote>
              </div>
                );
              })}
            </div>
            <div className="swiper-pagination !relative !bottom-0 mt-12"></div>
          </div>
        </div>
      </div>
      )}
      </>

    );
}