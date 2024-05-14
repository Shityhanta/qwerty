import React from 'react';
import Hero from './hero';
import Cards_Home from './Cards_Home';
import Carousel from './Carousel';
import GoToSelfD from './GoToSelfD';
function switch_page() {
  return (
    <div>
      <Hero/>
      <Cards_Home/>
      <GoToSelfD/>
      <Carousel/>
    </div>
  )
}

export default switch_page