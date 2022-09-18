import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import logo from "./logo.png";
import "./Navbar.css"

function Navbar(){

    const [nav] = useState(false);
    return (
        <div>
        <nav className={nav}>
            <a href="/" className='logo'>
                <img src={logo} alt=''/>
            </a>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='/'className='active' >Home</Link></li> 
                <li><Link to='/features'>Features</Link></li>
                <li><Link to='/sign-in'>Login</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact US</Link></li>
            </ul>
        </nav>
        </div>      
    );

}
export default Navbar;