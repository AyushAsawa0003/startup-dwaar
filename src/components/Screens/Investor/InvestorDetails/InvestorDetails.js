import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Industries } from "../../../../assets/files/Industries";

import { Stages } from "../../../../assets/files/StartupStage";

import { States } from "../../../../assets/files/States";

import SelectBox from "../../../CustomReactComponents/SelectBox";
import InvestorProfile from "./InvestorProfile";

const InvestorDetails = () => {
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

  const investors = [
    {
      id: uuidv4(),
      name: "GoldSachs Ventures",
      stage: "Ideation, Validation, EarlyTraction, Scaling",
      industry:
        "Analytics, Advertising, AR VR (Augmented + Virtual Reality), Automotive, Computer Vision, Telecommunication & Networking, Agriculture, AI, Finance Technology, Enterprise Software, Technology Hardware, Internet of Things, IT Services, Retail, Social Network, Logistics, Security Solutions",
      location: "Bengaluru",
    },
    {
      id: uuidv4(),
      name: "ZAR Partners",
      stage: "Ideation, Validation, Early Traction",
      industry:
        "AI, Enterprise Software, Internet of Things, Transportation & Storage, Logistics",
      location: "Coimbatore",
    },
    {
      id: uuidv4(),
      name: "Aurum PropTech",
      stage: "Ideation, Validation, EarlyTraction, Scaling",
      industry:
        "AR VR (Augmented + Virtual Reality), Construction, Green Technology, Internet of Things, Real Estate",
      location: "Mumbai",
    },
    {
      id: uuidv4(),
      name: "Ankurit Capital Fund",
      stage: "Early Traction, Scaling",
      industry:
        "Analytics, AR VR (Augmented + Virtual Reality), Computer Vision, Agriculture, Finance Technology, Enterprise Software, Food & Beverages, Education, Healthcare & Lifesciences, Logistics, Others",
      location: "Delhi",
    },
    {
      id: uuidv4(),
      name: "Manipal Technologies Limited",
      stage: "Validation, EarlyTraction, Scaling",
      industry:
        "Finance Technology, Retail, Professional & Commercial Services",
      location: "Bengaluru",
    },
    {
      id: uuidv4(),
      name: "Narayanan Muralidharan",
      stage: "Ideation, Validation, EarlyTraction, Scaling",
      industry:
        "Marketing, Aeronautics Aerospace & Defence, AI, Analytics, Automotive, Telecommunication & Networking, Computer Vision, Education, Renewable Energy, Green Technology, Enterprise Software, Events, Finance Technology, Food & Beverages, Technology Hardware, Healthcare & Lifesciences, Internet of Things, IT Services, Media & Entertainment, Nanotechnology, Robotics, Logistics",
      location: "Mumbai",
    },
  ];

  return (
    <div className="main-container">
      <div className="main-title"></div>
      <h5 className="fg-primary mb">
        Search Investor that help You Achieve your Goals
      </h5>
      <div className="search-bar-container text-sm bg-white">
        <SelectBox data={industries} placeholder={"Technology"} />
        <SelectBox data={stages} placeholder={"Startup Stage"} />
        <SelectBox data={states} placeholder={"Location"} />
      </div>
      <div className="mb" />
      <div className="profile-container">
        {investors.map((investor) => (
          <InvestorProfile
            key={investor.id}
            name={investor.name}
            stage={investor.stage}
            location={investor.location}
            industry={investor.industry}
          />
        ))}
      </div>
    </div>
  );
};

export default InvestorDetails;
