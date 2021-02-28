import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import MainLogo from '../components/MainLogo'
// import CopyLink from '../components/CopyLink'

const InnerNavbar = (props) => {
    return (
        <div className="onepage-navbar-inner">
            <nav className="navbar container">
                <div className="nav">
                <input type="checkbox" id="nav-check" />
                    <div className="logo-btn">
                        <MainLogo />
                        <div className="mobile-navbar">
                            <Link to='/logout'>
                                <b>Log out</b>
                            </Link>
                        </div>
                    </div>
                        <div className="flip-header">
                            <div className="nav-links link-inner">
                                <div className="inner-header">
                                    <ul>
                                        <li className="col-md-4">
                                            <Link 
                                                className={props.guide ? ("active") : ("")} 
                                                to='/admin'
                                                style={{textDecoration: 'none'}}
                                            >
                                                Admins
                                            </Link>
                                        </li>
                                        <li className="col-md-4">
                                            <Link 
                                                className={props.user ? ("active") : ("")} 
                                                to='/user'
                                                style={{textDecoration: 'none'}}
                                            >
                                                Users
                                            </Link>
                                        </li>
                                        <li className="col-md-4">
                                            <Link 
                                                className={props.location ? ("active") : ("")} 
                                                to='/location'
                                                style={{textDecoration: 'none'}}
                                            >
                                                Location
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <ul>
                                    <li>
                                        <Link 
                                            to='/logout'>
                                            <b>Logout</b>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    {/* <CopyLink /> */}
                </div>
            </nav>
        </div>
    )
};

export default InnerNavbar;