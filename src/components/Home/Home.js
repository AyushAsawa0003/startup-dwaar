import React from "react";
import Header from "./Header";
import "./Home.css";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="container-fluid px-0 bg-white">
      <Header />
      <Slider title="What are you looking for ?" />
      <Slider title="Startup" />
      <Slider title="Investor" />
      <Slider title="Incubator" />
    </div>
  );
};

export default Home;
