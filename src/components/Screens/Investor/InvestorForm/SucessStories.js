import React, { useState } from "react";

import SucessfullStartup from "./SucessfullStartup";

import { v4 as uuidv4 } from "uuid";
import { FaEdit, FaTrash } from "react-icons/fa";

import "../../../CustomReactComponents/CustomInputBox/InputBox.css";
import "../../../CustomReactComponents/CustomInputBox/Form.css";
import "../../SignupPages/Signup.css";

const SucessStories = ({ startups, setStartups }) => {
  const [hasStartup, setHasStartup] = useState(0);

  const deleteStartup = (id) => {
    let filterItems = startups.filter((startup) => startup.id !== id);
    setStartups(filterItems);
  };

  return (
    <div>
      <>
        <div className="form-item">
          <span>
            <label htmlFor="sucess-story" className="text-md">
              Sucess Stories?
              {/* <span className="fg-danger"> *</span> */}
            </label>
            <input
              value={hasStartup}
              type="range"
              name="sucess-story"
              id="sucess-story"
              // className="input-field"
              className="slider-btn fg-primary"
              min={0}
              max={1}
              onChange={(e) => {
                setHasStartup(e.target.value);
              }}
              required
            />
          </span>
        </div>
        <div className="form-item align-center"></div>

        {hasStartup === "1" ? (
          <>
            <SucessfullStartup
              setStartups={setStartups}
              startups={startups}
              deleteStartup={deleteStartup}
              id={uuidv4()}
            />
            {startups.length === 0 ? (
              <></>
            ) : (
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Startup Name</th>
                      <th>Website/App URL</th>
                      <th>Brief</th>
                      <th>Options</th>
                    </tr>
                  </thead>
                  {startups.map((startup) => (
                    <tbody key={startup.id}>
                      <tr>
                        <td>{startup.startupName}</td>
                        <td>{startup.link}</td>
                        <td>{startup.brief}</td>
                        <td>
                          <FaEdit size={20} color="green" className="mr" />
                          <FaTrash
                            size={20}
                            color="red"
                            className="ml"
                            cursor={"pointer"}
                            onClick={() => deleteStartup(startup.id)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            )}
          </>
        ) : (
          <></>
        )}

        <span className="mb" />

        <label className="container text-md">
          Terms and conditions The information posted on this website could
          include hypertext links or pointers to information created and
          maintained by non-Government/private organisations. DPIIT is providing
          these links and pointers solely for your information and convenience.
          When you select a link to an outside website, you are leaving the
          'Guidelines for Indian Government Websites' site and are subject to
          the privacy and security policies of the owners/sponsors of the
          outside website. These terms and conditions shall be governed by and
          construed in accordance with the Indian Laws. Any dispute arising
          under these terms and conditions shall be subject to the jurisdiction
          of the courts of India.
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </>
    </div>
  );
};

export default SucessStories;
