import React from 'react';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';

function Loginas() {
  return (
    <>
      <Navigation />
<div className="py-24 bg-[#0F2A47] sm:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">

        <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
              <div className="flex flex-col p-6 bg-white rounded-md">
              <h1>login as </h1>

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
