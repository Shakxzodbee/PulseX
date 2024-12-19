import React from "react"
import "./Navbar.css"
import BrandLogo from "../../assets/brand-logo.png"
import Fatelegram from "../../assets/logos/telegram.svg"
const Navbar = () => {

    function redirectToLogin() {
        window.location.href = "https://xpulse.top/login";
    }
    function redirectToRegister() {
        window.location.href = "https://xpulse.top/register";
    }
    function TelegramAdress() {
        window.location.href = "https://t.me/xpulsesupport";
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
                    <a href="#" onClick={TelegramAdress}>
                        <img src={Fatelegram} alt="" />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar