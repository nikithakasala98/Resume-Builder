import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import logo from "./logo.png";
import "./Navbar.css"

class Navbar extends Component{
    constructor(props) {
        super(props)
    }

    clearStorage(){
        window.localStorage.clear();
    }

    render(){
        return (
            <div>
            <nav >
                <a href="/" className='logo'>
                    <img src={logo} alt='logo'/>
                </a>
                <input type='checkbox' className='menu-btn' id='menu-btn'/>
                <label className='menu-icon' htmlFor='menu-btn'>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li><Link to='/'>Home</Link></li> 
                    <li><Link to='/features'>Features</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact US</Link></li>
                    <li><Link to='/sign-in' onClick={this.clearStorage} >Logout</Link></li>
                </ul>
            </nav>
            </div>      
        );
    
    }
}
    
export default Navbar;