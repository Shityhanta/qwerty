import React from 'react';
import "../css files/Home.css";
import CardsHome from './CardsHome';
import background from '../../assets/landing-page-bg.png';
import greenCity from '../../assets/greencity.png';
import pmsh from '../../assets/pmsh.jpg';
import rosario from '../../assets/rosario.jpg';
import diosdado from '../../assets/diosdado.jpg';

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
            
        <div className='hospitals'>
          <div className='hospitals-container'>
            <div className='hospital-item' id='green-city'>
              <img src={greenCity} style={{ zIndex: 4 }}></img>
            </div>
            <div className='hospital-item' id='pmsh'>
              <img src={pmsh} style={{ zIndex: 3 }}></img>
            </div>
            <div className='hospital-item' id='rosario'>
              <img src={rosario } style={{ zIndex: 2 }}></img>
            </div>
            <div className='hospital-item' id='diosdado'>
              <img src={diosdado} style={{ zIndex: 1 }}></img>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Home;
