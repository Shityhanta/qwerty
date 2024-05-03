import React, { useState } from "react";
import "../css files/CardsHome.css";
import { Link } from 'react-router-dom';
import adhd_pic from '../assets/adhd_pic.png';
import next_icon from '../assets/next.png';
import prev_icon from '../assets/prev.png';

function CardsHome() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const cards = [
    {
      title: "ADHD 1",
      description: "brief description test test test test test test test test test",
    },
    {
      title: "ADHD 2",
      description: "brief description test test test test test test test test test",
    },
    {
      title: "ADHD 3",
      description: "brief description test test test test test test test test test",
    },
    {
      title: "ADHD 4",
      description: "brief description test test test test test test test test test",
    },
    {
      title: "ADHD 5",
      description: "brief description test test test test test test test test test",
    },
    {
      title: "ADHD 6",
      description: "brief description test test test test test test test test test",
    },
    {
      title: "ADHD 7",
      description: "brief description test test test test test test test test test",
    },
    {
      title: "ADHD 8",
      description: "brief description test test test test test test test test test",
    },
    {
      title: "ADHD 9",
      description: "brief description test test test test test test test test test",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? cards.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === cards.length - 1 ? 0 : prevSlide + 1));
  };

  const slideWidth = 300; // Adjust this value based on your card width and margins

  return (
    <div className="slider-container">
      <div className="card-slider">
        <div
          className="slide"
          style={{ transform: `translateX(-${currentSlide * slideWidth}px)` }}>
          {cards.map((card, index) => (
            <div key={index} className="card">
              <div className="max-w-xs bg-custom-color border border-green-400 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Link to="/health-conditions">
                <img className="rounded-t-lg card-image" src={adhd_pic} alt="" />
              </Link>
                <div className="p-4">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white card-header">
                    {card.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 card-p">
                    {card.description}
                  </p>
                  <Link to="/health-conditions" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 card-a">
                    View more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="prev" onClick={handlePrevSlide}><img src={prev_icon} alt=""></img></button>
      <button className="next" onClick={handleNextSlide}><img src={next_icon} alt=""></img></button>
    </div>
  );
}

export default CardsHome;
