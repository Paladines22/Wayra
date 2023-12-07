"use client";
import { React, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import MotionAnimationRight from "@/components/MotionAnimationRigth";
import MotionAnimationBottom from "@/components/MotionAnimationBottom";

const comments = [
  {
    userName: "Camilo Name",
    comment:
      "Lorem sisokd uehreir ausha ierjer, lore , por lo meno, siheiden.Lorem sisokd uehreir ausha ierjer, lore , por lo meno, siheiden",
    img: "/user1.png",
  },
  {
    userName: "Laura Name",
    comment:
      "Lorem sisokd uehreir ausha ierjer, lore , por lo meno, siheiden. Lorem sisokd uehreir ausha ierjer, lore , por lo meno, siheiden",
    img: "/user2.png",
  },
  {
    userName: "Rodrigo Name",
    comment:
      "Lorem sisokd uehreir ausha ierjer, lore , por lo meno, siheiden. Lorem sisokd uehreir ausha ierjer, lore , por lo meno, siheiden",
    img: "/user1.png",
  },
  {
    userName: "Carlos Name",
    comment:
      "Lorem sisokd uehreir ausha ierjer, lore , por lo meno, siheiden. Lorem sisokd uehreir ausha ierjer, lore , por lo meno, siheiden",
    img: "/user3.png",
  },
];

function Comments() {
  return (
    <section className=" max-w-[90vw] lg:max-w-[1500px] my-8 lg:my-32 mx-auto  lg:h-[70vh]">
      <MotionAnimationRight
        content={
          <h1 className="flex justify-end py-8 text-4xl lg:text-8xl text-[#1faeb0]">
            ¿Qué dicen nuestros clientes?
          </h1>
        }
      />
      <MotionAnimationBottom
        content={
          <article className="  lg:py-4  h-[55vh] my-20  lg:my-20  rounded-xl">
            <Swiper
              style={{
                "--swiper-navigation-color": "#216974",
              }}
              centeredSlides={true}
              loop={true}
              slidesPerView={"auto"}
              navigation={true}
              modules={[Navigation]}
              className="my-16"
            >
              {comments.map((user, index) => (
                <SwiperSlide
                  className="max-w-[80vw] shadow-2xl mx-20 lg:max-w-[370px] lg:max-h-[480px] flex flex-col gap-4 bg-white mb-10git a  rounded-xl"
                  key={index}
                >
                  <div className="flex flex-col gap-2 relative top-2">
                    <h2 className="text-3xl text-center text-[#0C4049]">
                      {user.userName}
                    </h2>
                    <p className=" text-lg p-2 text-center">{user.comment}</p>
                    <div className="mx-auto ">
                      <Image
                        src={user.img}
                        width={150}
                        height={100}
                        alt="user-image"
                        className="rounded-full mb-18"
                      />
                    </div>
                    <div className="mx-auto absolute top-[300px] left-20 lg:left-20 ">
                      <Image
                        src="/clasificacion.png"
                        width={130}
                        height={30}
                        alt="comment-icon"
                        className=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </article>
        }
      />
    </section>
  );
}

export default Comments;
