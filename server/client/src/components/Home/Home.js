import React from "react";
import "./Home.css";

function Home(){
    return (
        <div id='main'>
            <div className='name'>
                <h1><span>Resume Builder<br/></span>With Confidence And Creativity</h1>
                <p className='details'>Let's get started</p>
                <a href='/sign-up' className='cv-btn'>SignUp</a>
            </div>
            
        </div>
    )
}

export default Home;