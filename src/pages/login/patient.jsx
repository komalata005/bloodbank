import React from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

function LoginDonar() {
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
          Patient Login
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
                  type="text"
                  name="Email"
                  id="email"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
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
        </div>

      </div>


    </form>

              <button
        type="button"
        className="rounded-md bg-[#13764C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0ca36c] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Login
      </button>
      <button
        type="button"
        className="mt-6 rounded-md bg-[#13764C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0ca36c]] hover:text-[#BBC5E9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Register
      </button>
              </div>
          </dl>
        </div>
      </div>
    </div>
      <Footer />
    </>
  );
}

export default LoginDonar;
