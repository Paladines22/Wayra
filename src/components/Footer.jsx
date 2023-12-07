import React from "react";
import SocialMediaIcons from "./SocialMediaIcons";

function Footer() {
  return (
    <div className="bg-[#147475]  h-max w-[100vw]">
      <div className="flex pb-6 flex-wrap justify-center mx-auto lg:gap-96 w-[100vw] text-xl max-w-max">
        <div className="leading-loose px-6 text-center py-8">
          <p className=" text-[#E09453]">Wayra Finca Turística ®</p>
          <p className="text-gray-200 ">Vrda. El Mortiño, Isnos - Huila</p>
          <p className="text-gray-200 ">Contacto: +57 3158395109</p>
        </div>
        <div className=" mx-auto my-8 w-max ">
          <SocialMediaIcons width={40} height={20} />
          <h2 className="text-gray-400 underline underline-offset-4 text-center text-sm  sm:pb-8 lg:ml-16 italic">
            Desarrollado por Emuna 2023
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
