import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    const [loginBtn, setLoginBtn] = useState("login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between h-32 border-b-black border-b-[1px]">
            <div className="logo-container ">
                <img className="w-44 h-[125px]" src={LOGO_URL} alt="a" />
            </div>
            <div className="nav-links">
                <ul className="flex p-8 m-8 justify-center">
                <li className="px-2 text-xl">
                    online Status: {onlineStatus ? "💚" : "❤️"}
                </li>
                    <li className="px-2 text-xl"><Link to="/">Home</Link></li>
                    <li className="px-2 text-xl"><Link to="/about">About</Link></li>
                    <li className="px-2 text-xl"><Link to="/contact">Contact</Link></li>
                    <li className="px-2 text-xl"><Link to="/">Cart</Link></li>
                    
                <button className="login mx-6 justify-center border rounded-sm px-4 py-2 bg-green-300" onClick={()=>{
                    loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login");
                }} >{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;