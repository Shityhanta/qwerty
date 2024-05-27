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
        <footer className="px-4 divide-y dark:bg-custom-color-2 dark:text-white-800">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 text-white">
                <div className="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start items-center">
                        <img src={logo} alt="Your Logo" className="w-32 h-32 lg:w-16 lg:h-16"></img>
                    </a>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3 ">
                        <h3 className="tracking-wide uppercase text-2xl">Site Services</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" className="hover:underline" href="/health-conditions">Health Conditions</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" className="hover:underline" href="/self-diagnosis">Self Diagnosis</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" className="hover:underline" href="/hospitals">Hospitals</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase text-2xl">Information</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" className="hover:underline" href="/about-us">About Us</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" className="hover:underline" href="/faqs">FAQs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase text-2xl">Legal</h3>
                        <button onClick={togglePolicy} className="hover:underline">Privacy Policy</button>
                        {showPolicy && (
                            <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center z-50 p-4">
                                <div className='bg-[#4E5664] w-full py-3 px-5 relative'>
                                    <button onClick={togglePolicy} className='absolute top-3 right-3'><IoMdCloseCircle color='red' size={30} /></button>
                                    <h2 className="text-2xl font-bold mb-4 mt-2 text-white">Privacy Policy</h2>
                                </div>
                                <div className='text-black text-left max-w-3xl overflow-auto h-full p-5'>
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
                                            <li>Valid IDs (Such as Driver’s license, Valid government IDs, etc.)</li>
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
                                        <li>When you register for an account: We collect your name, email address, birth date, and valid IDs.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        <button onClick={toggleTNC} className="hover:underline">Terms & Conditions</button>
                        {showTNC && (
                            <div className="fixed inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center z-50 p-4">
                                <div className='bg-[#4E5664] w-full py-3 px-5 relative'>
                                    <button onClick={toggleTNC} className='absolute top-3 right-3'><IoMdCloseCircle color='red' size={30} /></button>
                                    <h2 className="text-2xl font-bold mb-4 mt-2 text-white">Terms and Conditions</h2>
                                </div>
                                <div className='text-black text-left max-w-3xl overflow-auto h-full p-5'>
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
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase text-2xl">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                                <RiFacebookCircleLine className="w-6 h-6 fill-current" />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                                <FaXTwitter className="w-6 h-6 fill-current" />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                <FaInstagram className="w-6 h-6 fill-current" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
