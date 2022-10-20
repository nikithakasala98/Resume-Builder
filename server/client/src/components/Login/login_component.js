import React, { Component } from "react";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {             
    e.preventDefault();
    const {email, password} = this.state;
    
    console.log(email, password);
    if(email != ""  && password != ""){
    fetch("https://resume-builder-projects.herokuapp.com/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          window.localStorage.setItem("email", email);
          window.localStorage.setItem("token", data.data);
          window.location.href = "./ResumeBuilder/";
        }
      });
    }
  }
  
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
              <h3>Sign In</h3>
              
                <div className="mb-3">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    value={this.state.email}
                    required
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>
              
                <div className="mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Enter your password"
                    value={this.state.password}
                    required
                    onChange={(e) => this.setState({ password: e.target.value })}
                  />
                </div> 
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right">
                <a href="/forgot-password">Forgot-Password?</a>
              </p>
            </form>
          </div>
        </div>
    );
  }

}