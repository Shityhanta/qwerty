import React from 'react';
import "../css files/Home.css";
import CardsHome from './CardsHome';
import { Carousel, IconButton } from "@material-tailwind/react";
import background from '../assets/landing-page-bg.png';
import greenCity from '../assets/greencity.png';
import pmsh from '../assets/pmsh.jpg';
import rosario from '../assets/rosario.jpg';
import diosdado from '../assets/diosdado.jpg';

const Home = () => {
  return (
    <div>
      <section id='landing-page' className='landing-page'>
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
          <CardsHome/>
        </div>    

        {/* Carousel */}
        <div className="carousel-container">
          <Carousel
            className="rounded-xl"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="absolute top-1/2 left-4 -translate-y-1/2 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="absolute top-1/2 right-4 -translate-y-1/2 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            <img src={greenCity} alt="Green City" className="h-full w-full object-cover" />
            <img src={pmsh} alt="PMSH" className="h-full w-full object-cover" />
            <img src={rosario} alt="Rosario" className="h-full w-full object-cover" />
            <img src={diosdado} alt="Diosdado" className="h-full w-full object-cover" />
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default Home;
