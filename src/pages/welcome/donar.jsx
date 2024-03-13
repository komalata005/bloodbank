import React from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/DonorNavigation';

function WelcomeDonar() {
  return (
    <>
      <Navigation />
<div className="py-24 bg-[#0F2A47] sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">

        <div className="w-2/5 mx-auto mt-16 sm:mt-20 lg:mt-24 sm:max-w-full">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-full lg:grid-cols-1">
              <div className="flex flex-col p-6 bg-[#273F59] rounded-md">
                  <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="mb-8 text-6xl italic font-bold leading-10 tracking-tight text-white sm:text-4xl">
          WELCOME TO DONAR PANNEL
          </h2>
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

export default WelcomeDonar;
