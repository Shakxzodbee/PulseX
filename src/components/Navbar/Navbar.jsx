import React from "react"
import "./Navbar.css"
import { FaTelegram } from 'react-icons/fa';
import BrandLogo from "../../assets/brand-logo.png"
const Navbar = () => {

    function redirectToLogin() {
        window.location.href = "https://xpulse.top/login";
    }
    function redirectToRegister() {
        window.location.href = "https://xpulse.top/register";
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <div className="brand-logo-div">
                    <a href="#" className="brand-logo">
                        <img src={BrandLogo} alt="" />
                    </a>
                </div>
                <ul id="desktop-version">
                    <li>
                        <button onClick={redirectToLogin}>Login</button>
                        <button onClick={redirectToRegister}>Register</button>
                    </li>
                </ul>
                <div className="social-media">
                    <a href="#">
                        <FaTelegram />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar