import React from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { Link } from 'react-router-dom';
import { MdOutlineBloodtype } from "react-icons/md";
import { BiDonateBlood } from "react-icons/bi";

function Loginas() {
  return (
    <>
      <Navigation />
<div className="py-24 bg-[#0F2A47] sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">

        <div className="px-6 mx-auto max-w-7xl lg:px-8 sm:w-1/3">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-full lg:grid-cols-1">
              <div className="flex flex-col p-6 bg-[#273F59] rounded-md">
                  <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-2xl">
            Login As
          </h2>
        </div>
        <div className='flex items-center col-6 col justify-evenly sm:col-12'>
        <Link to="/login/donar">
        <button
        type="button"
        href="/login/donar"
        className="flex items-center rounded-md bg-[#FFD1D1] px-4 py-4 text-sm font-semibold text-[#A30C11] shadow-sm hover:bg-[#A30C11] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
       <span>< MdOutlineBloodtype className='mx-2' size={20}  /></span>
        DONOR
      </button>
        </Link>
        <Link to="/login/patient">
      <button
        type="button"
        className="flex items-center  rounded-md bg-[#BBC5E9] px-4 py-4 text-sm font-semibold text-[#0C2DA3] shadow-sm hover:bg-[#0C2DA3] hover:text-[#BBC5E9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
               <span>< BiDonateBlood className='mx-2' size={20}  /></span>
        PATIENTS
      </button>
      </Link>
      </div>
              </div>
          </dl>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default Loginas;
