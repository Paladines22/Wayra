import React from "react";
import Footer from "@/components/Footer";
import Home from "@/sections/Home";
import About from "@/sections/About";
import Hospedaje from "@/sections/Hospedaje";
import Atractivos from "@/sections/Atractivos";
import Galeria from "@/sections/Galeria";
import Comments from "@/sections/Comments";

const Page = () => {
  return (
    <div>
      <Home />
      <About />
      <Hospedaje />
      <Galeria />
      <Comments />
      <Footer />
    </div>
  );
};

export default Page;
