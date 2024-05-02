import React from 'react';
import "../css files/Home.css";
import background from '../../assets/landing-page-bg.png';
import adhd_pic from '../../assets/adhd_pic.png';

const Home = () => {
  return (
    <div>
      <section id='landing-login' className='landing-login'>
        <div className='image'>
          <img className='bg-landing' src={background} alt='landing page background' />
        </div>

        <div className='texts'>
          <h1>HEAL.TH</h1>
          <hr />
          <p>Join us in revolutionizing the way individuals engage with healthcare. 
            Take control of your health with heal.th today.
          </p>
        </div>

        <div className='health-conditions'>
          <h2 className='text-xl'>HEALTH CONDITIONS</h2>
          <div className='card'>
          <div className="max-w-xs bg-custom-color border border-green-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg card-image" src={adhd_pic} alt="" />
            </a>
            <div className="p-4">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white card-header">ADHD</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 card-p">brief description test test test test test test test test test</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 
                  dark:hover:bg-green-700 dark:focus:ring-green-800 card-a">
                View more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
              </a>
            </div>
          </div>
          </div>
        </div>        
      </section>
    </div>
  );
}

export default Home;
