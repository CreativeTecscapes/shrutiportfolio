"use client"
import React,{ useRef, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Typed from 'typed.js';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


export default function Hero() {

    const typingRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'FULL STACK WEB DEVELOPER',
                'FULL STACK APP DEVELOPER',
                'AI DEVELOPER',
                'ML DEVELOPER'
            ],
            typeSpeed:50,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
            showCursor: true,
        };

        const typingInstance = new Typed(typingRef.current, options);

        return () => {
            typingInstance.destroy();
        };
    }, []);


  return (
    <div className="relative w-full lg:mt-10">
      <div className="mx-auto max-w-8xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-20 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6 ">
        <button
            type="button"
            className="lg:mt-8 flex max-w-max items-center space-x-2 rounded-md bg-[#3adff2] p-1 font-bold text-black ">
            CREATIVE TECHSCAPES
            <a href="https://creative-techscapes.vercel.app/" className="inline-flex items-center text-black ">
                <ArrowRight className="ml-2 h-4 w-4" />
            </a>
        </button>
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            SHRUTI PATIL
          </h1>
          <p className="mt-8 text-sm text-white font-bold lg:text-2xl">
              I AM <span ref={typingRef} className='text-[#3adff2]'  />
          </p>
          <div className='flex justify-items-start flex-wrap mt-8 lg:space-x-10 space-x-5 text-white text-2xl lg:text-4xl'>
          <a href="http://github.com/iturhs20"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/shrutipatil20/"><FaLinkedin /></a>
          <a href="https://www.instagram.com/shrutipatil__20/"><FaInstagram /></a>
          <a href="mailto:patilshruti7273@gmail.com"><IoMdMail /></a>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 flex justify-center items-center align-middle p-9">
          <Image
            className="aspect-[1/1] lg:aspect-[4/3] lg:h-[500px] xl:aspect-[16/9] rounded-full border-4 border-[#3adff2]"
            src='/shruti.jpg'
            alt=""
            height={100}
            width={500}
          />
        </div>
      </div>
    </div>
  )
}