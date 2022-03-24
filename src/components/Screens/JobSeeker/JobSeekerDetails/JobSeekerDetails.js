import React from "react";
import SelectBox from "../../../CustomReactComponents/SelectBox";

import "./JobSeekerDetails.css";
import JobSeekerProfile from "./JobSeekerProfile";

const JobSeekerDetails = () => {
  const technology = [
    {
      label: "Java",
      value: "java",
    },
    {
      label: "React JS",
      value: "react js",
    },
    {
      label: "React Native",
      value: "react native",
    },
    {
      label: "Angular",
      value: "angular",
    },
    {
      label: "Spring Boot",
      value: "spring boot",
    },
  ];

  const location = [
    {
      label: "Mumbai",
      value: "mumbai",
    },
    {
      label: "Delhi",
      value: "delhi",
    },
    {
      label: "Banglore",
      value: "banglore",
    },
    {
      label: "Chennai",
      value: "chennai",
    },
    {
      label: "Hyderabad",
      value: "hyderabad",
    },
  ];

  const availablity = [
    {
      label: "Immediate",
      value: "immediate",
    },
    {
      label: "15 Days",
      value: "15 days",
    },
    {
      label: "30 Days",
      value: "30 days",
    },
    {
      label: "more than 30 Days",
      value: "30+ days",
    },
    {
      label: "Serving notice period",
      value: "notice period",
    },
  ];

  return (
    <div className="main-container">
      <div className="main-title"></div>
      <h5 className="fg-primary mb">
        Search Right Professional For your Startup
      </h5>
      <div className="search-bar-container text-sm bg-white">
        <SelectBox data={technology} placeholder={"Technology"} />
        <SelectBox data={location} placeholder={"Location"} />
        <SelectBox data={availablity} placeholder={"Availablity"} />
      </div>
      <div className="mb" />
      <div className="profile-container">
        <JobSeekerProfile />
        <JobSeekerProfile />
        <JobSeekerProfile />
      </div>
    </div>
  );
};

export default JobSeekerDetails;
