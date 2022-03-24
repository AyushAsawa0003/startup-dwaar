import React, { useState, useEffect } from "react";
import {
  InputBox,
  SelectBox,
} from "../../../CustomReactComponents/CustomInputBox/InputBox.js";
import "../../../CustomReactComponents/CustomInputBox/InputBox.css";
import "../../../CustomReactComponents/CustomInputBox/Form.css";
import "../../SignupPages/Signup.css";
import SucessStories from "../../Investor/InvestorForm/SucessStories.js";

const IncubatorForm = () => {
  const [page, setPage] = useState(1);

  const [startups, setStartups] = useState([]);
  useState([]);

  const [pocDetails, setPocDetails] = useState({});

  const [incubatorDetails, setIncubatorDetails] = useState({
    pov: pocDetails,
    sucessfullStartups: startups,
  });

  const heading = [
    "Basic Information",
    "Contact Information",
    "Point of Contact",
    "Sucess Stories",
  ];

  console.log(startups);

  const updatePOcDetails = (pocDetails) => {
    setIncubatorDetails({ ...incubatorDetails, poc: pocDetails });
  };

  const updateSucessfullStartupDetails = (startups) => {
    setIncubatorDetails({ ...incubatorDetails, sucessfullStartups: startups });
  };

  useEffect(() => {
    console.log("update poc details");
    updatePOcDetails(pocDetails);
  }, [pocDetails]);

  useEffect(() => {
    console.log("update startup details");
    updateSucessfullStartupDetails(startups);
  }, [startups]);

  return (
    <div className="form w-100">
      <div className="form-container bg-white p-5">
        <div className="text-xxl align-center subhead fg-dark">
          {heading[page - 1]}
        </div>
        <div className="progress-bar text-xs fg-black">
          <span className="text-xs">Step 1</span>
          <span className="text-xs">Step 2</span>
          <span className="text-xs">Step 3</span>
          <span className="text-xs">Step 4</span>
        </div>
        <div>
          <span
            className="fill-color bg-primary"
            style={{ width: `${(page / 4) * 100}%` }}
          ></span>
        </div>
        <hr className="mb" />
        <div className="form-main mt-4">
          {page === 1 ? (
            <>
              <div className="form-item">
                <InputBox
                  idValue="incubator-name"
                  title="Incubator Name"
                  getData={(data) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      name: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="dipp"
                  title="DIIP Empanelment Number"
                  getData={(data) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      dipp: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <label htmlFor="logo" className="text-md">
                  Please attach your Company Logo
                  <span className="fg-danger"> *</span>
                </label>
                <input
                  value={incubatorDetails.logo}
                  type="file"
                  name="log"
                  id="log"
                  className="input-field"
                  onChange={(e) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      logo: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-item">
                <label htmlFor="doe" className="text-md">
                  Date of Establisment
                  <span className="fg-danger"> *</span>
                </label>
                <input
                  value={incubatorDetails.dateOfEst}
                  type="date"
                  name="doe"
                  id="doe"
                  className="input-field"
                  onChange={(e) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      dateOfEst: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-item">
                <InputBox
                  idValue="current-incubatees"
                  title="Number of Current Incubatees"
                  getData={(data) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      currentIncubatees: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="graduated-incubatees"
                  title="Number of Graduated Incubatees"
                  getData={(data) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      graduatedIncubatees: data,
                    })
                  }
                  required
                />
              </div>
              <SelectBox
                value={incubatorDetails.programDuration}
                for={"program-duration"}
                label={"Program Duration"}
                default={"Select"}
                options={[
                  "Upto 6 Months",
                  "6 to 12 Months",
                  "12 Months and above",
                ]}
                onChange={(e) =>
                  setIncubatorDetails({
                    ...incubatorDetails,
                    budget: e.target.value,
                  })
                }
              />
              <SelectBox
                for="stage"
                label="Select the Stage of Startup Interested"
                value={incubatorDetails.stage}
                // onChange={onChange(e, )}
                default={"Select the Startup Stage"}
                options={[
                  "Ideation",
                  "Validation",
                  "Scaling",
                  "Early Traction",
                ]}
                onChange={(e) =>
                  setIncubatorDetails({
                    ...incubatorDetails,
                    stage: e.target.value,
                  })
                }
              />
              <SelectBox
                for="industry"
                label="Industry "
                value={incubatorDetails.industry}
                // onChange={onChange(e, )}
                default={"Select"}
                options={[
                  "Analytics",
                  "Advertising",
                  "Software",
                  "Marketing",
                  "Electonics",
                  "Automobile",
                ]}
                onChange={(e) =>
                  setIncubatorDetails({
                    ...incubatorDetails,
                    industry: e.target.value,
                  })
                }
              />
              <SelectBox
                for="interests"
                label="Interests"
                value={incubatorDetails.interest}
                // onChange={onChange(e, )}
                default={"Select"}
                options={[
                  "Private",
                  "Government",
                  "Local based Servicing",
                  "Manufacturing",
                  "Mobile",
                  "Marketplace",
                  "Saas",
                  "Peer to Peer",
                ]}
                onChange={(e) =>
                  setIncubatorDetails({
                    ...incubatorDetails,
                    interest: e.target.value,
                  })
                }
              />
              <div className="form-item">
                <label htmlFor="idea" className="text-md">
                  Brief
                  <span className="fg-danger"> *</span>
                </label>
                <textarea
                  value={incubatorDetails.brief}
                  rows={5}
                  name="brief"
                  id="brief"
                  className="input-field"
                  placeholder="Let it flow..."
                  onChange={(e) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      brief: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item"></div>
            </>
          ) : page === 2 ? (
            <>
              <div className="form-item">
                <InputBox
                  idValue="country"
                  title="Country"
                  getData={(data) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      country: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="state"
                  title="State"
                  getData={(data) =>
                    setIncubatorDetails({ ...incubatorDetails, state: data })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="city"
                  title="City"
                  getData={(data) =>
                    setIncubatorDetails({ ...incubatorDetails, city: data })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="mobile-num"
                  title="Mobile Number"
                  getData={(data) =>
                    setIncubatorDetails({
                      ...incubatorDetails,
                      investorContact: data,
                    })
                  }
                />
              </div>
            </>
          ) : page === 3 ? (
            <>
              <div className="form-item">
                <InputBox
                  idValue="first-name"
                  title="First Name"
                  getData={(data) =>
                    setPocDetails({
                      ...pocDetails,
                      firsName: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="last-name"
                  title="Last Name"
                  getData={(data) =>
                    setPocDetails({
                      ...pocDetails,
                      lastName: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="email-id"
                  title="Email ID"
                  getData={(data) =>
                    setPocDetails({
                      ...pocDetails,
                      emailId: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="mobile-num"
                  title="Mobile number"
                  getData={(data) =>
                    setPocDetails({
                      ...pocDetails,
                      mobileNum: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="role"
                  title="Role"
                  getData={(data) =>
                    setPocDetails({
                      ...pocDetails,
                      role: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="landlineNum"
                  title="Landline Number"
                  getData={(data) =>
                    setPocDetails({
                      ...pocDetails,
                      landlineNum: data,
                    })
                  }
                  required={false}
                />
              </div>

              <div className="form-item">
                <InputBox
                  idValue="website"
                  title="Website"
                  getData={(data) =>
                    setPocDetails({
                      ...pocDetails,
                      website: data,
                    })
                  }
                  required={false}
                />
              </div>

              <div className="form-item">
                <InputBox
                  idValue="social-media"
                  title="Social Media URL"
                  getData={(data) =>
                    setPocDetails({
                      ...pocDetails,
                      socialMediaURL: data,
                    })
                  }
                  required={false}
                />
              </div>
            </>
          ) : (
            <SucessStories startups={startups} setStartups={setStartups} />
          )}

          <div className="form-item">
            <input
              type={"button"}
              name="go-back"
              id="go-back"
              className="input-field
              btn-bg-secondary fg-primary"
              value={"Go Back"}
              onClick={() => setPage((prev) => (prev === 1 ? prev : prev - 1))}
              required
            />
          </div>
          <div className="form-item">
            <input
              disabled={false}
              type={"button"}
              name="submit-btn"
              id="submit-btns"
              className={`input-field ${
                // checkAllFields()
                true ? "btn-bg-primary" : "btn-primary"
              } fg-white`}
              value={page === 4 ? "Submit" : "Next"}
              onClick={() => setPage((prev) => (prev === 4 ? prev : prev + 1))}
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncubatorForm;
