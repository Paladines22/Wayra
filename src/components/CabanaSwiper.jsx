"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

import { Autoplay, Navigation, Thumbs } from "swiper/modules";
const images = [
  "/cabana2.jpg",
  "/cabana4.jpg",
  "/cabana3.jpg",
  "/cabana7.jpg",
  "/cabana5.jpg",
  "/cabana6.jpg",
  "/cabana8.jpg",
  "/cabana1.jpg",
];

export default function CabanaSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className=" bg-white my-4 sm:ml-4">
      <div className=" max-w-[95vw] lg:max-w-[50vw] ">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#111112",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Thumbs, Autoplay]}
          className=""
        >
          {images.map((image, index) => (
            <SwiperSlide className="" key={index}>
              <Image
                src={image}
                alt="image"
                className="block h-full w-full object-cover rounded-lg"
                width={600}
                height={200}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/** Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className="thumbs mt-3 h-40 w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide className="" key={index}>
              <button className="flex h-full w-full items-center justify-center">
                <Image
                  src={image}
                  alt={image.alt}
                  className="block h-full w-full object-cover"
                  width={700}
                  height={300}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
