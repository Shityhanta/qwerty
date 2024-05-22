import React from 'react';
import hospital_reception from "../../../assets/hospital_reception.jpg";
import dr_grey from '../../../assets/dr_grey.jpg'

function DoctorPage() {
  return (
    <div>
      <section className='w-full h-screen relative'>
        {/* Background image */}
        <img src={hospital_reception} alt='reception of a hospital' className='absolute inset-0 filter blur-sm object-cover w-full h-full' />

        {/* Clinic information */}
        <div className='absolute w-9/12 max-w-xl bg-custom-color-2 text-white p-10 rounded-3xl flex items-center justify-center top-1/2 transform -translate-y-1/2 left-[55%] -translate-x-1/2'>
          <div className='translate-x-2/2'>
            <h1>Clinic Hours:</h1>
            <p>Green City Medical Hospital <br></br>Monday - Tuesday: 10:00AM - 5:00PM</p>
            <p>Pampanga Medical Specialist Hospital <br></br>Monday - Tuesday: 10:00AM - 5:00PM</p>
            <p>No Clinic hours every Sunday</p>
            <button className='bg-white text-black rounded-2xl w-32 h-8 mr-10 mt-10'>MESSAGE</button>
            <button className='bg-white text-black rounded-2xl w-32 h-8'>EMAIL</button>
          </div>
        </div>
        
        {/* Doctor information */}
        <div className='absolute w-75 bg-[#535353] text-white p-5 rounded-3xl flex items-center justify-center top-1/2 transform -translate-y-1/2 left-1/3 transform -translate-x-1/2'>
          <div className='text-center'>
            <img src={dr_grey} className='w-20 h-20 rounded-full object-cover mx-auto mb-4' alt='Dr. Merideth Grey' />
            <h1 className='text-xl font-bold'>Dr. Merideth Grey</h1>
            <p>Internal Medicine</p>
            <p>(+639) 123-542-123</p>
            <p>meridethgrey@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DoctorPage;
