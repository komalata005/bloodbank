import React from 'react';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { IoMenu } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";

const navigation = [
    { name: 'Home', href: '/home' },
    { name: 'Donation history', href: '/donation-history' },
    { name: 'View Request', href: '/donation-request' },

  ]

function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
 <>
  <img src='../../header.svg' alt='' className='' height={391} width={1440} />

 <div className='z-50 '>
 <div className='bg-[#982C29]'>
 <nav className="flex items-center justify-between p-6 lg:px-8 " aria-label="Global">
              <div className="flex lg:flex-1">
                  <a href="#home" className="-m-1.5 p-1.5">
                      <span className="sr-only">Life Save</span>
                      <img
                          className="w-auto h-8"
                          src="/logo512.png"
                          alt="" />
                  </a>
              </div>
              <div className="flex lg:hidden">
                  <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                      onClick={() => setMobileMenuOpen(true)}
                  >
                      <span className="sr-only">Open main menu</span>
                      {/* <Bars3Icon className="w-6 h-6" aria-hidden="true" /> */}
                      < IoMenu className="w-6 h-6" aria-hidden="true" />
                  </button>
              </div>
              <div className="hidden lg:flex lg:gap-x-12">
                  {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white">
                          {item.name}
                      </a>
                  ))}
              </div>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                  <a href="/login-as" className="text-sm font-semibold leading-6 text-white">
                  Donar Name <span aria-hidden="true"></span>
                  </a>
                  </div>

          </nav>
 </div>

          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <div className="fixed inset-0 z-50" />
              <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-between">
                      <button
                          type="button"
                          className="-m-2.5 rounded-md p-2.5 text-gray-700"
                          onClick={() => setMobileMenuOpen(false)}
                      >
                          <span className="sr-only">Close menu</span>
                         < GiCancel className="w-6 h-6" aria-hidden="true"  />
                      </button>
                  </div>
                  <div className="flow-root mt-6">
                      <div className="-my-6 divide-y divide-gray-500/10">
                          <div className="py-6 space-y-2">
                              {navigation.map((item) => (
                                  <a
                                      key={item.name}
                                      href={item.href}
                                      className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                                  >
                                      {item.name}
                                  </a>
                              ))}
                          </div>
                          <div className="py-6">
                          </div>
                      </div>
                  </div>
              </Dialog.Panel>
          </Dialog>
          </div>
      </>
  )
}
export default Navigation;