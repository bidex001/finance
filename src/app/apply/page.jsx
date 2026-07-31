"use client";
import React from "react";
import Header from "../component/header";
import { useState } from "react";
import { AppContext } from "../context/userContext";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";

const Page = () => {
  const [data, setData] = useState({
    name: "",
    middleName: "",
    surName: "",
    gender: "male",
    dob: "",
    address: "",
    apartment: "",
    city: "",
    province: "",
    zipCode: "",
    yearsAtCurrent: "",
    education: "",
    status: "",
    income: "",
    debt: "",
    phone: "",
    email: "",
    grantAmount: "",
    paymentType: "",
  });

  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [nyrs, setNyrs] = useState("");
  const [answer, setAnswer] = useState("");
  const [amount, setAmount] = useState("");
  const [payment, setPayment] = useState("");

  return (
    <div>
      <Header />

      <div
        className="relative z-10 h-130 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/pic111.jpeg')",
        }}
      >
        <div className="flex flex-col text-start absolute inset-0 bg-black/50 px-20 py-15">
          <p className="uppercase text-amber-400 text-7xl w-100 font-extrabold">
            cggf global application portal
          </p>
          <p className="text-white w-105 font-bold mt-5 mb-5">
            Are you a grant applicant? Get access to GCGP Assistance, and stand
            a chance to win a grant from us.
          </p>
          <button
            className="w-50 py-2 border-2 capitalize border-white rounded-full text-white font-bold 
              cursor-pointer hover:bg-white hover:text-black transition-transform duration-500"
          >
            get started
          </button>
        </div>
      </div>

      <div className="flex flex-col px-20 pl-30 pt-30 pb-30 [&_h2]:text-4xl [&_h2]:font-semibold
       [&_p]:uppercase [&_p]:mt-6 [&_p]:mb-10 [&_p]:font-mono [&_p]:font-bold">
        <h2>CGGF Application Form</h2>
        <p>
          all application reguirements are to be filled out correctly
        </p>

        <form className="flex flex-wrap border w-3/4 items-center 
          [&_label]:block [&_label]:text-l [&_label]:font-semibold [&_label]:capitalize
           ">
          <div className="">
            <label htmlFor="fname">first name</label>
            <input type="text" required className="border" />
          </div>

          <div>
            <label htmlFor="fname ">middle name</label>
            <input type="text" required className="border" />
          </div>

          <div>
            <label htmlFor="fname ">surname</label>
            <input type="text" required className="border" />
          </div>

          <div>
            <label htmlFor="gender ">gender</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="border border-gray-300 rounded-md p-3 outline-none focus:border-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="dob ">date of birth</label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="border border-gray-300 rounded-md p-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="s.add ">street address</label>
            <input type="text" required className="border" />
          </div>

          <div>
            <label htmlFor="suite ">apartment, suite, etc</label>
            <input type="text" required className="border" />
          </div>

          <div>
            <label htmlFor="city ">city</label>
            <input type="text" required className="border" />
          </div>

          <div>
            <label htmlFor="province ">province</label>
            <input type="text" required className="border" />
          </div>

          <div>
            <label htmlFor="zip ">zip code</label>
            <input type="text" required className="border" />
          </div>

          <div>
            <label htmlFor="yearsatcurrent ">
              Number of years at current address
            </label>
            <select
              id="nyrs"
              value={nyrs}
              onChange={(e) => setNyrs(e.target.value)}
              className="border border-gray-300 rounded-md p-3 outline-none focus:border-blue-500"
            >
              <option value="">Select Number of Years</option>
              <option value="Male">0 - 1 year</option>
              <option value="Female">2 - 5 years</option>
              <option value="Female">5 - 10 years</option>
              <option value="Female">2 - 5 years</option>
              <option value="Female">Own a House</option>
            </select>
          </div>

          <div>
            <label htmlFor="education ">Education Level</label>
            <input type="text" required className="border" />
          </div>

          <div>
            <label htmlFor="status ">Marital Status</label>
            <input type="text" required className="border" />
          </div>

          <div>
            <label htmlFor="status ">Employment Status</label>
            <input type="text" required className="border" />
          </div>

          <div>
            <label htmlFor="status ">
              Have you received any grant in the past?
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="grant"
                value="Yes"
                checked={answer === "Yes"}
                onChange={(e) => setAnswer(e.target.value)}
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="grant"
                value="No"
                checked={answer === "No"}
                onChange={(e) => setAnswer(e.target.value)}
              />
              No
            </label>
          </div>

          <div>
            <label htmlFor="debt ">
              Do you have debt such as loans, mortgage, credit card debt and so
              on (If yes, indicate with total amount)
            </label>
            <textarea rows={3} cols={40} className="border" name="message" id="message"></textarea>
          </div>

          <div>
            <label htmlFor="phone ">Cell for SMS</label>
            <input type="text" required className="border" />
          </div>

          <div>
            <label htmlFor="email ">Email Address</label>
            <input type="text" required className="border" />
          </div>

          <div>
            <label htmlFor="grantAmount ">Grant Amount</label>
            <select
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border border-gray-300 rounded-md p-3 outline-none focus:border-blue-500"
            >
              <option value="">Please select</option>
              <option value="Male">$1,000 - $5,0000</option>
              <option value="Male">$5,000 - $10,0000</option>
              <option value="Male">$10,000 - $50,0000</option>
            </select>
          </div>

          <div>
            <label htmlFor="grantAmount ">Grant Amount</label>
            <select
              id="payment"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              className="border border-gray-300 rounded-md p-3 outline-none focus:border-blue-500"
            >
              <option value="">Payment Type</option>
              <option value="Male">Check</option>
              <option value="Male">Bank Tranfer</option>
              <option value="Male">PayPal</option>
            </select>
          </div>

          <button> submit application</button>
        </form>
      </div>

      {/*footer*/}
      <div className="flex flex-col">
        <div className="flex gap-10 p-20 bg-[#2c3e50]">
          <div
            className="[&>a:first-child]:text-4xl [&>a:first-child]:uppercase [&>a:first-child]:text-yellow-300 [&>a:first-child]:font-bold
                     [&_p]:w-80 [&_p]:text-gray-400 [&_p]:mt-3 [&_p]:mb-5"
          >
            <a href="/" className="tracking-[-2]">
              cggf
            </a>
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
            className="flex flex-col capitalize [&_h2]:font-bold [&_h2]:text-xl [&_h2]:text-white
                     [&_h2]:mb-3"
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
            className="flex flex-col capitalize [&_a]:gap-2 [&_a]:leading-10 [&_a]:hover:text-yellow-400 [&_h2]:font-bold [&_h2]:text-xl [&_h2]:text-white
                     [&_h2]:mb-3 [&_a]:text-gray-400"
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
    </div>
  );
};

export default Page;
