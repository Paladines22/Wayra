import React from "react";
import Image from "next/image";

function SenderoButton() {
  return (
    <button>
      <div className="flex gap-1 items-center">
        <div className="max-w-[50px]">
          <Image src="/colibri.png" width={60} height={50} alt="sendero icon" />
        </div>
        <p className="text-start text-lg sm:text-xl text-[#0C4049]">
          Sendero Ecologico Cantos de Colores
        </p>
      </div>
    </button>
  );
}

export default SenderoButton;
