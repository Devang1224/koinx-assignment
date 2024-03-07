import React, { useRef } from "react";
import KeyEventCard from "./KeyEventCard";

import { MdKeyboardArrowRight } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

const KeyEventsCarousel = () => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={"auto"}
        loop="true"
        navigation={{
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {[1, 2, 3, 4].map((item, index) => (
          <SwiperSlide key={index} style={{ width: "auto" }}>
            <KeyEventCard />
          </SwiperSlide>
        ))}

        <button className="swiper-button-next p-2 absolute right-[10px] top-[40%] z-10 bg-white border rounded-full hidden md:block">
          <MdKeyboardArrowRight size={32} />
        </button>
      </Swiper>
    </div>
  );
};

export default KeyEventsCarousel;
