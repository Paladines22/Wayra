"use client";
import React from "react";
import RoomFeatures from "../components/RoomFeatures";
import { Caveat } from "next/font/google";
import CabanaSwiper from "@/components/CabanaSwiper";
import IngresosHospedaje from "@/components/IngresosHospedaje";
import TabsComponent from "@/components/TabsComponent";
import MotionAnimationLeft from "@/components/MotionAnimationLeft";
import MotionAnimationRight from "@/components/MotionAnimationRigth";
import ReservaButton from "@/components/ReservaButton";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

function Hospedaje() {
  return (
    <section className="pt-8 sm:pt-4 h-max w-full " id="hospedaje">
      <MotionAnimationLeft
        content={
          <h1 className="text-center lg:text-start lg:ml-24 lg:text-7xl py-4  text-4xl text-[#1faeb0]">
            HOSPEDAJE
          </h1>
        }
      ></MotionAnimationLeft>
      <div className="w-[98vw]   sm:w-[90vw] h-max-content mx-auto  bg-cover bg-right">
        <MotionAnimationRight
          content={
            <article className="my-2 mb-20 flex justify-center shadow-2xl flex-wrap bg-white border rounded-lg">
              <div>
                <CabanaSwiper />
              </div>
              <div className="my-auto flex flex-col  rounded-lg p-2  sm:p-6 sm:gap-8 mx-auto">
                <div className="rounded-xl bg-[#FAF9F9] shadow-md">
                  <div className="mx-auto max-w-[35vw]  rounded-md">
                    <h1
                      className={`text-center my-2 sm:my-4 text-4xl  sm:text-7xl ${caveat.className}`}
                    >
                      Cabaña La Mirla
                    </h1>
                    <p className=" p-1 sm:p-4 text-lg font-thin sm:text-xl ">
                      Esta cabaña está diseñada especialmente para disfrutar del
                      mayor confort, relajación y privacidad. Disfruta aquí de
                      la mejor vista del cañon del Magdalena. Pregunta por
                      nuestra decoración tematica para fechas especiales.
                    </p>
                  </div>
                  <div className="px-2 flex justify-center gap-2 sm:gap-4">
                    <div className="flex flex-col gap-0 sm:gap-2">
                      <RoomFeatures text="Mirador Privado" img="/mirador.png" />
                      <RoomFeatures
                        text="Jacuzzi climatizado con Hidromasaje"
                        img="/jacuzzi.png"
                      />
                      <RoomFeatures text="Baño Privado" img="/bano.png" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <RoomFeatures text="Desayuno" img="/desayuno.png" />
                      <RoomFeatures text="Balcón Privado" img="/balcon.png" />
                      <RoomFeatures
                        text="Botella vino artesanal"
                        img="/vino.png"
                      />
                    </div>
                  </div>
                  <ReservaButton />
                </div>
                <IngresosHospedaje />
              </div>
            </article>
          }
        ></MotionAnimationRight>
        <MotionAnimationLeft
          content={
            <article className="my-6 flex shadow-2xl justify-center bg-white border rounded-lg">
              <div className="flex justify-center flex-wrap ml-4  w-full">
                <div className="sm:max-w-[50vw] rounded-xl w-[98vw] ">
                  {/** Tab Component */}
                  <TabsComponent />
                </div>
                <div className="my-auto flex flex-col max-w-[35vw]  rounded-lg py-6 gap-6 mx-auto">
                  <div className="rounded-xl lg:mx-2 shadow-md bg-[#FAF9F9]  ">
                    <div className=" rounded-md ">
                      <h1
                        className={`text-center my-2  text-4xl  sm:text-7xl ${caveat.className}`}
                      >
                        Hospedaje tipo Nidos
                      </h1>
                      <p className="font-thin p-2 sm:p-4 text-lg lg:text-xl ">
                        Este hospedaje está inspirado en la maravillosa avifauna
                        de nuestra región, su diseño arquitectónico busca dar
                        apariencia y forma de nido de ave a cada habitación.
                        Combinado con materiales artesanales, plantas y un
                        magnifico entorno natural, se convierte en una
                        experiencia imperdible.
                      </p>
                    </div>
                    <div className="px-2 flex justify-center gap-2 sm:gap-20">
                      <div className="flex flex-col gap-2">
                        <RoomFeatures
                          text="Bebida de Bienvenida"
                          img="/drink.png"
                        />
                        <RoomFeatures text="Zona de Fogata" img="/fire.png" />
                        <RoomFeatures text="Baño Social" img="/bano.png" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <RoomFeatures text="Desayuno" img="/desayuno.png" />
                        <RoomFeatures text="Balcón Privado" img="/balcon.png" />
                      </div>
                    </div>
                    <div className="flex justify-center my-2 ">
                      <ReservaButton />
                    </div>
                  </div>
                  <IngresosHospedaje />
                </div>
              </div>
            </article>
          }
        ></MotionAnimationLeft>
      </div>
    </section>
  );
}

export default Hospedaje;
