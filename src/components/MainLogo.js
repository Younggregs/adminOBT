import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/imgs/MainLogo.png'

const MainLogo = () => {
    return (
        <div className="nav-header">
            <Link to="/">
            <img 
                src={Logo} 
                width="160px" 
                height="74px"
                alt="Logo" 
            />
            </Link>
        </div>
    )
}

export default MainLogo