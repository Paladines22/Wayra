import React from "react";
import SenderoButton from "./SenderoButton";
import LaberintoButton from "./LaberintoButton";

function IngresosHospedaje() {
  return (
    <div className=" max-w-[80vw] shadow-xl   sm:max-w-[500px] lg:w-[100%] p-2 mx-auto mb-2 items-center bg-white border border-[#0C4049] rounded-xl flex flex-col gap-4">
      <p className="text-lg sm:text-xl font-thin text-[#0C4049] underline underline-offset-4 mt-2">
        Nuestros clientes de hospedaje tienen ingreso a:
      </p>
      <div className="flex flex-wrap">
        <SenderoButton />
        <LaberintoButton />
      </div>
    </div>
  );
}

export default IngresosHospedaje;
