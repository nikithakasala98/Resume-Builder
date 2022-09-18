import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/Login/login_component";
import SignUp from "./components/Login/signup_component";
import ResumeBuilder from "./components/ResumeBuilder/ResumeBuilder";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Reset from "./components/Login/reset";

function App() {
  return (   
      <div className="App">
        <Navbar/>
            <Routes>
              <Route exact path="/" element = {<Home />}/>
              <Route path="/features" element = {<Features/>}/> 
              <Route path="/about" element = {<About/>}/>
              <Route path="/contact"element = {<Contact/>}/> 
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/forgot-password" element={<Reset />} />
            </Routes>
        <Routes>
          <Route path="/ResumeBuilder" element={< ResumeBuilder/>} />
        </Routes>
      </div>
  );
}

export default App;
