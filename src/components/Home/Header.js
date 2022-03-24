import React from "react";
import headerImg from "../../assets/img/header.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header_container">
      <img className="header_background" src={headerImg} alt="" />
      <div className="header_content">
        <h4 className="fw-bold fg-primary">HAVE NO FEAR,</h4>
        <h1 className="text-primary fg-primary">We got everything here!</h1>
        <p className="pt-4 text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sint
          iste temporibus inventore animi voluptatem praesentium eos distinctio
          ea amet doloremque alias nemo, architecto possimus iure quos?
          Delectus, qui odio.
        </p>
      </div>
    </div>
  );
};

export default Header;
