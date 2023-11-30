"use client";
import { useState, useEffect, useRef } from "react";

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

function TabsComponent() {
  const [selectedTab, setSelectedTab] = useState(0);

  const azulejoImages = [
    "/azulejo1.jpg",
    "/azulejo2.jpg",
    "/azulejo3.jpg",
    "/azulejo4.jpg",
    "/nidos2.jpg",
    "/azulejo5.jpg",
  ];
  const colibriImages = [
    "/nidos1.jpg",
    "/colibri1.jpg",
    "/colibri2.jpg",
    "/colibri3.jpg",
    "/colibri4.jpg",
  ];
  const canarioImages = [
    "/canario1.jpg",
    "/canario2.jpg",
    "/canario3.jpg",
    "/nidos2.jpg",
  ];
  const cardenalImages = [
    "/cardenal1.jpg",
    "/cardenal2.jpg",
    "/cardenal3.jpg",
    "/nidos2.jpg",
  ];

  const items = [
    {
      title: "Colibrí",
      content: (
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
          className="mySwiper rounded-lg w-[95vw]"
        >
          {colibriImages.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                className="border rounded-xl bg-cover"
                src={img}
                width={1200}
                height={300}
                alt="image Laberinto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ),
    },

    {
      title: "Azulejo",
      content: (
        <Swiper
          style={{
            "--swiper-navigation-color": "#fafafa",
            "--swiper-pagination-color": "#fafafa",
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-lg"
        >
          {azulejoImages.map((img, index) => (
            <SwiperSlide key={index} className="bg-cover">
              <Image
                className="border rounded-xl"
                src={img}
                width={1200}
                height={300}
                alt="Azulejo"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ),
    },
    {
      title: "Cardenal",
      content: (
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
          className="mySwiper rounded-lg bg-cover"
        >
          {cardenalImages.map((img, index) => (
            <SwiperSlide key={index} className="bg-cover">
              <Image
                className="border rounded-xl"
                src={img}
                width={1200}
                height={300}
                alt="Cardenal"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ),
    },
    {
      title: "Canario",
      content: (
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
          className="mySwiper rounded-lg"
        >
          {canarioImages.map((img, index) => (
            <SwiperSlide key={index} className="bg-cover">
              <Image
                className="border rounded-xl"
                src={img}
                width={1200}
                height={300}
                alt="Canario"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ),
    },
  ];

  return (
    <div className=" flex w-full justify-center items-center h-full mb-10">
      <div className=" flex flex-col  w-full">
        <div className="bg-white  lg:p-2 rounded-xl ">
          {items.map((item, index) => (
            <div
              className={`${selectedTab === index ? " " : "hidden"}`}
              key={index}
            >
              {item.content}
            </div>
          ))}
        </div>
        <div className=" p-1 rounded-xl flex justify-between items-center gap-x-2 font-bold text-[#216974]">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(index)}
              className={` w-full py-2  sm:py-5 px-2 underline underline-offset-8 rounded-xl text-center hover:text-[#f0caa9]  focus:text-[#E09453] ${
                selectedTab === index ? "  text-[#E09453]" : ""
              }`}
            >
              <p className="lg:text-3xl"> {item.title}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TabsComponent;
