"use client";
import React from "react";
import { Caveat, Tajawal } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import BgButton from "@/components/BgButton";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const tajawal = Tajawal({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../app/globals.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MotionAnimationBottom from "@/components/MotionAnimationBottom";
import SocialMediaIcons from "@/components/SocialMediaIcons";

function Home() {
  return (
    <section
      className="pt-10
      h-[100vh] w-[100vw] z-100 text-center relative flex flex-col justify-center"
      id="/"
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#eee",
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center w-[100vw]">
            <div className="w-[100vw] brightness-50 h-[100vh] relative">
              <Image src={"/home.jpg"} alt="image-home" fill />
            </div>
            <div className="flex flex-col absolute  gap-4">
              <div className="w-[70vw] font-bold lg:w-[23vw] mx-auto relative top-14">
                <Image
                  width={80}
                  height={30}
                  src="./wayra-logo.svg"
                  alt="Wayra Logo"
                  className="mx-auto"
                />
                <p
                  className={`text-4xl   sm:text-5xl mt-4 relative left-9 sm:left-14 bottom-28  sm:bottom-36 text-white ${tajawal.className}`}
                >
                  Finca <span className="ml-12 sm:ml-20">Turística</span>
                </p>
              </div>
              <div
                className={`${caveat.className} text-white text-3xl sm:text-5xl flex w-[90vw] lg:w-[1000px] mx-auto justify-center gap-4 sm:gap-48 mb-14`}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-start"
                >
                  <h2 className="">Restaurante</h2>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <h2 className="">Hospedaje</h2>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.5 }}
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-end"
                >
                  <h2 className=" ">Eventos</h2>
                </motion.div>
              </div>
              {/** social media icons  */}
              <div className="w-[200px] relative top-36 mx-auto flex gap-8 h-[40px]">
                <SocialMediaIcons />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center w-[100vw]">
            <div className="w-[100vw] brightness-50 h-[100vh] relative">
              <Image src={"/home2.jpg"} alt="image-home" fill />
            </div>
            <div className="flex flex-col absolute gap-8 ">
              <div className="w-[70vw] lg:w-[23vw] mx-auto relative top-14 ">
                <Image
                  width={500}
                  height={30}
                  src="./wayra-logo.svg"
                  alt="Wayra Logo"
                  className="mx-auto"
                />
                <p
                  className={`text-4xl sm:text-5xl mt-4 relative left-9 sm:left-14 bottom-28  sm:bottom-36 text-white ${tajawal.className}`}
                >
                  Finca <span className="ml-12 sm:ml-20">Turística</span>
                </p>
              </div>
              <div
                className={`${caveat.className} text-white text-3xl sm:text-5xl flex w-[90vw] lg:w-[1000px] mx-auto justify-center gap-4 sm:gap-48 mb-14`}
              >
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: +50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-start"
                >
                  <h2 className="">Conexión</h2>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1 }}
                  variants={{
                    hidden: { opacity: 0, y: +50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <h2 className=" ">Cultura</h2>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 1.5 }}
                  variants={{
                    hidden: { opacity: 0, y: +50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="text-end"
                >
                  <h2 className=" ">Confort</h2>
                </motion.div>
              </div>
              <BgButton text="CONTACTAR" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex items-center justify-center w-[100vw]">
            <div className="w-[100vw] brightness-50 h-[100vh] relative">
              <Image src={"/home2.jpg"} alt="image-home" fill />
            </div>
            <div className="flex flex-col absolute filter-none gap-8 z-20">
              <div className="w-[70vw] lg:w-[23vw]  mx-auto relative top-14">
                <Image
                  width={500}
                  height={30}
                  src="./wayra-logo.svg"
                  alt="Wayra Logo"
                  className="mx-auto"
                />
                <p
                  className={`text-4xl  sm:text-5xl mt-4 relative left-9 sm:left-14 bottom-24  sm:bottom-36 text-white ${tajawal.className}`}
                >
                  Finca <span className="ml-12  sm:ml-20">Turística</span>
                </p>
              </div>
              <div className="mx-auto">
                <MotionAnimationBottom content={<BgButton text="TOURS" />} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className=" z-10 bottom-6 left-6 fixed cursor-pointer">
        <motion.div whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}>
          <a href="https://Wa.me/3158395109 " target="_blank">
            <button>
              <Image
                src="/whatsapp-logo.png"
                alt="icon"
                width={80}
                height={80}
              />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
