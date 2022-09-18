import React from "react";
import aboutimage from "./Frame_19.png";
import "./About.css";

function About(props){
    return(
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
            <div className='about-text'>
                <h2>Comes With All You Need when in Job Trials </h2>
                <p>
                    We are dedicated developer's , Developed this application to help job seekers create there Resume.
                </p>
                
            </div>
        </div>
    )
}

export default About;