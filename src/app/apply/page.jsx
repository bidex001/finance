"use client";
import React, { useRef, useState } from "react";
import Header from "../component/header";

import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import axios from "axios";
import Link from "next/link";

const Page = () => {
  const inputClassName = "w-full rounded-lg border border-gray-600 p-3 text-sm outline-none focus:border-blue-500";
  const formSectionRef = useRef(null);

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
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleStartClick = () => {
    formSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  async function handleSubmit(e) {
    e.preventDefault()
    console.log("Submitting form", data)

    try {
      const res = await axios.post("/api/getMail", data, {
        headers: { "Content-Type": "application/json" },
      })
      console.log("Response", res)
      setShowSuccessModal(true)
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
        className="relative z-10 min-h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/pic111.jpeg')",
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center bg-black/50 px-4 py-8 text-start sm:px-8 lg:px-20 lg:py-12">
          <p className="max-w-3xl text-4xl font-extrabold uppercase text-amber-400 sm:text-5xl lg:text-7xl">
            cggf global application portal
          </p>
          <p className="mt-5 mb-5 max-w-2xl text-sm font-bold text-white sm:text-base lg:text-lg">
            Are you a grant applicant? Get access to GCGP Assistance, and stand
            a chance to win a grant from us.
          </p>
          <button
            type="button"
            onClick={handleStartClick}
            className="w-full rounded-full border-2 border-white px-4 py-2 text-sm font-bold capitalize text-white transition hover:bg-white hover:text-black sm:w-52 sm:px-6"
          >
            get started
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-5 px-4 py-10 sm:px-8 lg:px-10">
        <h2 className="text-3xl font-bold sm:text-4xl">CGGF Application Form</h2>
        <p className="text-sm font-semibold uppercase tracking-widest sm:text-lg">
          all application reguirements are to be filled out correctly
        </p>

        <form ref={formSectionRef} onSubmit={handleSubmit} className="mx-auto flex w-full max-w-[1000px] flex-col gap-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="fname" className="form-label">first name <span className="text-red-500">*</span></label>
              <input
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                type="text"
                required
                className={inputClassName}
              />
            </div>

            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="mname" className="form-label">middle name <span className="text-red-500">*</span></label>
              <input
                value={data.middleName}
                onChange={(e) => setData({ ...data, middleName: e.target.value })}
                type="text"
                required
                className={inputClassName}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="surname" className="form-label">surname <span className="text-red-500">*</span></label>
              <input
                value={data.surName}
                onChange={(e) => setData({ ...data, surName: e.target.value })}
                type="text"
                required
                className={inputClassName}
              />
            </div>

            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="gender" className="form-label">gender <span className="text-red-500">*</span></label>
              <select
                id="gender"
                value={data.gender}
                onChange={(e) => setData({ ...data, gender: e.target.value })}
                className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="dob" className="form-label">date of birth <span className="text-red-500">*</span></label>
              <input
                type="date"
                id="dob"
                value={data.dob}
                onChange={(e) => setData({ ...data, dob: e.target.value })}
                className="w-full rounded border border-gray-300 p-3 outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="address" className="form-label">street address <span className="text-red-500">*</span></label>
              <input
                value={data.address}
                onChange={(e) => setData({ ...data, address: e.target.value })}
                type="text"
                required
                className={inputClassName}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="apartment" className="form-label">apartment, suite, etc <span className="text-red-500">*</span></label>
              <input
                value={data.apartment}
                onChange={(e) => setData({ ...data, apartment: e.target.value })}
                type="text"
                required
                className={inputClassName}
              />
            </div>

            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="city" className="form-label">city <span className="text-red-500">*</span></label>
              <input
                value={data.city}
                onChange={(e) => setData({ ...data, city: e.target.value })}
                type="text"
                required
                className={inputClassName}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="province" className="form-label">province <span className="text-red-500">*</span></label>
              <input
                value={data.province}
                onChange={(e) => setData({ ...data, province: e.target.value })}
                type="text"
                required
                className={inputClassName}
              />
            </div>

            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="zip" className="form-label">zip code <span className="text-red-500">*</span></label>
              <input
                value={data.zipCode}
                onChange={(e) => setData({ ...data, zipCode: e.target.value })}
                type="text"
                required
                className={inputClassName}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="yearsatcurrent" className="form-label">
                Number of years at current address <span className="text-red-500">*</span>
              </label>
              <select
                id="nyrs"
                value={data.yearsAtCurrent}
                onChange={(e) => setData({ ...data, yearsAtCurrent: e.target.value })}
                className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-blue-500"
              >
                <option value="">Select Number of Years</option>
                <option value="0 - 1">0 - 1 year</option>
                <option value="2 - 5">2 - 5 years</option>
                <option value="5 - 10">5 - 10 years</option>
                <option value="house">Own a House</option>
              </select>
            </div>

            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="education" className="form-label">Education Level <span className="text-red-500">*</span></label>
              <input
                value={data.education}
                onChange={(e) => setData({ ...data, education: e.target.value })}
                type="text"
                required
                className={inputClassName}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="status" className="form-label">Marital Status <span className="text-red-500">*</span></label>
              <input
                value={data.status}
                onChange={(e) => setData({ ...data, status: e.target.value })}
                type="text"
                required
                className={inputClassName}
              />
            </div>

            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="employment" className="form-label">Employment Status <span className="text-red-500">*</span></label>
              <input
                value={data.employement}
                onChange={(e) => setData({ ...data, employement: e.target.value })}
                type="text"
                required
                className={inputClassName}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="income" className="form-label">monthly income<span className="text-red-500">*</span></label>
              <select
                value={data.income}
                onChange={(e) => setData({ ...data, income: e.target.value })}
                id="income"
                className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-blue-500"
              >
                <option value="">please select</option>
                <option value="$0 - $1000">$0 - $1000</option>
                <option value="$1000 - $3000">$1000 - $3000</option>
                <option value="$3000 - $5000">$3000 - $5000</option>
                <option value="$5000 +">$5000 +</option>
              </select>
            </div>

            <div className="w-full md:w-1/2">
              <label htmlFor="debt" className="form-label">
                Do you have debt such as loans, mortgage, credit card debt and so on (If yes, indicate with total amount) <span className="text-red-500">*</span>
              </label>
              <textarea
                value={data.debt}
                onChange={(e) => setData({ ...data, debt: e.target.value })}
                rows={3}
                className="w-full rounded-lg border border-gray-600 p-3"
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="w-full md:w-1/2">
              <label htmlFor="grant" className="form-label">
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

            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="phone" className="form-label">Cell for SMS <span className="text-red-500">*</span></label>
              <input
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                type="text"
                required
                className={inputClassName}
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="email" className="form-label">Email Address <span className="text-red-500">*</span></label>
              <input
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="email"
                required
                className={inputClassName}
              />
            </div>

            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="grantAmount" className="form-label">Grant Amount <span className="text-red-500">*</span></label>
              <select
                id="amount"
                value={data.grantAmount}
                onChange={(e) => setData({ ...data, grantAmount: e.target.value })}
                className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-blue-500"
              >
                <option value="">Please select</option>
                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                <option value="$100,000 - $200,000">$100,000 - $200,000</option>
                <option value="$200,000 - $500,000">$200,000 - $500,000</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="flex w-full flex-col gap-2 md:w-1/2">
              <label htmlFor="payment" className="form-label">Payment Type <span className="text-red-500">*</span></label>
              <select
                id="payment"
                value={data.paymentType}
                onChange={(e) => setData({ ...data, paymentType: e.target.value })}
                className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-blue-500"
              >
                <option value="">Payment Type</option>
                <option value="check">Check</option>
                <option value="transfer">Bank Tranfer</option>
                <option value="paypal">PayPal</option>
                <option value="cash">cash</option>
              </select>
            </div>
          </div>

          <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-blue-900 p-4 text-sm font-bold capitalize text-white transition hover:bg-blue-800">
            submit application
          </button>
        </form>
      </div>

      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          onClick={() => setShowSuccessModal(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
              ✓
            </div>
            <h3 className="mt-4 text-2xl font-bold text-gray-900">
              Application Submitted Successfully!
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for applying. Your request has been received and we will review it shortly.
            </p>
           <Link href={"/"}>
            <button
              type="button"
              onClick={() => setShowSuccessModal(false)}
              className="mt-6 rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              Close
            </button>
           </Link>
          </div>
        </div>
      )}

      {/*footer*/}
      <div className="bg-[#2c3e50] px-4 py-10 sm:px-8 lg:px-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl space-y-4 sm:max-w-lg">
            <Link href="/" className="block text-4xl uppercase font-bold tracking-[-2] text-yellow-300">
              cggf
            </Link>
            <p className="max-w-md text-gray-400">
              Empowering communities worldwide through financial support and
              partnership.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/Commonwealthglobalgrantfunding"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 text-white"
              >
                <FaFacebookF />
              </a>
              <a href="" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 text-white">
                <FaXTwitter />
              </a>
              <a href="" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-500 text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:flex-1">
            <div className="space-y-3 capitalize">
              <h2 className="text-xl font-bold text-white">quick links</h2>
              <div className="flex flex-col gap-2 text-gray-400">
                <p onClick={() => scrollToSection(homeRef)} className="cursor-pointer hover:text-yellow-300">
                  home
                </p>
                <p onClick={() => scrollToSection(programsRef)} className="cursor-pointer hover:text-yellow-300">
                  programs
                </p>
                <p onClick={() => scrollToSection(aboutRef)} className="cursor-pointer hover:text-yellow-300">
                  about
                </p>
                <p onClick={() => scrollToSection(contactRef)} className="cursor-pointer hover:text-yellow-300">
                  contact
                </p>
                <p className="cursor-pointer hover:text-yellow-300">apply now</p>
              </div>
            </div>

            <div className="space-y-3 capitalize">
              <h2 className="text-xl font-bold text-white">contact info</h2>
              <div className="space-y-2 text-gray-400">
                <a href="tel:+13475938523" className="flex items-center gap-2 hover:text-yellow-300">
                  <IoCallSharp />
                  +1 347 593 8523
                </a>
                <a href="" className="flex items-center gap-2 hover:text-yellow-300">
                  <IoLocation />
                  123 Grant Ave, Suite 100, NY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
