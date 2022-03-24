import React from "react";

const JobSeekerProfile = ({
  name,
  title,
  primarySkill,
  secondarySkill,
  location,
  level,
}) => {
  return (
    <div
      className="card"
      style={{
        width: "15rem",
        flex: "1 1 25%",
        borderRadius: "10px 10px",
        boxShadow: "0px 0px 10px 0.2px rgba(0,0,0,0.3)",
        margin: "20px",
      }}
    >
      <img
        className="card-img-top"
        src={`https://randomuser.me/api/portraits/men/${Math.floor(
          Math.random() * 100
        )}.jpg`}
        alt="Card cap"
        style={{
          borderRadius: "100%",
          height: "200px",
          width: "200px",
          alignSelf: "center",
          objectFit: "cover",
          padding: 10,
        }}
      />
      {/* <hr /> */}
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
        <div className="card-text text-sm">
          <span>{location}</span> | <span>{level}</span>
        </div>
        <div className="card-text text-lg mt">
          <span>{title}</span>
        </div>
        <div className="card-text text-sm">
          <span>{primarySkill}</span> | <span>{secondarySkill}</span>
        </div>
      </div>

      <span
        className="card-body text-center btn-bg-primary fg-white"
        style={{
          borderRadius: "0px 0px 10px 10px ",
        }}
      >
        View Profile
      </span>
    </div>
  );
};

export default JobSeekerProfile;
