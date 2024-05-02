import React from 'react';
import '../css files/About.css';
import pic_1 from '../../assets/image1.jpg';
import pic_2 from '../../assets/image2.jpg';
import pic_3 from '../../assets/image3.jpg';
import pic_4 from '../../assets/image4.jpg';

const About = () => {
  return (
    <div className='About'>
      <h1 className='top'>About us</h1>

      <div className='grids'>
        <div className='person-container'>
        <img className='first' src={pic_1} alt=''></img>
          <form className='person1'>
            <h1>John Paul Anicete</h1>
            <p>pauljohnanicete506@gmail.com <br></br> +(63) 9183429388</p>
          </form>
        </div>

        <div className='person-container'>
        <img className='first' src={pic_2} alt=''></img>
          <form className='person2'>
            <h1> Angelaine Sampang</h1>
            <p>Gmail <br></br>Contact information</p>
          </form>
        </div>

        <div className='person-container'>
        <img className='first' src={pic_3} alt=''></img>
          <form className='person3'>
            <h1> Marc Ace gayagas</h1>
            <p>Gmail <br></br>Contact information</p>
          </form>
        </div>

        <div className='person-container'>
        <img className='first' src={pic_4} alt=''></img>
          <form className='person4'>
            <h1> Justine Dune Sampang</h1>
            <p>Gmail <br></br>Contact information</p>
          </form>
        </div>

        <div className='person-container'>
        <img className='first' src={pic_1} alt=''></img>
          <form className='person5'>
            <h1> Kenneth Manarang</h1>
            <p>Gmail <br></br>Contact information</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
