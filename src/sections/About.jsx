"use client";
import { React, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

function About() {
  return (
    <div className="w-[100vw] h-max mx-auto  sm:h-max bg-[#faf9f9] font-thin mx-10 ">
      <Swiper
        style={{
          "--swiper-navigation-color": "#0C4049",
        }}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        navigation={true}
        modules={[Navigation]}
        className="sm:mx-8 max-w-[95vw]"
      >
        <SwiperSlide className="lg:w-[800px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="px-4 justify-center w-[80vw] lg:w-[600px] mt-10  mx-20  flex flex-col gap-4 h-[500px] "
          >
            <div className="mx-auto ">
              <Image
                className="object-cover mx-auto w-[220px] rounded-[100%]"
                width={160}
                height={160}
                src="/estatua.png"
                alt="Estatua"
              />
            </div>
            <div className="p-4">
              <p className=" text-2xl my-4">
                Muy cerca a nosotros podrás conectar con los impresionantes
                vestigios arqueologicos de las culturas de{" "}
                <span className="text-[#E09453] font-bold">San Agustin</span> y{" "}
                <span className="text-[#0C4049] font-bold">
                  San José de Isnos
                </span>
              </p>
            </div>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide className="lg:w-[800px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="px-4 justify-center lg:w-[600px] mt-10  w-[80vw] lg:w-[25vw] mx-20  flex flex-col gap-4 h-[500px]"
          >
            <div className=" mx-auto">
              <Image
                className=" object-cover w-[220px] rounded-[80%] "
                width={140}
                height={140}
                src="/andina.png"
                alt="Culturas Andinas"
              />
            </div>
            <div className="p-4">
              <p className="text-2xl my-4">
                Las{" "}
                <span className="text-[#E09453] font-bold">
                  {" "}
                  místicas culturas
                </span>{" "}
                pre hispanas que habitaron{" "}
                <span className="text-[#0C4049] font-bold">
                  Las Cordilleras de los Andes;
                </span>{" "}
                hoy inspiran nuestra identidad, lo más importante que tenemos
                como pueblos.
              </p>
            </div>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide className="lg:w-[800px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="px-4 justify-center  lg:w-[600px] mt-10 w-[80vw] mx-20  flex flex-col gap-4 h-[500px]"
          >
            <div className=" mx-auto">
              <Image
                className=" object-cover w-[200px] rounded-[80%] "
                width={160}
                height={160}
                src="/wayra.png"
                alt="Wayra Tata"
              />
            </div>
            <div className="p-4">
              <p className=" text-2xl my-4">
                <span className=" text-[#E09453] font-bold"> Wayra </span> (
                palabra Quechua ). En la cosmovisión Andina tiene una simbología
                muy profunda, se asocia a una poderosa divinidad,{" "}
                <span className=" text-[#0C4049] font-bold">Wayra Tata</span>{" "}
                quien dirige viento y huracanes.
              </p>
            </div>
          </motion.div>
        </SwiperSlide>

        <SwiperSlide className="lg:w-[800px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="px-4 mt-10 w-[80vw] lg:w-[600px] mx-20 justify-center  flex flex-col gap-4 h-[500px]"
          >
            <div className="mx-auto max-w-[600px]">
              <Image
                className="object-cover mx-auto w-[220px] rounded-[100%]"
                width={160}
                height={160}
                src="/ave.png"
                alt=" Ave"
              />
            </div>
            <div className="p-4">
              <p className=" text-2xl my-4">
                <span className="text-[#E09453] font-bold">WAYRA</span> es hogar
                de las aves. Promovemos su{" "}
                <span className="text-[#0C4049] font-bold">
                  cuidado y protección.
                </span>{" "}
                Y diseñamos espacios que dan importancia a esas bellas especies
                que habitan nuestra región.
              </p>
            </div>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default About;
