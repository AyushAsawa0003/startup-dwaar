import React from "react";

const JobSeekerProfile = () => {
  return (
    <div>
      <div
        className="card"
        style={{
          width: "15rem",

          borderRadius: "10px 10px",
          boxShadow: "0px 0px 10px 0.2px rgba(0,0,0,0.3)",
        }}
      >
        <img
          className="card-img-top"
          src={require("../../../../assets/img/mentors.jpg")}
          alt="Card cap"
          style={{
            borderRadius: "100%",
            height: "200px",
            width: "200px",
            alignSelf: "center",
            padding: 10,
          }}
        />
        {/* <hr /> */}
        <div className="card-body text-center">
          <h5 className="card-title">Ayush Asawa</h5>
          <div className="card-text text-sm">
            <span>Mumbai</span> | <span>Intermediate</span>
          </div>
          <div className="card-text text-lg mt">
            <span>Front End Developer</span>
          </div>
          <div className="card-text text-sm">
            <span>React</span> | <span>Java</span> | <span>Angular</span>
          </div>
        </div>

        <a
          className="card-body text-center btn-bg-primary fg-white"
          href="https://getbootstrap.com/docs/4.0/components/card/"
          style={{
            borderRadius: "0px 0px 10px 10px ",
          }}
        >
          {" "}
          View Profile
        </a>
      </div>
    </div>
  );
};

export default JobSeekerProfile;
