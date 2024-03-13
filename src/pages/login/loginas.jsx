import React from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { Link } from 'react-router-dom';

function Loginas() {
  return (
    <>
      <Navigation />
<div className="py-24 bg-[#0F2A47] sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">

        <div className="w-2/5 mx-auto mt-16 sm:mt-20 lg:mt-24 sm:max-w-full">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-full lg:grid-cols-1">
              <div className="flex flex-col p-6 bg-[#273F59] rounded-md">
                  <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Login As
          </h2>
        </div>
        <div className='w-max'>
        <Link to="/login/donar">
        <button
        type="button"
        href="/login/donar"
        className="w-72	rounded-md bg-[#FFD1D1] px-3.5 py-2.5 text-sm font-semibold text-[#A30C11] shadow-sm hover:bg-[#A30C11] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        DONOR
      </button>
        </Link>
        </div>
        <Link to="/login/patient">
      <button
        type="button"
        className="w-72	 mt-6 rounded-md bg-[#BBC5E9] px-3.5 py-2.5 text-sm font-semibold text-[#0C2DA3] shadow-sm hover:bg-[#0C2DA3] hover:text-[#BBC5E9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        PATIENTS
      </button>
      </Link>
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
