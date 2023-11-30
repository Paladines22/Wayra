import React from "react";
import Image from "next/image";

function LaberintoButton() {
  return (
    <button>
      <div className="flex gap-1 items-center mb-2">
        <div className="max-w-[40px]">
          <Image
            src="/laberinto.png"
            width={60}
            height={30}
            alt="Laberinto Icon"
          />
        </div>
        <p className="text-lg sm:text-xl text-[#0C4049]">
          Laberinto Gigante con Mirador
        </p>
      </div>
    </button>
  );
}

export default LaberintoButton;
