import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Industries } from "../../../../assets/files/Industries";

import { Stages } from "../../../../assets/files/StartupStage";

import { States } from "../../../../assets/files/States";

import SelectBox from "../../../CustomReactComponents/SelectBox";
import MentorProfile from "./MentorProfile";

const IncubatorDetails = () => {
  const industries = [];
  const stages = [];
  const states = [];

  Industries.map((industry) =>
    industries.push({
      label: industry,
      value: industry,
    })
  );

  Stages.map((stage) =>
    stages.push({
      label: stage,
      value: stage,
    })
  );

  States.map((state) =>
    states.push({
      label: state,
      value: state,
    })
  );

  const mentors = [
    {
      id: uuidv4(),
      name: "Dr. Raj Pandey",
      stage: "EarlyTraction, Scaling",
      industry: "IT Services",
      experience: "10+ years",
      location: "Mumbai",
    },
    {
      id: uuidv4(),
      name: "Padmakumar Ananthakrishnan",
      stage: "Ideation, Validation, Early Traction",
      industry: "Agriculture, Enterprise Software, IT Services, Human Resource",
      experience: "30+ years",
      location: "Hyderabad",
    },
    {
      id: uuidv4(),
      name: "CHAITANYA JADHAV",
      stage: "Ideation, Validation, EarlyTraction, Scaling",
      industry: "Healthcare & Lifesciences",
      experience: "15+ years",
      location: "Nashik",
    },
    {
      id: uuidv4(),
      name: "Ankurit Sharma",
      stage: "Early Traction, Scaling",
      industry:
        "Analytics, AR VR (Augmented + Virtual Reality), Computer Vision, Agriculture, Finance Technology, Enterprise Software, Food & Beverages, Education, Healthcare & Lifesciences, Logistics, Others",
      experience: "10+ years",

      location: "Delhi",
    },
    {
      id: uuidv4(),
      name: "DR B J RAJESH",
      stage: "Validation, EarlyTraction, Scaling",
      industry: "Healthcare & Lifesciences",
      experience: "20+ years",
      location: "Bengaluru",
    },
    {
      id: uuidv4(),
      name: "Manikumar Lakkaraju",
      stage: "Ideation, Validation, EarlyTraction, Scaling",
      industry:
        "Enterprise Software, Food & Beverages, Design, Internet of Things, IT Services",
      experience: "23+ years",

      location: "Bengaluru",
    },
  ];

  return (
    <div className="main-container">
      <div className="main-title"></div>
      <h5 className="fg-primary mb">Search Investor to get Started</h5>
      <div className="search-bar-container text-sm bg-white">
        <SelectBox data={industries} placeholder={"Industry"} />
        <SelectBox data={stages} placeholder={"Startup Stage"} />
        <SelectBox data={states} placeholder={"Location"} />
      </div>
      <div className="mb" />
      <div className="profile-container">
        {mentors.map((mentor) => (
          <MentorProfile
            key={mentor.id}
            name={mentor.name}
            stage={mentor.stage}
            location={mentor.location}
            industry={mentor.industry}
            experience={mentor.experience}
          />
        ))}
      </div>
    </div>
  );
};

export default IncubatorDetails;
