import Image from "next/image";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
});

function RestaurantePage() {
  // function changeBg() {
  //   const images = [
  //     'url("galery8.jpg")',
  //     'url("res2.jpg")',
  //     'url("res3.jpg")',
  //     'url("res4.jpg")',
  //   ];
  //   const section = document.querySelector("section");
  //   const bg = images[Math.floor(Math.random() * images.length)];
  //   section.style.backgroundImage = bg;
  // }

  // setInterval(changeBg, 5000);

  return (
    <section className="mt-48 bg-restaurant w-max h-max mx-auto">
      <Image
        className=" brightness-50 z-[-10] "
        alt="Restaurante"
        src="/restaurante4.jpg"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />

      <div className="w-[80vw] flex flex-wrap gap-2 justify-center mx-auto z-10">
        <div className="flex flex-col justify-center gap-12 items-center">
          <div className="text-center">
            <h1 className="text-8xl mb-[-22px] text-[#b0b6a6]">Restaurante</h1>
            <h2 className={`text-6xl text-white  ${caveat.className}`}>
              Gourmet
            </h2>
          </div>
          <h3 className="text-3xl w-[800px] mt-10 text-center  text-white">
            La oferta gastronómica que encontrarás en <span>Wayra</span>, está
            fundamentada en:
          </h3>
          <div className="text-xl flex gap-4 text-white mt-14">
            <div className="flex items-center gap-4 border p-2 bg-black/50 rounded-lg w-[20vw]">
              <Image src="/vegetable.png" alt="" width={60} height={10} />
              <p>
                Ingredientes frescos cultivados en su mayoría por agricultores
                de la región.
              </p>
            </div>
            <div className="flex items-center gap-4 border p-2 rounded-lg w-[20vw] bg-black/50 ">
              <Image src="/salmon.png" alt="" width={50} height={10} />
              <p>
                Productos de alta calidad como los frutos del mar y cortes de
                carne premium.
              </p>
            </div>
            <div className="flex items-center gap-4 border p-2 rounded-lg w-[20vw] bg-black/50 ">
              <Image src="/grandmother.png" alt="" width={60} height={10} />
              <p> La escencia de nuestra tradición cultural Huilence.</p>
            </div>
          </div>
          <p className="p-4 text-3xl  text-white justify-center ">
            Esto nos permite ofrecer una exquisita e indescriptible experiencia
            culinaria.
          </p>
          <div className="flex flex-col gap-4">
            <button className="px-4 py-2 text-black bg-[#DCE4CF]/40 border text-2xl border-[#84897c] w-72 border-b-4 border-r-4 w-34 cursor-pointer">
              <p className={`font-bold text-white`}> Reservar</p>
            </button>
            <button className="px-4 py-2 text-black text-2xl border bg-[#DCE4CF]/60  border-[#84897c] w-72 border-b-4 border-r-4  w-34 cursor-pointer">
              Ver Carta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestaurantePage;
