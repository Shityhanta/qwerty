import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HealthConditions from './components/pages/HealthConditions'
import SelfDiagnosis from './components/pages/SelfDiagnosis'
import Hospitals from './components/pages/Hospitals'
import FAQs from './components/pages/FAQs'
import About from './components/pages/About'
import Home from './components/pages/Home'
import DoctorList from './components/pages/hospitalPages/DoctorList'
import EmerHotline from './components/pages/hospitalPages/EmerHotline'
import Ambulance from './components/pages/hospitalPages/Ambulance'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/health-conditions' element={<HealthConditions />} />
        <Route path='/self-diagnosis' element={<SelfDiagnosis />} />
        <Route path='/hospitals' element={<Hospitals />} />
        <Route path='/hospitals/doctors' element={<DoctorList />} />
        <Route path='/hospitals/emergency-hotline' element={<EmerHotline />} />
        <Route path='/hospitals/ambulance' element={<Ambulance />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
