import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { FaInstagram } from "react-icons/fa6";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';

function Footer() {
    const [showPolicy, setShowPolicy] = useState(false);
    const [showTNC, setShowTNC] = useState(false);

    const togglePolicy = () => {
        setShowPolicy(!showPolicy);
        if (showTNC) setShowTNC(false);
      };
    
      const toggleTNC = () => {
        setShowTNC(!showTNC);
        if (showPolicy) setShowPolicy(false);
      };
  return (
    <footer className="h-200px bg-[#627254] text-white p-5 flex items-center justify-center relative">
        <div className="container mx-auto text-center relative">
            {/* Logo and vertical line */}
            <div className="h-full flex items-left justify-left">
                <img src={logo} className='h-150px -ml-1' alt="Logo" />
                <p className='absolute text-xs -bottom-5 -left-6'>© 2024 HEAL.TH. All rights reserved.</p>
                <div className="h-34 w-px bg-white mx-8"></div>
            </div>
            
            {/* Icons */}
            <div className='absolute -top-6 left-0 mt-10 left-[17%] -translate-x-1/2 flex flex-col space-y-6'>
                <Link to='https://www.instagram.com/healdotth/'>
                    <FaInstagram size={25}/>
                </Link>
                <Link to='https://www.facebook.com/profile.php?id=61560155157598'>
                    <RiFacebookCircleLine size={25}/>
                </Link>
                <Link to='https://x.com/Heal_th3'>
                    <FaXTwitter size={25}/>
                </Link>
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
                    <button onClick={togglePolicy} className="hover:underline">Privacy Policy</button>
                    {showPolicy && (
                        <div className="fixed -translate-x-3/4 -left-[185%] -translate-y-1/2 mb-10 z-2 bg-white flex flex-col justify-center items-center w-[750px] h-[96vh] text-center">
                            <div className='absolute bg-[#4E5664] h-50px w-full top-0'>
                                <button onClick={togglePolicy} className='absolute top-3 right-3 z-9999'><IoMdCloseCircle color='red' size={30} /></button>
                                <h2 className="text-2xl font-bold mb-4 mt-2">Privacy Policy</h2>
                            </div>
                            <div className='text-black text-left ml-3 mt-10'>
                                <p>Effective Date: May 23, 2024</p>
                                <p>This Privacy Policy describes how Heal.TH ("we," "us," or "our") collects, uses, and discloses your information when you use our website (the "Service").</p>
                                <p>Information We Collect</p>
                                <p>We collect two types of information on HEAL.TH:</p>
                                <ul className="list-disc ml-4">
                                    <li>Personal Information: This is information that can be used to identify you as an individual. It may include:</li>
                                    <ul className="list-disc list-inside ml-4 space-y-2">
                                        <li>Name</li>
                                        <li>Email address</li>
                                        <li>Login credentials (username and password)</li>
                                        <li>Birth date</li>
                                        <li>Valid IDs ( Such as Driver’s license, Valid government IDs, etc.)</li>
                                    </ul>
                                </ul>
                                <ul className="list-disc ml-4">
                                    <li>Non-Personal Information: This is information that does not identify you as an individual. It may include:</li>
                                    <ul className="list-disc list-inside ml-4 space-y-2">
                                        <li>Your IP address</li>
                                        <li>Browser type and device information</li>
                                        <li>Pages you visit on our website</li>
                                        <li>Search terms you use on our website</li>
                                    </ul>
                                </ul>
                                <p>How We Collect</p>
                                <p>We collect information in the following ways:</p>
                                <ul className="list-disc ml-4">
                                    <li>When you register for an account: We collect your name, email address, Birth date, Valid</li>
                                </ul>
                            </div>
                            
                        </div>
                    )}

                    <button onClick={toggleTNC} className="hover:underline">Terms & Conditions</button>
                    {showTNC && (
                        <div className="fixed -translate-x-3/4 -left-[185%] -translate-y-1/2 mb-10 z-2 bg-white flex flex-col justify-center items-center w-[750px] h-[90vh] text-center">
                            <div className='absolute bg-[#4E5664] h-50px w-full top-0'>
                                <button onClick={togglePolicy} className='absolute top-3 right-3 z-9999'><IoMdCloseCircle color='red' size={30} /></button>
                                <h2 className="text-2xl font-bold mb-4 mt-2">Terms and Conditions</h2>
                            </div>
                            <div className='text-black text-left ml-3 mt-10'>
                                <p>Effective Date: May 23, 2024</p>
                                <p>These Terms and Conditions ("Terms") govern your access to and use of the HEAL.TH website (the "Service"). By accessing or using the Service, you agree to be bound by these Terms.</p>
                                <p>Information We Collect</p>
                                <p>1. Use of the Service</p>
                                <ul className="list-disc ml-4">
                                    <li>You must be at least 13 years old to use the Service.</li>
                                    <li>You are responsible for maintaining the confidentiality of your account login credentials and for all activities that occur under your account.</li>
                                    <li>You agree to use the Service only for lawful purposes and in accordance with these Terms.</li>
                                    <li>You agree not to use the Service in any way that could damage, disable, overburden, or impair the Service or interfere with the use of the Service by any other user.</li>
                                    <li>You agree not to use the Service to collect or harvest any personal information of other users.</li>
                                </ul>
                                <p>2. Information on HEAL.TH</p>
                                <ul className="list-disc ml-4">
                                    <li>The information provided on HEAL.TH, including information regarding hospitals in Pampanga, is for informational purposes only and should not be considered a substitute for professional medical advice.</li>
                                    <li>You should always consult with a qualified healthcare professional before making any decisions about your health.</li>
                                    <li>HEAL.TH does not endorse or recommend any specific hospitals or medical professionals.</li>
                                </ul>
                                <p>3. Disclaimer of Warranties</p>
                                <ul className="list-disc ml-4">
                                    <li>The Service is provided "as is" and "as available" without warranties of any kind, express or implied.</li>
                                </ul>
                            </div>
                            
                        </div>
                    )}
                </nav>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
