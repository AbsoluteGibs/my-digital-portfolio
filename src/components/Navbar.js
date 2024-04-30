import '../styles/Navbar.css';
import React, {useState} from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
    const [menuExpand, setMenuExpand] = useState(false);
    return (
        <nav>
            <NavLink to="/">
                <img className='logo' src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo"></img>
            </NavLink>
            <div className='expander' onClick={() => {
                setMenuExpand(!menuExpand)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuExpand ? "expand" : ""}>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/my-works">My Works</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
