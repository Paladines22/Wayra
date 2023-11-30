import React from "react";
import Image from "next/image";
import { Caveat } from "next/font/google";
import LaberintoSwiper from "@/components/LaberintoSwiper";
import SenderoSwiper from "@/components/SenderoSwiper";
import MotionAnimationLeft from "@/components/MotionAnimationLeft";
import MotionAnimationRight from "@/components/MotionAnimationRigth";
import MotionAnimationBottom from "@/components/MotionAnimationBottom";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
});

function Atractivos() {
  return (
    <section className="h-max" id="atractivos">
      <MotionAnimationLeft
        content={
          <h1 className="text-center lg:text-start text-4xl lg:text-8xl ml-12 text-[#0C4049]">
            NUESTROS ATRACTIVOS
          </h1>
        }
      ></MotionAnimationLeft>
      <div className="flex flex-col items-center">
        <div className="w-[90vw]  sm:w-[80vw] rounded-lg">
          <MotionAnimationLeft
            content={
              <h1
                className={`text-center  sm:mr-14  lg:my-4 sm:mb-4 z-10 text-black  text-4xl sm:text-6xl ${caveat.className}`}
              >
                Laberinto Mirador Gigante
              </h1>
            }
          ></MotionAnimationLeft>
          <MotionAnimationRight
            content={
              <div className="flex flex-wrap justify-center ">
                <LaberintoSwiper />
                <div className="w-full sm:max-w-[600px] my-10  sm:m-6 shadow-xl bg-white p-1 sm:p-4 rounded-lg ">
                  <h2 className="text-2xl  sm:text-4xl text-center  text-[#216974] ">
                    Primer Laberinto Mirador del Huila
                  </h2>
                  <ul className="text-xl  font-thin  my-8">
                    <li>
                      <div className="flex my-4 text-lg shadow-md sm:text-2xl sm:p-2 text-end gap-6 border rounded-md border-[#0C4049] ">
                        <p>
                          Formado por calles y encrucijadas complejas que te
                          harán emocionar. Sus caminos están creados con
                          plantas.
                        </p>
                        <Image
                          width={50}
                          height={40}
                          src="/plant.png"
                          alt="planta-icon"
                          className=" h-12 my-auto"
                        />
                      </div>
                    </li>
                    <div className=" my-4 flex gap-4 shadow-md  text-lg sm:text-2xl border p-2 rounded-md border-[#0C4049] ">
                      <li className="text-end">
                        El propósito es que superes los obstáculos y halles la
                        salida. Tal y como pasa en la vida; en ocasiones tomamos
                        caminos equivocados, que finalmente nos llevan a
                        reconocer el rumbo correcto, y a encontrar una salida.
                      </li>
                      <Image
                        width={60}
                        height={30}
                        src="/innovador.png"
                        alt="idea-icon"
                        className=" h-14 my-auto"
                      />
                    </div>
                    <li>
                      <div className="flex shadow-md  text-end text-lg sm:text-2xl gap-6 p-2 border rounded-md border-[#0C4049] ">
                        <p>
                          Al alcanzar a la meta te hallaras con una espectacular
                          vista a las montañas, bañadas por la majestuosidad del
                          río magdalena, ¡absolutamente mágico!
                        </p>
                        <Image
                          width={60}
                          height={30}
                          src="/success.png"
                          alt="meta-icon"
                          className=" h-12 my-auto"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            }
          ></MotionAnimationRight>
        </div>

        <div className=" w-[80vw]  rounded-lg">
          <MotionAnimationRight
            content={
              <h1
                className={` z-10 text-black  mb-6 text-end text-4xl sm:text-6xl ${caveat.className}`}
              >
                Sendero Cantos de Colores
              </h1>
            }
          />
          <MotionAnimationBottom
            content={
              <div className="flex flex-wrap justify-center gap-14 ">
                <div className="max-w-[600px] bg-white sm:m-6 p-2 shadow-xl  rounded-lg font-thin my-auto">
                  <h2 className="text-2xl sm:text-4xl text-[#216974]">
                    Una representación artística de la avifauna de nuestra
                    región
                  </h2>
                  <ul className="text-xl my-20 ">
                    <li>
                      <div className="flex my-4 text-start text-lg  sm:text-2xl gap-6 border p-2 rounded-md border-[#0C4049]">
                        <Image
                          width={60}
                          height={50}
                          src="/pajaro.png"
                          alt="pajaro-icon"
                          className=" h-14"
                        />
                        <p>
                          Encontrarás 12 maravillosas esculturas artisticas de
                          aves represetativas del sur del Huila.
                        </p>
                      </div>
                    </li>
                    <div className=" my-4 flex gap-4 border p-2 text-lg sm:text-xl rounded-md border-[#0C4049]">
                      <Image
                        width={60}
                        height={30}
                        src="/bombilla.png"
                        alt=""
                        className=" h-14 my-auto"
                      />
                      <li className="text-start">
                        Sabias que el Huila es el Departamento de mayor
                        avistamiento de aves de Colombia?. También vas aprender
                        sobre las especies, e identificar aspectos importantes
                        para su cuidado y conservación.
                      </li>
                    </div>
                    <li>
                      <div className="flex text-lg sm:text-xl text-start gap-6 border p-2 rounded-md border-[#0C4049]">
                        <Image
                          width={60}
                          height={30}
                          src="/sonido.png"
                          alt="sonido-icon"
                          className=" h-12 my-auto"
                        />
                        <p>
                          Escucharás el canto de cada ave! al pasar, su sonido
                          se activa a través de sensores de movimiento, lo cual
                          te ayudará a identificar su canto y reconocerla.
                          ¡Fantástico! ¿Verdad?
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <SenderoSwiper />
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Atractivos;
