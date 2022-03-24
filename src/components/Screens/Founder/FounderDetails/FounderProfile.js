import React from "react";

const FounderProfile = ({ img, name, stage, location, industry }) => {
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
        src={`https://picsum.photos/${Math.floor(Math.random() * 100)}`}
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
          <span>
            {location} | <span className="card-text text-sm ">{stage}</span>
          </span>
        </div>
        <div className="card-text text-lg mt">
          <span>{industry}</span>
        </div>
      </div>

      <span
        className="card-bottom btn-bg-primary "
        style={{
          // position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0px 0px 10px 10px ",
          height: 50,
          // alignSelf: "center",
        }}
      >
        <span className="fg-white">View Profile</span>
      </span>
    </div>
  );
};

export default FounderProfile;
