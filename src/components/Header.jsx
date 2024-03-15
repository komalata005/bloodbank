
import React from 'react';


function Header() {
  return (
 <>
 <header className="">
 <div className="relative px-6 py-5 overflow-hidden bg-gray-900 isolate sm:py-10 lg:px-8">
      <img
        src="../header.svg"
        alt=""
        className="absolute inset-0 object-cover w-full h-full "
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="flex justify-center max-w-2xl p-6 mx-auto text-center bg-white rounded-lg glass-effect">
        <div>
        <img
                          className="w-auto h-16 px-2 sm:h-20 sm:px-6"
                          src="/logo512.png"
                          alt="" />
        </div>
<div className=''>

<h2 className="text-3xl font-bold tracking-tight text-[#0F2A47] sm:text-4xl">
            LIFE SAVER</h2>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#982C29] sm:text-4xl">
        BLOOD BANK
        </h2>
</div>
      </div>
    </div>
      </header>
      </>
  )
}
export default Header;