import { useCurrencyData } from "@/context/CurrencyDataProvider";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CoinsCard from "../ui/CoinsCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

const AllCoins = () => {
  const { trendingCoinsList } = useCurrencyData();

  return (
    <div className="p-4 bg-white flex flex-col gap-4 xl:w-[calc(100vw-10px)] xl:mt-12 xl:absolute xl:left-0 xl:p-[50px]">
      <div className="flex flex-col gap-1 sm:gap-4">
        <p className="text-[22px] font-semibold">You May Also Like</p>

        <div className="relative">
          <Swiper
            slidesPerView={"auto"}
            loop="true"
            navigation={{
              prevEl: ".swiper-button-prev1",
              nextEl: ".swiper-button-next1",
            }}
            modules={[Navigation]}
            className="mySwiper"
            spaceBetween={10}
          >
            {trendingCoinsList?.map((item, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <CoinsCard item={item} key={index} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-next1 absolute right-[-10px] top-[40%] z-10 bg-white border rounded-full ">
            <MdKeyboardArrowRight size={32} />
          </button>
          <button className="swiper-button-prev1 absolute left-[-10px] top-[40%] z-10 bg-white border rounded-full hidden md:block">
            <MdKeyboardArrowLeft size={32} />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-1 sm:gap-4">
        <p className="text-[22px] font-semibold">You May Also Like</p>

        <div className="relative">
          <Swiper
            slidesPerView={"auto"}
            loop="true"
            navigation={{
              prevEl: ".swiper-button-prev2",
              nextEl: ".swiper-button-next2",
            }}
            modules={[Navigation]}
            className="mySwiper"
            spaceBetween={10}
          >
            {trendingCoinsList?.map((item, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <CoinsCard item={item} key={index} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="swiper-button-next2 absolute right-[-10px] top-[40%] z-10 bg-white border rounded-full ">
            <MdKeyboardArrowRight size={32} />
          </button>
          <button className="swiper-button-prev2 absolute left-[-10px] top-[40%] z-10 bg-white border rounded-full hidden md:block">
            <MdKeyboardArrowLeft size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCoins;
