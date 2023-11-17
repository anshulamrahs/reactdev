import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

    const [loginBtn, setLoginBtn] = useState("login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="a" />
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/">Cart</Link></li>
                    
                <button className="login" onClick={()=>{
                    loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                }} >{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;