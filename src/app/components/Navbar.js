'use client'

import Image from 'next/image';
import React from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Resume', href: '#' },
  { name: 'Portfolio', href: '#' },
  { name: 'Contact', href: '#' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="relative w-full bg-[#121212] h-16">
      <div className="mx-auto flex max-w-full items-center justify-between px-4 py-0 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={80} // Adjust width as needed
            height={80}
          />
          <span className="font-bold text-xl text-white">SHRUTI PATIL</span>
        </div>
        <div className="hidden lg:flex space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-md font-semibold text-white hover:text-white/80"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Download Resume
          </button>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 text-white cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-16 z-50 p-2 transition lg:hidden">
          <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={30}
                    height={30}
                  />
                  <span className="font-bold text-black">SHRUTI PATIL</span>
                </div>
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <nav className="mt-6 grid gap-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              <button
                type="button"
                className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80"
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
