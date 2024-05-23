import React from 'react';
import Cards_Home from './Cards_Home';
import GoToSelfD from './GoToSelfD';
import Carousel from './Carousel';
import Hero from './Hero';

function switch_page() {
  return (
    <div>
      <Hero/>
      <Cards_Home/>
      <GoToSelfD />
      <Carousel/>
    </div>
  )
}

export default switch_page