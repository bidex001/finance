"use client";
import Image from "next/image";
import React from "react";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/userContext";
import {
  FaHandHoldingDollar,
  FaHouseCrack,
  FaGraduationCap,
} from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { PiGreaterThanBold, PiLessThanBold } from "react-icons/pi";
import Link from "next/link";

const Main = () => {
  const { homeRef, programsRef, aboutRef, contactRef, scrollToSection } =
    useContext(AppContext);

  const stats = [
    { value: "15,000+", label: "grants awarded" },
    { value: "85", label: "countries served" },
    { value: "$750M", label: "million distributed" },
    { value: "98%", label: "success rate" },
  ];

  const scrollImg = [
    {
      image: "/photo-1523240795612-9a054b0db644.jpeg",
      h2: "feature granted",
      h1: "education grant",
      para: "Pursue your academic dreams without financial burden! Our Education Grant provides funding for tuition, fees, and educational expenses. Apply now and take the first step towards achieving your educational goals.",
    },
    {
      image: "/photo-1556761175-5973dc0f32e7.jpeg",
      h2: "growth funds",
      h1: "buisness grants",
      para: `Fuel your entrepreneurial spirit! Whether {"you're"} a startup or an established enterprise, our Business Grants provide the capital you need for expansion, equipment, and innovation.`,
    },
    {
      image: "/photo-1517245386807-bb43f82c33c4.jpeg",
      h2: "emergency aid",
      h1: "disaster relief",
      para: "Rebuild with confidence. Our Disaster Relief funds offer immediate assistance to communities and individuals affected by natural calamities, helping you get back on your feet.",
    },
    {
      image: "/photo-1554224155-8d04cb21cd6c.jpeg",
      h2: "personal support",
      h1: "individual funds",
      para: "Personal grants tailored to your unique needs. From debt relief to personal projects, we provide the financial backing to help you improve your quality of life.",
    },
  ];
  const [current, setcurrent] = useState(0);
  const slide = scrollImg[current];

  function leftSlider() {
    setcurrent((prev) => (prev === 0 ? scrollImg.length - 1 : prev - 1));
  }

  function rightslider() {
    setcurrent((prev) => (prev + 1) % scrollImg.length);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      rightslider();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full  h-full min-h-screen flex flex-col *:w-full">
      <section ref={homeRef} className="">
        <div
          className="relative z-10 min-h-105 bg-cover bg-center bg-no-repeat sm:min-h-130 lg:h-145"
          style={{
            backgroundImage: "url('/photo-1617953141905-b27fb1f17d88.jpeg')",
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 px-4 py-10 text-center sm:px-8 lg:px-12">
            <h1 className="text-sm font-bold uppercase tracking-wider text-amber-300 sm:text-base lg:text-lg">
              Financial empowerment
            </h1>
            <p className="mt-4 mb-4 text-4xl font-bold uppercase text-white sm:text-5xl lg:text-7xl">
              Hope for <span className="text-amber-300">all</span>
            </p>
            <p className="max-w-3xl text-sm font-bold text-white sm:text-base lg:text-lg">
              Connecting individuals, businesses, and communities with funding
              opportunities worldwide. Your future starts with the right
              support.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <button
                onClick={() => scrollToSection(programsRef)}
                className="rounded-full bg-amber-300 px-6 py-3 font-bold uppercase transition hover:bg-amber-200 sm:px-8"
              >
                Explore programs
              </button>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="rounded-full border-2 border-white px-6 py-3 font-bold uppercase text-white sm:px-8"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>

        <div className="flex h-105 w-full justify-center overflow-x-hidden sm:h-130">
          <div
            className=" flex w-full transition-transform duration-500"
            style={{
              transform: `translateX(-${current * 100}vw)`,
            }}
          >
            {scrollImg &&
              scrollImg.map((slide, i) => {
                return (
                  <div
                    key={i}
                    className=" w-screen h-full relative shrink-0   "
                  >
                    <Image
                      src={slide.image}
                      alt="img"
                      fill
                      className=" z-0  object-cover "
                    />
                    <div className="absolute top-0 flex h-full w-full items-center justify-between px-3 sm:px-6 lg:px-10">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <button className="rounded-full bg-amber-300 p-2 text-white" onClick={leftSlider}>
                          <PiLessThanBold />
                        </button>
                        <div className="flex max-w-[90%] flex-col gap-3 px-2 sm:max-w-[80%] lg:max-w-175 lg:px-8 [&_h2]:w-fit [&_h2]:rounded-xl [&_h2]:bg-amber-400 [&_h2]:px-4 [&_h2]:py-2 [&_h2]:font-bold [&_h2]:uppercase [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:uppercase [&_h1]:text-white sm:[&_h1]:text-4xl lg:[&_h1]:text-6xl [&_p]:text-sm [&_p]:text-white sm:[&_p]:text-base lg:[&_p]:max-w-160">
                          <h2>{slide.h2}</h2>
                          <h1>{slide.h1}</h1>
                          <p>{slide.para}</p>

                          <button className="w-fit rounded-full bg-amber-300 px-5 py-3 font-bold uppercase text-white">
                            apply now
                          </button>
                        </div>
                      </div>
                      <button className="rounded-full bg-white/70 p-2 text-gray-800" onClick={rightslider}>
                        <PiGreaterThanBold />
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-4 py-16 sm:px-8 lg:px-10 lg:py-20">
          <h2 className="mb-10 text-3xl font-bold text-center sm:text-4xl lg:text-5xl">
            What our past winners say
          </h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-1/4">
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/photo-1573496359142-b8d87734a5a2.jpeg"
                  alt="img"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="">
                <h2 className="font-bold mt-4 mb-4 text-[18px]">
                  Sarah J. - Ohio, USA
                </h2>
                <p>
                  GCGP empowered me to launch my tech startup. The belief they
                  showed in a female founder was incredible. Truly
                  life-changing!
                </p>
              </div>
            </div>
            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-1/4">
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/photo-1560250097-0b93528c311a.jpeg"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  alt="img"
                />
              </div>
              <div className="">
                <h2 className="font-bold mt-4 mb-4 text-[18px]">
                  Liam W. - Melbourne, Australia
                </h2>
                <p>
                  As a disabled artist, the grant from GCGP provided for
                  specialised equipment. It's more than money; it's an
                  invitation to create.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-1/4">
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/photo-1541534741688-6078c6bfb5c5.jpeg"
                  alt="img"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="">
                <h2 className="font-bold mt-4 mb-4 text-[18px]">
                  Anika R. - Northland, NZ
                </h2>
                <p>
                  He waka eke noa! GCGP helped my rural community start a
                  sustainability project. Their support for Māori initiatives is
                  genuine.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-1/4">
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/photo-1560250097-0b93528c311a.jpeg"
                  alt="img"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="">
                <h2 className="font-bold mt-4 mb-4 text-[18px]">
                  Elena M. - Madrid, Spain
                </h2>
                <p>
                  The Individual Fund was a lifeline during my recovery from a
                  serious illness. GCGP's rapid disbursement allowed me to focus
                  on healing without financial stress.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-1/4">
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/photo-1531384441138-2736e62e0919.jpeg"
                  alt="img"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="">
                <h2 className="font-bold mt-4 mb-4 text-[18px]">
                  David K. - Nairobi, Kenya
                </h2>
                <p>
                  Our agricultural cooperative expanded significantly thanks to
                  the Business Grant. We've now created jobs for 20 local
                  families. Asante sana GCGP!
                </p>
              </div>
            </div>

            <div className="w-full sm:w-[calc(50%-1rem)] lg:w-1/4">
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src="/photo-1438761681033-6461ffad8d80.jpeg"
                  alt="img"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="">
                <h2 className="font-bold mt-4 mb-4 text-[18px]">
                  Sophie L. - Toronto, Canada
                </h2>
                <p>
                  The Educational Support grant funded my research into
                  renewable energy. GCGP doesn't just give money; they invest in
                  the future of our planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*programs */}
      <section
        ref={programsRef}
        className="flex flex-col items-center bg-gray-100 py-20"
      >
        <div className="flex flex-col items-center text-center px-4 sm:px-0">
          <h3 className="uppercase font-bold tracking-wider">what we offer</h3>
          <p className="capitalize mt-5 mb-5 text-3xl sm:text-5xl font-bold leading-tight">
            program categories
          </p>
          <div className="w-16 sm:w-32 h-1 bg-amber-400 mb-5"></div>
          <p className="max-w-xl sm:max-w-2xl mx-auto tracking-wider mb-10 text-sm sm:text-base">
            We strive to empower our applicants by offering a diverse range of
            grant opportunities tailored to your needs.
          </p>
        </div>

        <div className="flex flex-wrap *:bg-white justify-start gap-20 px-4 sm:px-8 lg:px-20">
          <div className="w-full h-fit rounded-2xl bg-white p-10 shadow-lg transition-transform duration-300 hover:scale-105 sm:w-[calc(50%-1rem)] lg:w-1/4">
            <div className="w-fit p-4 rounded-full bg-gray-100">
              <FaHandHoldingDollar size={30} color="#2c3e50" />
            </div>
            <h2 className="capitalize text-gray-900 mt-5 mb-5 text-xl font-bold">
              Individual funds
            </h2>
            <p className="font-medium  text-gray-500">
              Empowering applicants by connecting them with a broad spectrum of
              personal funding opportunities for debt relief and growth.
            </p>
            <button className="flex text-blue-400 border bg-gray-200 items-center gap-3 mt-5">
              learn more <FaArrowRight />
            </button>
          </div>

          <div className="w-full p-10 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 active:scale-50 sm:w-[calc(50%-1rem)] lg:w-1/4">
            <div className="w-fit p-4 rounded-full bg-gray-100">
              <FaHouseCrack size={30} color="#2c3e50" />
            </div>
            <h2 className="capitalize text-gray-900 mt-5 mb-5 text-xl font-bold">
              Disaster Aid
            </h2>
            <p className="font-medium  text-gray-500">
              Immediate financial assistance for communities affected by natural
              disasters. Rebuild and recover with our dedicated support funds.
            </p>
            <button className="flex text-blue-400 border bg-gray-200 items-center gap-3 mt-5">
              learn more <FaArrowRight />
            </button>
          </div>

          <div className="w-full p-10 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 active:scale-50 sm:w-[calc(50%-1rem)] lg:w-1/4">
            <div className="w-fit p-4 rounded-full bg-gray-100">
              <FaGraduationCap size={30} color="#2c3e50" />
            </div>
            <h2 className="capitalize text-gray-900 mt-5 mb-5 text-xl font-bold">
              Educational Support
            </h2>
            <p className="font-medium  text-gray-500">
              Committed to empowering the next generation by funding innovative
              research, scholarships, and entrepreneurial endeavors.
            </p>
            <button className="flex text-blue-400 border bg-gray-200 items-center gap-3 mt-5">
              learn more <FaArrowRight />
            </button>
          </div>

          <div className="w-full p-10 rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 active:scale-50 sm:w-[calc(50%-1rem)] lg:w-1/4">
            <div className="w-fit p-4 rounded-full bg-gray-100">
              <MdBusinessCenter size={30} color="#2c3e50" />
            </div>
            <h2 className="capitalize text-gray-900 mt-5 mb-5 text-xl font-bold">
              Business Grants
            </h2>
            <p className="font-medium  text-gray-500">
              Personalized grant opportunities designed to support small
              businesses and startups in achieving their financial milestones.
            </p>
            <button className="flex text-blue-400 border bg-gray-200 items-center gap-3 mt-5">
              learn more <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/*about */}

      <section ref={aboutRef} className="flex flex-col">
        <div className="flex flex-col gap-8 px-4 py-10 sm:px-8 lg:flex-row lg:items-center lg:gap-10 lg:px-20 lg:py-20">
          <div className="w-full lg:w-1/2">
            <h2 className="uppercase text-blue-700 font-bold tracking-wider">
              who we are
            </h2>
            <h3 className="capitalize mt-5 mb-5 text-5xl leading-14 font-medium">
              helping hands for a better future
            </h3>
            <p>
              The Global Corporate Grant Program is a nationally focused
              organization responsible for administering grant programs that
              provide financial assistance to individuals and families. <br />{" "}
              Working in coordination with multiple government agencies, we
              support initiatives related to small business development,
              personal and family financial needs, disaster recovery efforts,
              and educational advancement.
            </p>
            <div className="flex items-center gap-2 w-fit p-5 bg-[#2c3e50] rounded-xl mt-5 mb-5">
              <p className="text-4xl text-yellow-300 font-bold tracking-tighter">
                25+
              </p>
              <p className="uppercase w-20 leading-4 text-x text-white">
                years of service
              </p>
            </div>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="border-b-3 border-yellow-400 cursor-pointer uppercase font-medium"
            >
              meet our team
            </button>
          </div>
          <div
            className="h-72 w-full rounded-2xl bg-cover bg-center bg-no-repeat lg:h-80 lg:w-1/2"
            style={{
              backgroundImage: "url('/photo-1556761175-5973dc0f32e7.jpeg')",
            }}
          ></div>
        </div>

        <div className="grid grid-cols-1 gap-8 bg-[#2c3e50] p-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20 lg:p-20">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-5">
              <p className="text-6xl font-extrabold text-yellow-300">{value}</p>
              <p className="text-white uppercase font-bold">{label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 px-4 py-10 sm:px-8 lg:flex-row lg:items-center lg:gap-13 lg:px-20">
          <div
            className="h-72 w-full rounded-2xl bg-cover bg-center bg-no-repeat lg:h-90 lg:w-1/2"
            style={{
              backgroundImage: "url('/photo-1559027615-cd4628902d4a.jpeg')",
            }}
          ></div>
          <div className="py-20">
            <h2 className="uppercase text-blue-700 font-bold tracking-wider">
              community impact
            </h2>
            <h3 className="capitalize mt-5 mb-5 text-5xl leading-14 font-medium">
              together we can do more
            </h3>
            <p>
              Connecting with communities is at the heart of what we do. From
              disaster relief to local education initiatives, our network of
              volunteers and partners ensures that help reaches those who need
              it most.
            </p>
            <div
              className="*:flex *:items-center *:gap-2 mt-7
              [&_svg]:text-yellow-400 [&_svg]:text-xl [&_p]:font-semibold [&_p]:text-lg"
            >
              <div>
                <IoIosCheckmarkCircle />
                <p>Government partnership facilitation</p>
              </div>
              <div>
                <IoIosCheckmarkCircle />
                <p>Rapid disbursement processess</p>
              </div>
              <div>
                <IoIosCheckmarkCircle />
                <p>Global community support</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex min-h-105 items-center justify-center bg-cover bg-center bg-fixed px-4 py-16 sm:min-h-130 lg:h-screen lg:px-8"
          style={{
            backgroundImage: "url('/photo-1500382017468-9049fed747ef.jpeg')",
          }}
        >
          <div
            className="flex flex-col items-center rounded-2xl bg-black/40 p-6 text-center backdrop-blur sm:p-10 lg:p-20
          [&_h2]:text-white [&_h2]:text-3xl [&_h2]:font-medium [&_h2]:capitalize sm:[&_h2]:text-4xl lg:[&_h2]:text-6xl
          [&_p]:mt-5 [&_p]:mb-5 [&_p]:text-sm [&_p]:text-white [&_p]:font-medium sm:[&_p]:text-base lg:[&_p]:max-w-150 lg:[&_p]:text-lg"
          >
            <h2>ready to start your journey?</h2>
            <p>
              Contact us to learn more about our programs and how we can help
              you achieve your goals. Your path to financial empowerment starts
              here.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={"/apply"}>
                <button
                  className="bg-amber-300 uppercase px-10 py-3 font-bold rounded-full cursor-pointer
                hover:bg-white transition-transform duration-300"
                >
                  apply for grant
                </button>
              </Link>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="border-2 uppercase border-white px-10 py-3 rounded-full text-white font-bold
               hover:bg-white hover:text-black"
              >
                contact support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*contact */}

      <section ref={contactRef}>
        <div className="h-100 w-full overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=New%20York%2C%20USA&z=12&output=embed"
            title="Google Map"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col gap-8 bg-[#2c3e50] p-6 sm:p-10 lg:flex-row lg:gap-10 lg:p-20">
            <div
              className="[&>a:first-child]:text-4xl [&>a:first-child]:uppercase [&>a:first-child]:text-yellow-300 [&>a:first-child]:font-bold
             [&_p]:max-w-70 [&_p]:text-gray-400 [&_p]:mt-3 [&_p]:mb-5"
            >
              <Link href="/" className="tracking-[-2]">
                cggf
              </Link>
              <p>
                Empowering communities worldwide through financial support and
                partnership.
              </p>
              <div
                className="flex gap-3  [&_a]:bg-gray-500 [&_a]:cursor-pointer [&_a]:text-white 
               [&_a]:p-3 [&_a]:rounded-full"
              >
                <a
                  href="https://www.facebook.com/Agentmeganlynn?from_xma_click=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
                <a href="">
                  <FaXTwitter />
                </a>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div
              className="flex flex-col capitalize [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white"
            >
              <h2>quick links</h2>
              <div className="flex flex-col *:hover:text-yellow-300 *:cursor-pointer *:text-gray-400 *:capitalize">
                <p onClick={() => scrollToSection(homeRef)}>home</p>
                <p onClick={() => scrollToSection(programsRef)}>programs</p>
                <p onClick={() => scrollToSection(aboutRef)}>about</p>
                <p onClick={() => scrollToSection(contactRef)}>contact</p>
                <p>apply now</p>
              </div>
            </div>

            <div
              className="flex flex-col capitalize [&_a]:gap-2 [&_a]:leading-10 [&_a]:text-gray-400 [&_a]:hover:text-yellow-400 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white"
            >
              <h2>contact info</h2>
              <a href="tel:+13475938523" className="flex items-center">
                <IoCallSharp />
                +1 347 593 8523
              </a>
              <a href="">
                <IoLocation />
              </a>
            </div>
          </div>

          <div className=""></div>
        </div>
      </section>
    </div>
  );
};

export default Main;
