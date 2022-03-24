import React from "react";
import Header from "./Header";
import "./Home.css";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="container-fluid px-0 bg-secondary">
      <Header />
      <div className="form-item text-xxl ml mt mb">
        What are you looking for ?
      </div>
      <Slider title="Founder" />
      <Slider title="Investor" />
      <Slider title="Incubator" />
      <Slider title="Mentor" />
      <Slider title="Job-seeker" />
    </div>
  );
};

export default Home;
