import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../assets/imgs/MainLogo.png'

const MainLogo = () => {
    return (
        <div className="nav-header">
            <Link to="/">
                <h1>Obuntu</h1>
            </Link>
        </div>
    )
}

export default MainLogo