import React from 'react';
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom'; // Import Link component
import "../css files/Hospitals.css";
import greenCity from '../assets/green-city.jpg';
import pmsh from '../assets/pmsh.jpg';
import rosario from '../assets/rosario.jpg';

function Hospitals() {
  return (
    <div>
      {/* Green City */}
      <section className='sectionOne'>
        <div className='texts'>
          <h1 className='block font-sans text-xl antialiased font-semibold leading-tight tracking-normal text-blue-white-900 sectionOneHeading'>
            GREEN CITY MEDICAL CENTER
          </h1>
          <p className='locationParag'> Located at: Jose Abad Santos Avenue, Barangay Dolores 2000 San Fernando, Philippines Central Luzon</p>
        </div>
        <div>
          <img src={greenCity} alt='green city' className='greenCity'></img>
        </div>
        <div className="flex w-max gap-4">
          <div className="ButtonWrapper">
            <Link to="/hospitals/doctors">
              <Button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded doctorListBtn">
                See List of Doctors
              </Button>
            </Link>

            <Link to="/hospitals/emergency-hotline">
              <Button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded emergencyHotlineBtn">
                Emergency Hotline
              </Button>
            </Link>

            <Link to="/hospitals/ambulance">
              <Button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded ambulanceBtn">
                Call an Ambulance
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PMSH */}
      <section className='sectionTwo'>
        <div className='texts'>
          <h1 className='block font-sans text-xl antialiased font-semibold leading-tight tracking-normal text-blue-white-900 sectionTwoHeading'>
            PAMPANGA MEDICAL SPECIALIST <span className="headingHospitalWord">HOSPITAL</span>
          </h1>
          <p className='locationParagSection2'> Located at: XJF4+4GG, Jose Abad Santos Ave, Guagua, Pampanga, Philippines Central Luzon</p>
        </div>
        {/* image div */}
        <div>
          <img src={pmsh} alt='PMSH' className='pmsPic'></img>
        </div>
        <div className="sectionTwoButtons">
            <Link to="/hospitals/doctors">
              <Button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded doctorListBtn">
                See List of Doctors
              </Button>
            </Link>

            <Link to="/hospitals/emergency-hotline">
              <Button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded emergencyHotlineBtn">
                Emergency Hotline
              </Button>
            </Link>

            <Link to="/hospitals/ambulance">
              <Button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded ambulanceBtn">
                Call an Ambulance
              </Button>
            </Link>
          </div>
      </section>

      {/* Section 3 Rosario */}
      <section className='sectionThree'>
        <div className='texts'>
          <h1 className='block font-sans text-xl antialiased font-semibold leading-tight tracking-normal text-blue-white-900 sectionThreeHeading'>
            ROSARIO MEMORIAL HOSPITAL
          </h1>
          <p className='locationParagSection3'> Located at: XJF4+4GG, Jose Abad Santos Ave, Guagua, Pampanga, Philippines Central Luzon</p>
        </div>
        {/* image div */}
        <div>
          <img src={rosario} alt='Rosario Hospital' className='rosarioPic'></img>
        </div>
        <div className="sectionThreeButtons">
            <Link to="/hospitals/doctors">
              <Button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded doctorListBtn">
                See List of Doctors
              </Button>
            </Link>

            <Link to="/hospitals/emergency-hotline">
              <Button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded emergencyHotlineBtn">
                Emergency Hotline
              </Button>
            </Link>

            <Link to="/hospitals/ambulance">
              <Button className="bg-custom-color-2 text-white font-bold py-2 px-4 rounded ambulanceBtn">
                Call an Ambulance
              </Button>
            </Link>
          </div>
      </section>
    </div>
  );
}

export default Hospitals;
