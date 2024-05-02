import React from 'react';
import '../css files/Hospitals.css';
import pic_1 from '../../assets/image1.jpg';
import pic_2 from '../../assets/image2.jpg';
import pic_3 from '../../assets/image3.jpg';
import pic_4 from '../../assets/image4.jpg';

const Hospitals = () => {
  return (
    <div className='container'>
      <div className='image'>
        <img className='first' src={pic_1} alt=''></img>
        <div className='content'>
          <h1>Jose b. lingad memorial regional hospital (jbl)</h1>
        </div>
      </div>

      <div className='image'>
        <img className='second' src={pic_2} alt=''></img>
        <div className='content'>
          <h1>Premieer</h1>
        </div>
      </div>

      <div className='image'>
        <img className='third' src={pic_3} alt=''></img>
        <div  className='content'>
          <h1>Calcuta </h1>
        </div>
      </div>

      <div className='image'>
        <img className='fourth' src={pic_4} alt=''></img>
        <div  className='content'>
          <h1>Batasan</h1>
        </div>
      </div>
    </div>
  );
}

export default Hospitals
