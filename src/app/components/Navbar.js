'use client'

import Image from 'next/image';
import React from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Certificates', href: '#' },
  { name: 'Achivements', href: '#' },
  { name: 'Contact', href: '#' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="w-full bg-[#121212] h-16 fixed top-0 z-50">
      <div className="mx-auto flex max-w-full items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center -space-x-3">
            <Image
              src="/logo2.png"
              alt="Logo"
              width={80} // Adjust width as needed
              height={80}
            />\
          <span className="font-bold text-xl text-[#3adff2]">SHRUTI PATIL</span>
        </div>
        <div className="hidden lg:flex space-x-8">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-md font-semibold text-white hover:text-white/80"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <a href="/Shruti-Resume.pdf" 
            download
          >
          <button
            type="button"
            className="rounded-md bg-[#3adff2] px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-[#3adff2]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Download Resume
          </button>
          </a>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 text-[#3adff2] cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#121212] shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-0">
                    <Image
                      src="/logo2.png"
                      alt="Logo"
                      width={60} // Adjust width as needed
                      height={60}
                    />
                      <span className="font-bold text-[#3adff2]">SHRUTI PATIL</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-white/30"
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <a
                  href="/Shruti-Resume.pdf" 
                  download
                >
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-[#3adff2] px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-[#3adff2]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Download Resume
                </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Navbar;