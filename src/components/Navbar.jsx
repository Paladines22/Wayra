"use client";
import Link from "next/link";
import Image from "next/image";
import { dataNavbar } from "@/utils/Navbar.data";
import { useState } from "react";
import SocialMediaIcons from "./SocialMediaIcons";

function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <header className="">
      <div
        className={` ${
          openMobileMenu ? "h-[100vh] w-[80vw]" : ""
        } w-[100vw] fixed top-0 left-0 ease-in duration-300 z-20  bg-nav-gradient`}
      >
        <nav className="flex items-center w-full  max-w-[1240px]  text-[#F4F1E9]  mx-auto justify-between ">
          <Link href="/" className="flex items-center">
            <p className={`text-3xl ${openMobileMenu ? "hidden" : "block"}`}>
              WAYRA
            </p>
          </Link>
          <div className="flex flex-col gap-20 items-start p-2">
            <button
              className="block md:hidden cursor-pointer"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            >
              {openMobileMenu ? (
                <Image
                  width={35}
                  height={10}
                  src="/close.png"
                  alt="Menu Icon"
                  className=""
                />
              ) : (
                <Image width={40} height={10} src="/menu.png" alt="Menu Icon" />
              )}
            </button>
            <div
              className={`${
                openMobileMenu ? "block " : "hidden"
              } w-[100vw] md:block md:w-auto `}
            >
              <div
                className={`${
                  openMobileMenu
                    ? "flex flex-col gap-24"
                    : "flex flex-col p-4 mt-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0"
                }`}
              >
                {dataNavbar.map(({ id, name, idLink }) => (
                  <ul
                    key={id}
                    className="px-4 transition-all duration-500 ease-in-out"
                  >
                    <li className="min-w-28">
                      <Link
                        onClick={() => setOpenMobileMenu(false)}
                        href={`/${idLink}`}
                      >
                        <h2
                          className={`${
                            openMobileMenu
                              ? "underline underline-offset-8 decoration-orange-400 transition delay-150 duration-200 ease-in-out"
                              : ""
                          } text-xl font-normal hover:underline hover:underline-offset-8 hover:decoration-orange-300 transition delay-150 duration-200 ease-in-out`}
                        >
                          {name}
                        </h2>
                      </Link>
                    </li>
                  </ul>
                ))}
                <div className="hidden  lg:block ">
                  <div className="fle w-[300px] h-[20px]">
                    <Image
                      src="/telephone.png"
                      width={20}
                      height={2}
                      alt="icon"
                    />
                    <p className="text-[#111112]/70">
                      <span className="text-gray-500">+ 57</span> 315 839 51 09{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${openMobileMenu ? "block mt-6" : "hidden"}`}>
              <SocialMediaIcons width={40} height={20} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
