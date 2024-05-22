import React from 'react';
import logo from '../assets/logo.png'
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="h-200px bg-[#627254] text-white p-5 flex items-center justify-center relative">
        <div className="container mx-auto text-center relative">
            {/* Logo and vertical line */}
            <div className="h-full flex items-left justify-left">
                <img src={logo} className='h-150px -ml-15' alt="Logo" />
                <div className="h-34 w-px bg-white mx-4"></div>
            </div>
            
            {/* Icons */}
            <div className='absolute -top-6 left-0 mt-10 left-[17%] -translate-x-1/2 flex flex-col space-y-6'>
                <FaInstagram size={25}/>
                <RiFacebookCircleLine size={25}/>
                <FaXTwitter size={25}/>
            </div>

            {/* Information */}
            <div className='absolute flex flex-col left-[60%] -translate-x-1/2 -top-2'>
                <h1 className='font-bold text-2xl'>Site Services</h1>
                <nav className="flex flex-col justify-center mt-3">
                    <a href="/health-conditions" className="hover:underline">Health Conditions</a>
                    <a href="/self-diagnosis" className="hover:underline">Self Diagnosis</a>
                    <a href="/hospitals" className="hover:underline">Hospitals</a>
                </nav>
            </div>

            <div className='absolute flex flex-col left-[75%] -translate-x-1/2 -top-2'>
                <h1 className='font-bold text-2xl'>Information</h1>
                <nav className="flex flex-col justify-center mt-3">
                    <a href="/about-us" className="hover:underline">About Us</a>
                    <a href="/faqs" className="hover:underline">FAQs</a>
                </nav>
            </div>

            <div className='absolute flex flex-col left-[88%] -translate-x-1/2 -top-2'>
                <h1 className='font-bold text-2xl'>Legal</h1>
                <nav className="flex flex-col justify-center mt-3">
                    <a href="/about-us" className="hover:underline">Privacy Policy</a>
                    <a href="/faqs" className="hover:underline">Terms & Conditions</a>
                </nav>
            </div>
        </div>
    </footer>

  );
}

export default Footer;
