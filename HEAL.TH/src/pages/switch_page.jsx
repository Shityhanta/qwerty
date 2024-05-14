import React from 'react';
import Navbar from '../components/Navbarr';
import { Outlet } from 'react-router-dom';

function switch_page() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default switch_page