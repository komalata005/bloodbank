import React from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import { Link } from 'react-router-dom';

function RegistrationPatient() {
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
          Patient Registration
          </h2>
        </div>

        <form>
      <div className="space-y-12 sm:space-y-16">

        <div className="pb-12 mt-10 space-y-8 border-b border-gray-900/10 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white sm:pt-1.5">
              Email
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
      <label htmlFor="gender" className="block text-sm font-medium leading-6 text-white sm:pt-1.5">
        Gender
      </label>
      <select
        id="gender"
        name="gender"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="Select"
      >
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-white sm:pt-1.5">
              Age
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="date"
                  name="date"
                  id="date"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
              Phone number
            </label>
            <div className="relative mt-2.5">
            <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
            </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
      <label htmlFor="gender" className="block text-sm font-medium leading-6 text-white sm:pt-1.5">
        Blood Group
      </label>
      <select
        id="bloodgroup"
        name="bloodgroup"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        defaultValue="Select"
      >
        <option>O+</option>
        <option>O-</option>
        <option>A+</option>
        <option>A-</option>
        <option>B+</option>
        <option>B-</option>
        <option>AB+</option>
        <option>AB-</option>

      </select>
    </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white sm:pt-1.5">
                Password
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-white sm:pt-1.5">
                Confrim Password
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>
        </div>

      </div>


    </form>

      <Link to="/login/patient">
              <button
        type="button"
        className="rounded-md bg-[#13764C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0ca36c] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Registration
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

export default RegistrationPatient;
