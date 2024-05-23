import React from 'react'
import Navbar from './components/Navbarr'
import { Route, Routes } from 'react-router-dom'
import HealthConditions from './pages/HealthConditions'
import SelfDiagnosis from './pages/SelfDiagnosis'
import Hospitals from './pages/Hospitals'
import FAQs from './pages/FAQs'
import About from './pages/About'
import Login from './pages/Login'
import DoctorList from './pages/hospitalPages/DoctorList'
import DoctorPage from './pages/hospitalPages/doctorPage/DoctorPage'
import NoPageFound from './pages/NoPageFound'
import Home_page from './pages/MainPage'
import Switch_page from './pages/switch_page'
import Footer from './components/Footer'
import ViewAccount from './pages/ViewAccount'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Switch_page />} />
        <Route index element={<Home_page/>} />
        <Route path='/health-conditions' element={<HealthConditions />} />
        <Route path='/self-diagnosis' element={<SelfDiagnosis />} />
        <Route path='/hospitals' element={<Hospitals />} />
        <Route path='/hospitals/doctors' element={<DoctorList />} />
        <Route path='/hospitals/doctors/doctor-page' element={<DoctorPage />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/view-account' element={<ViewAccount/>}/>
        <Route path='*' element={<NoPageFound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
