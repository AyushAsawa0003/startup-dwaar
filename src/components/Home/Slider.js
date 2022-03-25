import React, { useEffect, useState } from "react";
import Box from "./Box";
import { Link } from "react-router-dom";

const Slider = (props) => {
  const [founders, setFounders] = useState([]);

  const get_data = async () => {
    let response;
    if (props.title === "Startup") {
      response = await fetch("/founder/get_founder/");
    } else {
      response = await fetch("/investor/get_investor/");
    }
    const result = await response.json();
    console.log(result);
    setFounders(result.success);
  };

  useEffect(() => {
    get_data();
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h5>{props.title}</h5>
        <Link
          to={`${props.title.toLowerCase()}/details`}
          style={{ textDecorationLine: "none" }}
        >
          <p className="mb-0 ">View all</p>
        </Link>
      </div>
      <div className="d-flex justify-content-between mt-4">
        {founders && founders.map((founder) => <Box founder={founder} />)}

        {/* <Box />
                <Box />
                <Box />
                <Box /> */}
      </div>
    </div>
  );
};

export default Slider;
