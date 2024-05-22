import React from 'react';
import Home from './Home';
import Cards_Home from './Cards_Home';
import GoToSelfD from './GoToSelfD';
import Carousel from './Carousel';

function switch_page() {
  return (
    <div>
      <Home/>
      <Cards_Home/>
      <GoToSelfD />
      <Carousel/>
    </div>
  )
}

export default switch_page