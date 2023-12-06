"use client";
import React from "react";
import { motion } from "framer-motion";

function ReservaButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      className=" flex justify-center mb-4 sm:my-8"
    >
      <a href="https://Wa.me/3157317717" target="_blank">
        <button className="px-4 py-2 shadow-md text-white hover:bg-[#e08653] text-2xl bg-[#e4a829] transition-all rounded-md w-52 cursor-pointer">
          Reservar
        </button>
      </a>
    </motion.div>
  );
}

export default ReservaButton;
