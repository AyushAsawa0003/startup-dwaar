import React, { useEffect, useState } from "react";
import {
  InputBox,
  SelectBox,
} from "../../../CustomReactComponents/CustomInputBox/InputBox.js";

import "../../../CustomReactComponents/CustomInputBox/InputBox.css";
import "../../../CustomReactComponents/CustomInputBox/Form.css";
import "../../SignupPages/Signup.css";
import "./InvestorForm.css";

import SucessStories from "./SucessStories.js";

const InvestorForm = () => {
  const [page, setPage] = useState(1);

  const [startups, setStartups] = useState([]);

  console.log(startups);

  const [pocDetails, setPocDetails] = useState({});

  const [investorDetails, setInvestorDetails] = useState({
    logo: "",
    budget: "",
    stage: "",
    description: "",
    industry: "",
    interest: "",
    state: "",
    city: "",
    country: "",
    investorContact: "",
    poc: pocDetails,
    sucessfullStartups: startups,
  });

  console.log(investorDetails);

  const onChange = () => {};
  const heading = [
    "Basic Information",
    "Contact Information",
    "Point of Contact",
    "Sucess Stories",
  ];

  const updatePOcDetails = (pocDetails) => {
    setInvestorDetails({ ...investorDetails, poc: pocDetails });
  };

  const updateSucessfullStartupDetails = (startups) => {
    setInvestorDetails({ ...investorDetails, sucessfullStartups: startups });
  };

  useEffect(() => {
    console.log("update poc details");
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
                <label htmlFor="logo" className="text-md">
                  Please attach your Company Logo
                  <span className="fg-danger"> *</span>
                </label>
                <input
                  value={investorDetails.logo}
                  type="file"
                  name="log"
                  id="log"
                  className="input-field"
                  onChange={(e) => onChange("logo", e)}
                  required
                />
              </div>
              <SelectBox
                value={investorDetails.budget}
                for={"budget"}
                label={"Budget(INR)"}
                default={"Select your budget"}
                options={[
                  "Rs 0-50 Lakh",
                  "Rs 50 Lakh- 2 Cr",
                  "Rs 2 Cr - 5 Cr",
                  "Rs 5 Cr+",
                ]}
                onChange={(e) =>
                  setInvestorDetails({
                    ...investorDetails,
                    budget: e.target.value,
                  })
                }
              />

              <SelectBox
                for="stage"
                label="Select the Stage of Startup "
                value={investorDetails.stage}
                // onChange={onChange(e, )}
                default={"Select the Startup Stage"}
                options={[
                  "Ideation",
                  "Validation",
                  "Scaling",
                  "Early Traction",
                ]}
                onChange={(e) =>
                  setInvestorDetails({
                    ...investorDetails,
                    stage: e.target.value,
                  })
                }
              />

              <SelectBox
                for="industry"
                label="Industry "
                value={investorDetails.industry}
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
                  setInvestorDetails({
                    ...investorDetails,
                    industry: e.target.value,
                  })
                }
              />

              <SelectBox
                for="interest"
                label="Interest "
                value={investorDetails.interest}
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
                  setInvestorDetails({
                    ...investorDetails,
                    interest: e.target.value,
                  })
                }
              />
              <div className="form-item"></div>

              <div className="form-item">
                <label htmlFor="idea" className="text-md">
                  Abour ur self
                  <span className="fg-danger"> *</span>
                </label>
                <textarea
                  value={investorDetails.description}
                  rows={5}
                  name="idea"
                  id="idea"
                  className="input-field"
                  placeholder="Let it flow..."
                  onChange={(e) =>
                    setInvestorDetails({
                      ...investorDetails,
                      description: e.target.value,
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
                    setInvestorDetails({
                      ...investorDetails,
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
                    setInvestorDetails({ ...investorDetails, state: data })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="city"
                  title="City"
                  getData={(data) =>
                    setInvestorDetails({ ...investorDetails, city: data })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="mobile-num"
                  title="Mobile Number"
                  getData={(data) =>
                    setInvestorDetails({
                      ...investorDetails,
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

export default InvestorForm;
