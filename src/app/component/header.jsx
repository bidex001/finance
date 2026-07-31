"use client";
import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { AppContext } from "../context/userContext";
import Link from "next/link";

const Header = () => {
  const { homeRef, programsRef, aboutRef, contactRef, scrollToSection } =
    useContext(AppContext);

  return (
    <div className="w-full h-fit sticky top-0 z-50 shadow-2xl bg-white flex justify-between items-center py-2 px-15 ">
      <div className="flex items-center">
        <Image
          src={"/03eac7a3-3acf-42e9-b23f-95298533d044.png"}
          alt="logo"
          width={70}
          height={70}
        />
        <h1 className=" text-2xl uppercase font-extrabold tracking-[-2]">
          cggf
        </h1>
      </div>

      <div className="flex items-center gap-5 [&_p]:font-bold [&_p]:text-gray-500 [&_p]:cursor-pointer [&_p]:hover:text-gray-800 *:capitalize">
        <p onClick={() => scrollToSection(homeRef)}>home</p>
        <p onClick={() => scrollToSection(programsRef)}>programs</p>
        <p onClick={() => scrollToSection(aboutRef)}>about</p>
        <p onClick={() => scrollToSection(contactRef)}>contact</p>

        <Link href={"/apply"}>
          <button
            className="bg-amber-300 uppercase px-10 py-3 font-bold rounded-full cursor-pointer
                hover:bg-amber-200 transition-transform duration-300"
          >
            apply now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
