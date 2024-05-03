import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HealthConditions from './pages/HealthConditions'
import SelfDiagnosis from './pages/SelfDiagnosis'
import Hospitals from './pages/Hospitals'
import FAQs from './pages/FAQs'
import About from './pages/About'
import Home from './pages/Home'
import DoctorList from './pages/hospitalPages/DoctorList'
import EmerHotline from './pages/hospitalPages/EmerHotline'
import Ambulance from './pages/hospitalPages/Ambulance'
import DoctorPage from './pages/hospitalPages/doctorPage/DoctorPage'

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
        <Route path='/hospitals/doctors/doctor-page' element={<DoctorPage />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/about-us' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
