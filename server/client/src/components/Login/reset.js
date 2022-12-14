import React, { Component } from "react";
import "./Reset.css";

export default class reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {             
    e.preventDefault();
    const { email} = this.state;
    console.log(email);

    fetch("https://resume-builder-projects.herokuapp.com/forgot-password", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        alert(data.status);
      });
    }

  
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={this.handleSubmit}>
            <h3>Forgot Password</h3>
            
              <div className="mb-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
            
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              <a href="/sign-in">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    );
  }

}