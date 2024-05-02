import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HealthConditions from './components/pages/HealthConditions'
import SelfDiagnosis from './components/pages/SelfDiagnosis'
import Hospitals from './components/pages/Hospitals'
import FAQs from './components/pages/FAQs'
import About from './components/pages/About'
import Home from './components/pages/Home'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/health-conditions' element={<HealthConditions />} />
        <Route path='/self-diagnosis' element={<SelfDiagnosis />} />
        <Route path='/hospitals' element={<Hospitals />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
