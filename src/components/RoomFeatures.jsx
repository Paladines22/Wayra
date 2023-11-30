import React from "react";
import Image from "next/image";

function RoomFeatures({ text, img }) {
  return (
    <div className="flex gap-2 my-2 sm:my-4 text-[#0C4049]">
      <Image
        width={40}
        height={2}
        src={img}
        alt="check"
        className="max-h-[40px]"
      />
      <p className="max-w-[300px] text-lg my-auto ">{text}</p>
    </div>
  );
}

export default RoomFeatures;
