"use client";
import React from "react";
import Header from "../component/header";
import { useState } from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import axios from "axios";

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
    employement: '',
    grantRecieved: 'yes',
    income: "",
    debt: "",
    phone: "",
    email: "",
    grantAmount: "",
    paymentType: "",
  });

  async function handleSubmit(e) {
    e.preventDefault()
    console.log("Submitting form", data)

    try {
      const res = await axios.post("/api/getMail", data, {
        headers: { "Content-Type": "application/json" },
      })
      console.log("Response", res)
      alert("successful")
    } catch (error) {
      const message = error?.response?.data?.message || error?.message || "Submission failed"
      console.error("Submission failed", message)
      alert(message)
    }
  }

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

      <div className="flex flex-col gap-5 py-17 px-10  test-class">
        <h2 className="text-4xl font-bold ">CGGF Application Form</h2>
        <p className="uppercase text-lg tracking-widest font-semibold">
          all application reguirements are to be filled out correctly
        </p>

        <form onSubmit={handleSubmit}
        className="flex flex-col gap-8 w-[1000px]">
        <div className=" flex justify-between items-center w-full *:w-1/2 *:w-full gap-10">
            <div className="flex flex-col gap-2">
        <label htmlFor="fname" className="form-label">first name <span className="text-red-500">*</span></label>    
            <input
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              type="text" required className="border outline-none text-sm p-3 border-gray-600 rounded-lg" />
          </div>

          <div>
            <label htmlFor="fname " className="form-label">middle name <span className="text-red-500">*</span></label>
            <input
              value={data.middleName}
              onChange={(e) => setData({ ...data, middleName: e.target.value })}
              type="text" required className="border w-full outline-none text-sm p-3 border-gray-600 rounded-lg" />
          </div>
        </div>

         <div className=" flex justify-between items-center w-full *:w-1/2 *:w-full gap-10">
           <div className="flex flex-col gap-2">
            <label htmlFor="fname " className="form-label">surname <span className="text-red-500">*</span></label>
            <input
              value={data.surName}
              onChange={(e) => setData({ ...data, surName: e.target.value })}
              type="text" required className="border w-full outline-none text-sm p-3 border-gray-600 rounded-lg" />
          </div>

          <div  className="flex flex-col gap-2" >
            <label htmlFor="gender " className="form-label">gender <span className="text-red-500">*</span></label>
            <select
              id="gender"
              value={data.gender}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
              className="border border-gray-300 w-full rounded-md p-3 outline-none focus:border-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
         </div>

         <div className=" flex justify-between items-center w-full *:w-1/2 *:w-full gap-10">
           <div className="flex flex-col gap-2">
            <label htmlFor="dob " className="form-label">date of birth <span className="text-red-500">*</span></label>
            <input
              type="date"
              id="dob"
              value={data.dob}
              onChange={(e) => setData({ ...data, dob: e.target.value })}
              className="border border-gray-300 rounded w-full md p-3 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="s.add " className="form-label">street address <span className="text-red-500">*</span></label>
            <input
              value={data.address}
              onChange={(e) => setData({ ...data, address: e.target.value })}
              type="text" required className="border w-full outline-none text-sm p-3 border-gray-600 rounded-lg" />
          </div>
         </div>

         <div className=" flex justify-between items-center w-full *:w-1/2 *:w-full gap-10">
           <div className="flex flex-col gap-2">
            <label htmlFor="suite " className="form-label">apartment, suite, etc <span className="text-red-500">*</span></label>
            <input
              value={data.apartment}
              onChange={(e) => setData({ ...data, apartment: e.target.value })}
              type="text" required className="border w-full outline-none text-sm p-3 border-gray-600 rounded-lg" />
          </div>

          <div >
            <label htmlFor="city " className="form-label">city <span className="text-red-500">*</span></label>
            <input
              value={data.city}
              onChange={(e) => setData({ ...data, city: e.target.value })}
              type="text" required className="border w-full outline-none text-sm p-3 border-gray-600 rounded-lg" />
          </div>
         </div>

   <div className=" flex justify-between items-center w-full *:w-1/2 *:w-full gap-10">
           <div className="">
            <label htmlFor="province " className="form-label">province <span className="text-red-500">*</span></label>
            <input
              value={data.province}
              onChange={(e) => setData({ ...data, province: e.target.value })}
              type="text" required className="border w-full outline-none text-sm p-3 border-gray-600 rounded-lg" />
          </div>

          <div>
            <label htmlFor="zip " className="form-label">zip code <span className="text-red-500">*</span></label>
            <input
              value={data.zipCode}
              onChange={(e) => setData({ ...data, zipCode: e.target.value })}
              type="text" required className="border w-full outline-none text-sm p-3 border-gray-600 rounded-lg" />
          </div>

   </div>
         <div className=" flex justify-between items-center w-full *:w-1/2 *:w-full gap-10">
           <div className="flex flex-col gap-2">
            <label htmlFor="yearsatcurrent " className="form-label">
              Number of years at current address <span className="text-red-500">*</span>
            </label>
            <select
              id="nyrs"

              value={data.yearsAtCurrent}
              onChange={(e) => setData({ ...data, yearsAtCurrent: e.target.value })}
              className="border border-gray-300 rounded-md p-3 outline-none focus:border-blue-500"
            >
              <option value="">Select Number of Years</option>
              <option value="0 - 1">0 - 1 year</option>
              <option value="2 - 5">2 - 5 years</option>
              <option value="5 - 10">5 - 10 years</option>
              <option value="2 - 5">2 - 5 years</option>
              <option value="house">Own a House</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="education " className="form-label">Education Level <span className="text-red-500">*</span></label>
            <input
              value={data.education}
              onChange={(e) => setData({ ...data, education: e.target.value })}
              type="text" required className="border w-full outline-none text-sm p-3 border-gray-600 rounded-lg" />
          </div>

         </div>

        <div className=" flex justify-between items-center w-full *:w-1/2 *:w-full gap-10">
            <div className="flex flex-col gap-2">
            <label htmlFor="status " className="form-label">Marital Status <span className="text-red-500">*</span></label>
            <input
              value={data.status}
              onChange={(e) => setData({ ...data, status: e.target.value })}
              type="text" required className="border w-full outline-none text-sm p-3 border-gray-600 rounded-lg" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="status " className="form-label">Employment Status <span className="text-red-500">*</span></label>
            <input
              value={data.employement}
              onChange={(e) => setData({ ...data, employement: e.target.value })}
              type="text" required className="border w-full outline-none text-sm p-3 border-gray-600 rounded-lg" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="status " className="form-label">monthly income<span className="text-red-500">*</span></label>
            <select 
            value={data.income}
              onChange={(e) => setData({ ...data, income: e.target.value })}
            name="" id=""  className="border border-gray-300 rounded-md p-3 outline-none focus:border-blue-500">
              <option value="">please select</option>
              <option value="$0 - $1000">$0 - $1000</option>
              <option value="$1000 - $3000">$1000 - $3000</option>
              <option value="$3000 - $5000">$3000 - $5000</option>
              <option value="$5000 +">$5000 +</option>
            </select>
          </div>
        </div>

         <div className=" flex justify-between items-start w-full *:w-1/2 *:w-full gap-10">
           <div>
            <label htmlFor="status " className="form-label">
              Have you received any grant in the past? <span className="text-red-500">*</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="grant"
                value="Yes"
                checked={data.grantRecieved === "Yes"}
                onChange={(e) => setData({ ...data, grantRecieved: e.target.value })}
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="grant"
                value="No"
                checked={data.grantRecieved === "No"}
                onChange={(e) => setData({ ...data, grantRecieved: e.target.value })}
              />
              No
            </label>
          </div>

          <div>
            <label htmlFor="debt " className="form-label">
              Do you have debt such as loans, mortgage, credit card debt and so
              on (If yes, indicate with total amount) <span className="text-red-500">*</span>
            </label>
            <textarea
              value={data.debt}
              onChange={(e) => setData({ ...data, debt: e.target.value })}
              rows={3} cols={40} className="border w-full"  ></textarea>
          </div>
         </div>

          <div className=" flex justify-between items-start w-full *:w-1/2 *:w-full gap-10">
            <div className="flex flex-col gap-2">
            <label htmlFor="phone " className="form-label">Cell for SMS <span className="text-red-500">*</span></label>
            <input
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              type="text" required className="border w-full outline-none text-sm p-3 border-gray-600 rounded-lg" />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email " className="form-label">Email Address <span className="text-red-500">*</span></label>
            <input
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              type="email" required className="border w-full outline-none text-sm p-3 border-gray-600 rounded-lg" />
          </div>
          </div>

         <div className=" flex justify-between items-start w-full *:w-1/2 *:w-full gap-10">
           <div className="flex flex-col gap-2">
            <label htmlFor="grantAmount " className="form-label">Grant Amount <span className="text-red-500">*</span></label>
            <select
              id="amount"
              value={data.grantAmount}
              onChange={(e) => setData({ ...data, grantAmount: e.target.value })}
              className="border w-full border-gray-300 rounded-md p-3 outline-none focus:border-blue-500"
            >
              <option value="">Please select</option>
              <option value="$1,000 - $5,000">$1,000 - $5,000</option>
<option value="$5,000 - $10,000">$5,000 - $10,000</option>
<option value="$10,000 - $50,000">$10,000 - $50,000</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="grantAmount " className="form-label">Payment Type <span className="text-red-500">*</span></label>
            <select
              id="payment"
              value={data.paymentType}
              onChange={(e) => setData({ ...data, paymentType: e.target.value })}
              className="border w-full border-gray-300 rounded-md p-3 outline-none focus:border-blue-500"
            >
              <option value="">Payment Type</option>
              <option value="check">Check</option>
              <option value="transfer">Bank Tranfer</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
         </div>

          <button type="submit" className=" w-full flex items-center justify-center bg-blue-900 p-4 text-sm font-bold text-white cursor-pointer rounded-lg capitalize"> submit application</button>
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
