import React from "react";
import SelectBox from "../../../CustomReactComponents/SelectBox";

import "./JobSeekerDetails.css";
import JobSeekerProfile from "./JobSeekerProfile";
import { v4 as uuidv4 } from "uuid";

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

  const profiles = [
    {
      id: uuidv4(),
      name: "Ayush Asawa",
      location: "Mumbai",
      level: "Fresher",
      title: "Frontend Developer",
      primarySkill: "React",
      secondarySkill: "Java",
    },
    {
      id: uuidv4(),
      name: "Divit Kalathil",
      location: "Mumbai",
      level: "Fresher",
      title: "Backend  Developer",
      primarySkill: "Java",
      secondarySkill: "Python",
    },
    {
      id: uuidv4(),
      name: "Pranav Aher",
      location: "Mumbai",
      level: "Intermediate",
      title: "Full Stack Developer",
      primarySkill: "Python",
      secondarySkill: "React",
    },
    {
      id: uuidv4(),
      name: "Shravani Rahise",
      location: "Nagpur",
      level: "Fresher",
      title: "Account Executive",
      primarySkill: "Excel",
      secondarySkill: "Alteryx",
    },
    {
      id: uuidv4(),
      name: "Archis Gune",
      location: "Mumbai",
      level: "Intermediate",
      title: "Power Electronics",
      primarySkill: "Control Systems",
      secondarySkill: "Analog Circuits",
    },
    {
      id: uuidv4(),
      name: "Rahul Gupta",
      location: "Delhi",
      level: "Pro",
      title: "Project Manager",
      primarySkill: "Risk Management",
      secondarySkill: "AWS",
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
        {profiles.map((profile) => (
          <JobSeekerProfile
            key={profile.id}
            title={profile.title}
            name={profile.name}
            location={profile.location}
            level={profile.level}
            primarySkill={profile.primarySkill}
            secondarySkill={profile.secondarySkill}
          />
        ))}
      </div>
    </div>
  );
};

export default JobSeekerDetails;
