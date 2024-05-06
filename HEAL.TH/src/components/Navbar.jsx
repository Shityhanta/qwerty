import React, {useState} from 'react'
import "./Navbar.css"

import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { MdOutlinePersonOutline } from "react-icons/md";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
        <Link to='/' className='title'>
            HEAL.TH
        </Link>
        <div className='menu' onClick={() => {
            setMenuOpen(!menuOpen);
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to='/health-conditions'>Health Conditions </NavLink>
            </li>
            <li>
                <NavLink to='/self-diagnosis'>Self Diagnosis</NavLink>
            </li>
            <li>
                <NavLink to='/hospitals'>Hospitals</NavLink>
            </li>
            <li>
                <NavLink to='/faqs'>FAQs</NavLink>
            </li>
            <li>
                <NavLink to='/about-us'>Abous Us</NavLink>
            </li>
            <li>
                <NavLink to='/login'>
                    <MdOutlinePersonOutline size={23}/>
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar