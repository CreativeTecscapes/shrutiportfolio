import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { MdComment } from "react-icons/md";
import Image from 'next/image';

const Projects = () => {
    return (
        <div className='mt-10 lg:mt-16'>
            <div className="flex items-center justify-center lg:px-14 px-5">
                <div className="flex-grow border-t border-white mr-4 ml-4"></div>
                <div className="text-sm lg:text-2xl text-[#3adff2] font-bold">PROJECTS</div>
                <div className="flex-grow border-t border-white mr-4 ml-4"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-24 mt-10"> {/* Adjusted gap for more spacing */}
            <div className="card bg-base-100 w-80 shadow-2xl rounded-2xl group border border-transparent hover:border-orange-300 transition-all duration-300 bg-[#121212]">
                <h2 className="card-title text-orange-300 flex items-center justify-center font-bold p-4">ZENITH-AI</h2>
                <p className="text-white text-center mb-4">AI powered application for bank customers</p>
                <figure className="px-5 pb-5"> {/* Added margin-bottom for spacing */}
                    <img
                        src="/Zenith-AI.jpg"
                        alt="Zenith-AI" 
                        className="rounded-xl" />
                </figure>
                <div className='flex justify-evenly align-middle items-center p-3 text-white text-xl'>
                        <a href="https://github.com/Rudalph/Bank-Of-Baroda-GenAI-Hackathon"><FaGithub /></a>
                        <a href="https://zenith-ai-bob.vercel.app/"><FaLink /></a>
                        <MdComment />
                </div>
            </div>
            <div className="card bg-base-100 w-80 shadow-2xl rounded-2xl group border border-transparent hover:border-[#10847E] transition-all duration-300 bg-[#121212]">
                <h2 className="card-title text-[#10847E] flex items-center justify-center font-bold p-4">LIFE BALANCE 360</h2>
                <p className="text-white text-center mb-4">AI powered application for health enhancment</p>
                <figure className="px-5 pb-5"> {/* Added margin-bottom for spacing */}
                    <img
                        src="/LB-360.jpg"
                        alt="LB-360" 
                        className="rounded-xl" />
                </figure>
                <div className='flex justify-evenly align-middle items-center p-3 text-white text-xl'>
                        <a href="https://github.com/Rudalph/Life-Balance-360"><FaGithub /></a>
                        <a href="https://life-balance-360.vercel.app/"><FaLink /></a>
                        <MdComment />
                </div>
            </div>
            <div className="card bg-base-100 w-80 shadow-2xl rounded-2xl group border border-transparent hover:border-[#4D99FC] transition-all duration-300 bg-[#121212]">
                <h2 className="card-title text-[#4D99FC] flex items-center justify-center font-bold p-4">CREATIVE TECHSCAPES</h2>
                <p className="text-white text-center mb-4">Software Development Agency potfolio website</p>
                <figure className="px-5 pb-5"> {/* Added margin-bottom for spacing */}
                    <img
                        src="/CTS.png"
                        alt="CTS" 
                        className="rounded-xl" />
                </figure>
                <div className='flex justify-evenly align-middle items-center p-3 text-white text-xl'>
                        <a href="https://github.com/CreativeTecscapes/Portfolio"><FaGithub /></a>
                        <a href="https://creative-techscapes.vercel.app/"><FaLink /></a>
                        <MdComment />
                </div>
            </div>
        </div>
        <div className="flex flex-wrap justify-center gap-24 mt-10"> {/* Adjusted gap for more spacing */}
            <div className="card bg-base-100 w-80 shadow-2xl rounded-2xl group border border-transparent hover:border-[#10847E] transition-all duration-300 bg-[#121212]">
                <h2 className="card-title text-[#10847E] flex items-center justify-center font-bold p-4">MEDISENSE</h2>
                <p className="text-white text-center mb-4">AI powered prescription analyzer and report simplifier</p>
                <figure className="px-5 pb-5"> {/* Added margin-bottom for spacing */}
                    <img
                        src="/Medisense.jpg"
                        alt="Medisense" 
                        className="rounded-xl" />
                </figure>
                <div className='flex justify-evenly align-middle items-center p-3 text-white text-xl'>
                        <a href="https://github.com/Rudalph/AI-ML-Parul-University-Hackathon"><FaGithub /></a>
                        <a href="https://github.com/Rudalph/AI-ML-Parul-University-Hackathon"><FaLink /></a>
                        <MdComment />
                </div>
            </div>
            <div className="card bg-base-100 w-80 shadow-2xl rounded-2xl group border border-transparent hover:border-[#EC86A1] transition-all duration-300 bg-[#121212]">
                <h2 className="card-title text-[#EC86A1] flex items-center justify-center font-bold p-4">Mental Health</h2>
                <p className="text-white text-center mb-4">AI powered application for Mental Health Prediction</p>
                <figure className="px-5 pb-5"> {/* Added margin-bottom for spacing */}
                    <img
                        src="/Mentalhealth.png"
                        alt="Mentalhealth" 
                        className="rounded-xl" />
                </figure>
                <div className='flex justify-evenly align-middle items-center p-3 text-white text-xl'>
                        <a href="https://mental-health-django.vercel.app/"><FaGithub /></a>
                        <a href="https://mental-health-django.vercel.app/"><FaLink /></a>
                        <MdComment />
                </div>
            </div>
        </div>

        </div>
    );
}

export default Projects;
