/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const NavigationBar = () => {
  const nav_options = [
    "Founder",
    "Investor",
    "Incubator",
    "Mentor",
    "Job-seeker",
  ];

  return (
    <nav className="nav-bar-container bg-white">
      <Link to={"/"} style={{ textDecorationLine: "none" }}>
        <div>
          <span className="text-xl nav-bar-title fg-primary">Startup</span>
          <span className="text-xl nav-bar-title fg-font-dark">Dwaar</span>
        </div>
      </Link>

      <div className="nav-bar-option-container">
        {nav_options.map((option) => (
          <Link to={`/${option.toLowerCase()}/dashboard`} key={uuidv4()}>
            <span className="nav-bar-option text-lg fg-primary">{option}</span>
          </Link>
        ))}
      </div>

      <div className="authentication-container">
        <Link to="/login">
          <span className="nav-bar-option text-lg fg-primary">Login</span>
        </Link>
        <Link to={"/signup"}>
          <span className="nav-bar-option text-lg fg-primary">Signup</span>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
