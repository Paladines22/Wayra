"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/app/globals.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Footer from "@/components/Footer";

const InspiracionIcon = ({ text, img }) => {
  return (
    <article className=" ml-3 flex my-auto shadow-md w-[35vw] sm:w-[200px] h-14 rounded-lg  border border-[#0C4049]">
      <div className="my-auto px-2">
        <Image width={35} height={35} src={img} alt="image" />
      </div>
      <div className="my-auto ">
        <p>{text}</p>
      </div>
    </article>
  );
};
const ActividadesIcon = ({ text, img }) => {
  return (
    <article className=" mx-2 flex my-8 shadow-xl w-[300px] h-14 lg:h-20 lg:w-[400px] rounded-lg  underline-offset-8 underline cursor-pointer">
      <div className="my-auto px-2">
        <Image width={40} height={40} src={img} alt="image" />
      </div>
      <div className="my-auto ">
        <p>{text}</p>
      </div>
    </article>
  );
};

function AboutPage() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section className=" text-center w-[100vw] sm:text-2xl   mx-auto">
      <div className="h-[25vh] lg:h-[35vh] w-full bg-nosotros mt-16 flex justify-center items-center">
        <h1 className="text-5xl lg:text-8xl text-white">NOSOTROS</h1>
      </div>

      <div className="flex items-center md:justify-center  flex-wrap">
        <div className="maw-w-content flex flex-col lg:gap-12 lg:mt-20 items-end">
          <div className="mx-4 mt-10 sm:mt-16 sm:w-[650px] lg:text-3xl font-thin text-justify sm:leading-10">
            <p>
              Sobre el macizo Colombiano, a orillas del cañón del río magdalena,
              en el municipio de Isnos- Huila, se encuentra Finca Turística
              WAYRA, un espacio natural y familiar que busca dar valor a la
              cultura y a la riqueza natural.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 relative sm:w-[80vw] lg:w-[650px] bg-[#fefcfa] shadow-lg pb-10 mx-auto lg:mx-0 lg:mr-4 bg-shadow-2xl p-2 rounded-xl">
            <h1 className="mx-auto text-2xl sm:text-4xl text-[#E09453] mt-6">
              INSPIRACIÓN
            </h1>
            <div className="flex gap-2 sm:gap-6">
              <div className="flex flex-col lg:gap-10 justify-around text-[#0C4049]">
                <InspiracionIcon img={"/vida.png"} text="Las Aves" />
                <InspiracionIcon img={"/cultura.png"} text="La Cultura" />
                <InspiracionIcon img={"/plant.png"} text="Naturaleza" />
                <InspiracionIcon img={"/clientes.png"} text="Experiencias" />
              </div>
              <div className="text-justify shadow-lg mr-3 sm:leading-9 bg-white font-thin my-auto mx-2 rounded-lg">
                <p className="m-2">
                  Nos inspira la naturaleza, el viento y todas las formas de
                  vida. Wayra es hogar de las aves y la cultura ancestral
                  Huilence. Nos mueve el corazón brindar y compartir
                  experiencias únicas con nuestros visitantes.
                </p>
                <p className="font-bold text-end mr-4">- Familia Paladines</p>
              </div>
            </div>
          </div>
        </div>
        {/**SWIPER */}
        <div className="lg:mt-20 lg:ml-24 bg-[#FAF9F9] shadow-2xl rounded-xl text-[#0C4049]">
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
            slidesPerView="auto"
            className="mySwiper my-2 sm:w-[30vw] "
          >
            <SwiperSlide className="bg-bottom  rounded-xl w-[500px] max-h-[500px]">
              <Image
                className=" rounded-xl"
                src="/about.png"
                width={300}
                height={300}
                alt="image Laberinto"
              />
            </SwiperSlide>
            <SwiperSlide className="max-w-[500vw] rounded-xl max-h-[500px]">
              <Image
                className=" rounded-xl "
                src="/laberinto3.jpg"
                width={300}
                height={300}
                alt="image Laberinto"
              />
            </SwiperSlide>
            <SwiperSlide className="max-w-[500vw] rounded-xl max-h-[500px]">
              <Image
                className=" rounded-xl "
                src="/laberinto2.jpg"
                width={300}
                height={300}
                alt="image Laberinto"
              />
            </SwiperSlide>
            <SwiperSlide className="max-w-[500vw] rounded-xl max-h-[500px]">
              <Image
                className=" rounded-md "
                src="/laberinto4.jpg"
                width={300}
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
          <div className="  rounded-lg  sm:w-[700px]  ">
            <p className="p-2 justify-center leading-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              repellendus fuga perspiciatis laboriosam? Delectus temporibus.
              repellendus fuga perspiciatis laboriosam.
            </p>
          </div>
        </div>
      </div>
      {/** ACTIVIDADES */}
      <div className="w-[85vw] lg:mt-20 sm:w-[800px] lg:w-[1200px]   mx-auto flex flex-col items-center">
        <h2 className="text-2xl sm:text-4xl text-[#0C4049]">
          OTRAS ACTIVIDADES
        </h2>
        <div className="border py-8 my-20 rounded-lg flex flex-wrap justify-center sm:w-[700px] shadow-2xl lg:w-[1000px] ">
          <ActividadesIcon img="/senderismo.png" text="Senderismo" />
          <ActividadesIcon img="/vida.png" text="Avistamiento de aves" />
          <ActividadesIcon img="/cumbia.png" text="Muestras Culturales" />
          <ActividadesIcon img="/montanas.png" text="Vistas Increhíbles" />
          <ActividadesIcon img="/pachamanca.png" text="Gastonomía Tipica" />
          <ActividadesIcon
            img="/el-planeta-tierra.png"
            text="Conexión Natural"
          />
        </div>
      </div>

      <div className="my-20 text-[#0C4049] ">
        <p>Agradecimientos especiales a:</p>
        <div className="flex justify-center my-4">
          <Image
            src="/patrocinio.jpg"
            width={400}
            height={20}
            alt="patrocinios"
          />
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default AboutPage;
