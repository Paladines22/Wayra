"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../app/globals.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function SenderoSwiper() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="max-w-[90vw] sm:max-w-[30vw]">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fafafa",
          "--swiper-pagination-color": "#fafafa",
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper "
      >
        <SwiperSlide>
          <Image
            className="border rounded-xl"
            src="/sendero.jpg"
            width={500}
            height={300}
            alt="image Laberinto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="border rounded-xl"
            src="/gallery10.jpg"
            width={500}
            height={300}
            alt="image Laberinto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="border rounded-xl"
            src="/sendero3.jpg"
            width={500}
            height={300}
            alt="image Laberinto"
          />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}

export default SenderoSwiper;
