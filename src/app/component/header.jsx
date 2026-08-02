"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { AppContext } from "../context/userContext";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const { homeRef, programsRef, aboutRef, contactRef, scrollToSection } =
    useContext(AppContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (ref) => {
    if (ref?.current) {
      scrollToSection(ref);
    } else {
      window.location.href = "/";
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={"/03eac7a3-3acf-42e9-b23f-95298533d044.png"}
            alt="logo"
            width={70}
            height={70}
            className="h-auto w-12 sm:w-[70px]"
          />
          <h1 className="text-xl font-extrabold uppercase tracking-[-2] sm:text-2xl">
            cggf
          </h1>
        </Link>

        <button
          type="button"
          className="rounded-full border border-gray-300 p-2 text-gray-700 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        <nav
          className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col gap-4 border-t border-gray-200 bg-white p-4 shadow-lg md:static md:flex md:flex-row md:items-center md:gap-5 md:border-t-0 md:p-0 md:shadow-none`}
        >
          <div className="flex flex-col gap-4 capitalize md:flex-row md:items-center md:gap-5 [&_p]:cursor-pointer [&_p]:font-bold [&_p]:text-gray-500 [&_p]:transition [&_p]:hover:text-gray-800">
            <p onClick={() => handleNavClick(homeRef)}>home</p>
            <p onClick={() => handleNavClick(programsRef)}>programs</p>
            <p onClick={() => handleNavClick(aboutRef)}>about</p>
            <p onClick={() => handleNavClick(contactRef)}>contact</p>
          </div>

          <Link href={"/apply"} onClick={() => setMenuOpen(false)}>
            <button
              className="w-full rounded-full bg-amber-300 px-6 py-3 font-bold uppercase transition hover:bg-amber-200 md:w-auto"
            >
              apply now
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
