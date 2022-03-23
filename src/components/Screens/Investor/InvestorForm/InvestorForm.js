<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff
import {
  InputBox,
  SelectBox,
} from "../../../CustomReactComponents/CustomInputBox/InputBox.js";

import "../../../CustomReactComponents/CustomInputBox/InputBox.css";
import "../../../CustomReactComponents/CustomInputBox/Form.css";
import "../../SignupPages/Signup.css";
<<<<<<< HEAD
import SucessfullStartup from "./SucessfullStartup";
=======
import "./InvestorForm.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import SucessStories from "./SucessStories.js";
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff

const InvestorForm = () => {
  const [page, setPage] = useState(1);

<<<<<<< HEAD
  const [hasStartup, setHasStartup] = useState(0);
  const [startups, setStartups] = useState([]);
  const [numOfStartup, setNumOfStartup] = useState([]);

  const [povDetails, setPovDetails] = useState({});
=======
  const [startups, setStartups] = useState([]);

  const [pocDetails, setPocDetails] = useState({});
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff

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
<<<<<<< HEAD
    pov: povDetails,
    sucessfullStartups: startups,
  });

  console.log(povDetails);

=======
    poc: pocDetails,
    sucessfullStartups: startups,
  });

  const notify = data => toast(data);
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff
  console.log(investorDetails);

  const onChange = () => {};
  const heading = [
    "Basic Information",
    "Contact Information",
    "Point of Contact",
    "Sucess Stories",
  ];

<<<<<<< HEAD
  console.log(startups);

  return (
    <div className="form w-100">
=======
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

  const changePage = () => {
    setPage((prev) => (prev === 4 ? prev : prev + 1))
  }

  const addInvestor = async () => {
    const response = await fetch('/investor/add_investor/', {
      method : "POST",
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        "first_name" : pocDetails.firstName,
        "last_name" : pocDetails.lastName, 
        "email" : pocDetails.emailId, 
        "mobile_number" : pocDetails.mobileNum, 
        "role" : pocDetails.role,  
        "website" : pocDetails.website,
        "social_media" : pocDetails.socialMediaURL,
        "landline_number" : pocDetails.landlineNum,
        "budget": investorDetails.budget, 
        "stages" : investorDetails.stage, 
        "description" : investorDetails.description, 
        "industry" : investorDetails.industry,
        "interest" : investorDetails.interest, 
        "state" : investorDetails.state, 
        "city" : investorDetails.city,
        "country" : investorDetails.country,
        "investor_mobile_number" : investorDetails.investorContact
      })
    });

    const result = await response.json();
    
    result.success ? notify(result.success) :
    result.error.map(e => notify(Object.keys(e) + " : " + e[Object.keys(e)]));
  
    // Errors
    // error: Array(5)
    // 0: {first_name: 'This field is required.'}
    // 1: {last_name: 'This field is required.'}
    // 2: {email: 'This field is required.'}
    // 3: {mobile_number: 'This field is required.'}
    // 4: {role: 'This field is required.'}
    

    // Error format - first_name: 'This field is required.'
    // Object.keys(e) -> All keys in array
    // e[Object.keys(e)] -> Value contain by key.
  }

  return (
    <div className="form w-100">
      <ToastContainer />
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff
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
<<<<<<< HEAD
                    setPovDetails({
                      ...povDetails,
=======
                    setPocDetails({
                      ...pocDetails,
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff
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
<<<<<<< HEAD
                    setPovDetails({
                      ...povDetails,
=======
                    setPocDetails({
                      ...pocDetails,
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff
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
<<<<<<< HEAD
                    setPovDetails({
                      ...povDetails,
=======
                    setPocDetails({
                      ...pocDetails,
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff
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
<<<<<<< HEAD
                    setPovDetails({
                      ...povDetails,
=======
                    setPocDetails({
                      ...pocDetails,
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff
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
<<<<<<< HEAD
                    setPovDetails({
                      ...povDetails,
=======
                    setPocDetails({
                      ...pocDetails,
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff
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
<<<<<<< HEAD
                    setPovDetails({
                      ...povDetails,
=======
                    setPocDetails({
                      ...pocDetails,
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff
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
<<<<<<< HEAD
                    setPovDetails({
                      ...povDetails,
=======
                    setPocDetails({
                      ...pocDetails,
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff
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
<<<<<<< HEAD
                    setPovDetails({
                      ...povDetails,
=======
                    setPocDetails({
                      ...pocDetails,
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff
                      socialMediaURL: data,
                    })
                  }
                  required={false}
                />
              </div>
            </>
          ) : (
<<<<<<< HEAD
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
                      setNumOfStartup([...numOfStartup, e.target.value]);
                    }}
                    required
                  />
                </span>
              </div>
              <div className="form-item align-center"></div>

              {numOfStartup.map((num) => (
                <SucessfullStartup
                  setStartups={setStartups}
                  startups={startups}
                  setNumOfStartup={setNumOfStartup}
                />
              ))}
              <mb />
              <label className="container text-md">
                Terms and conditions The information posted on this website
                could include hypertext links or pointers to information created
                and maintained by non-Government/private organisations. DPIIT is
                providing these links and pointers solely for your information
                and convenience. When you select a link to an outside website,
                you are leaving the 'Guidelines for Indian Government Websites'
                site and are subject to the privacy and security policies of the
                owners/sponsors of the outside website. These terms and
                conditions shall be governed by and construed in accordance with
                the Indian Laws. Any dispute arising under these terms and
                conditions shall be subject to the jurisdiction of the courts of
                India.
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </>
          )}

=======
            <SucessStories startups={startups} setStartups={setStartups} />
          )}

          { page !== 1 &&
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff
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
<<<<<<< HEAD
          </div>
          <div className="form-item">
            <input
=======
          </div> }
          <div className="form-item">
            <input  
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff
              disabled={false}
              type={"button"}
              name="submit-btn"
              id="submit-btns"
              className={`input-field ${
                // checkAllFields()
                true ? "btn-bg-primary" : "btn-primary"
              } fg-white`}
<<<<<<< HEAD
              value={page === 4 ? "Submit" : "Next"}
              onClick={() => setPage((prev) => (prev === 4 ? prev : prev + 1))}
=======
              value={ page === 4 ? "Submit" : "Next" }
              onClick={ page === 4 ? addInvestor : changePage }
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default InvestorForm;
=======
export default InvestorForm;
>>>>>>> 33a43ae9df1a396cb9765cc242317e98936a30ff
