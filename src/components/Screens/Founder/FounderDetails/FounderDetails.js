import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Industries } from "../../../../assets/files/Industries";

import { Stages } from "../../../../assets/files/StartupStage";

import { States } from "../../../../assets/files/States";

import SelectBox from "../../../CustomReactComponents/SelectBox";
import FounderProfile from "./FounderProfile";

const FounderDetails = () => {
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

  const startups = [
    {
      id: uuidv4(),
      name: "Netrika Consulting India Pvt. Ltd.",
      stage: "Scaling",
      industry: "IT Services",
      location: "Delhi",
    },
    {
      id: uuidv4(),
      name: "Surplus Fincare Private LImited",
      stage: "Validation",
      industry: "Finance",
      location: "Mumbai",
    },
    {
      id: uuidv4(),
      name: "October Spice",
      stage: "Validation",
      industry: "Food Industry",
      location: "Mumbai",
    },
    {
      id: uuidv4(),
      name: "Farmsons Agri Solutions Private Limited",
      stage: "Scaling",
      industry: "Agriculture",
      location: "Hyderabad",
    },
    {
      id: uuidv4(),
      name: "The Purple Roze",
      stage: "Ideation",
      industry: "Event Services",
      location: "Kolkata",
    },
    {
      id: uuidv4(),
      name: "AT5 star engineers",
      stage: "Early Traction",
      industry: "Other",
      location: "Delhi",
    },
  ];

  return (
    <div className="main-container">
      <div className="main-title"></div>
      <h5 className="fg-primary mb">Search Startups that Fits Your Goals</h5>
      <div className="search-bar-container text-sm bg-white">
        <SelectBox data={industries} placeholder={"Industry"} />
        <SelectBox data={stages} placeholder={"Startup Stage"} />
        <SelectBox data={states} placeholder={"Location"} />
      </div>
      <div className="mb" />
      <div className="profile-container">
        {startups.map((startup) => (
          <FounderProfile
            key={startup.id}
            name={startup.name}
            stage={startup.stage}
            location={startup.location}
            industry={startup.industry}
          />
        ))}
      </div>
    </div>
  );
};

export default FounderDetails;
