import React, { useState } from "react";
import {
  InputBox,
  SelectBox,
} from "../../../CustomReactComponents/CustomInputBox/InputBox.js";

import "../../../CustomReactComponents/CustomInputBox/InputBox.css";
import "../../../CustomReactComponents/CustomInputBox/Form.css";
import "../../SignupPages/Signup.css";

const JobSeekerForm = () => {
  const [page, setPage] = useState(1);
  const [employmentStatus, setEmploymentStatus] = useState("");

  const [hasStartup, setHasStartup] = useState(0);
  const [startups, setStartups] = useState([]);
  const [numOfStartup, setNumOfStartup] = useState([]);

  const [povDetails, setPovDetails] = useState({});

  const [jobseekerDetails, setJobseekerDetails] = useState({
    employmentStatus: employmentStatus,
    resume: "",
    stage: "",
    interestedIndustry: "",
    interest: "",
    description: "",
    jobseekerDetails: "",
    company: "",
    jobTitle: "",
    workingCity: "",
    workingSince: "",
    noticePeriod: "",
    salary: "",
    secondaryMarks: "",
    higherSecondaryMarks: "",
    undergraduateCGPA: "",
    pgCGPA: "",
    primarySkills: "",
  });

  const heading = [
    "Basic Information",
    "Employment",
    "Education",
    "Terms and Condition",
  ];

  console.log(jobseekerDetails);

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
                  Please attach your Updated Resume
                  <span className="fg-danger"> *</span>
                </label>
                <input
                  type="file"
                  name="log"
                  id="log"
                  className="input-field"
                  onChange={(e) =>
                    setJobseekerDetails({
                      ...jobseekerDetails,
                      resume: e.target.value,
                    })
                  }
                />
              </div>

              <SelectBox
                for="stage"
                label="Select the Stage of Startup interested"
                value={jobseekerDetails.stage}
                // onChange={onChange(e, )}
                default={"Select the Startup Stage"}
                options={[
                  "Ideation",
                  "Validation",
                  "Scaling",
                  "Early Traction",
                ]}
                onChange={(e) =>
                  setJobseekerDetails({
                    ...jobseekerDetails,
                    stage: e.target.value,
                  })
                }
              />

              <SelectBox
                for="industry"
                label="Industry "
                value={jobseekerDetails.interestedIndustry}
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
                  setJobseekerDetails({
                    ...jobseekerDetails,
                    interestedIndustry: e.target.value,
                  })
                }
              />

              <SelectBox
                for="interest"
                label="Interest "
                value={jobseekerDetails.interest}
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
                  setJobseekerDetails({
                    ...jobseekerDetails,
                    interest: e.target.value,
                  })
                }
              />

              <SelectBox
                for="primary-skill"
                label="Primary Skill"
                value={jobseekerDetails.primarySkills}
                // onChange={onChange(e, )}
                default={"Select"}
                options={[
                  "Banking",
                  "React JS library",
                  "Marketing",
                  "Finance",
                ]}
                onChange={(e) =>
                  setJobseekerDetails({
                    ...jobseekerDetails,
                    primarySkills: e.target.value,
                  })
                }
              />

              <SelectBox
                for="secondary-skills"
                label="Secondary Skill"
                value={jobseekerDetails.secondarySkills}
                // onChange={onChange(e, )}
                default={"Select"}
                options={[
                  "Banking",
                  "React JS library",
                  "Marketing",
                  "Finance",
                ]}
                onChange={(e) =>
                  setJobseekerDetails({
                    ...jobseekerDetails,
                    secondarySkills: e.target.value,
                  })
                }
                required={false}
              />

              <div className="form-item">
                <label htmlFor="idea" className="text-md">
                  Tell us about yourself
                  <span className="fg-danger"> *</span>
                </label>
                <textarea
                  value={jobseekerDetails.description}
                  rows={5}
                  name="idea"
                  id="idea"
                  className="input-field"
                  placeholder="Let it flow..."
                  onChange={(e) =>
                    setJobseekerDetails({
                      ...jobseekerDetails,
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
              <div class="form-item">
                Are you Currently Employed?
                <label class="container text-lg mt-4">
                  Yes
                  <input
                    type="radio"
                    name="radio"
                    checked={employmentStatus === "yes"}
                    onClick={(e) => {
                      setEmploymentStatus("yes");
                    }}
                  />
                  <span class="checkmark"></span>
                </label>
                <label class="container text-lg">
                  No
                  <input
                    type="radio"
                    name="radio"
                    checked={employmentStatus === "no"}
                    onClick={() => setEmploymentStatus("no")}
                  />
                  <span class="checkmark"></span>
                </label>
                <label class="container text-lg">
                  Fresher
                  <input
                    type="radio"
                    name="radio"
                    checked={employmentStatus === "fresher"}
                    onClick={() => setEmploymentStatus("fresher")}
                  />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="form-item" />

              {employmentStatus === "fresher" ? (
                <></>
              ) : employmentStatus !== "" ? (
                <>
                  <div className="form-item">
                    <InputBox
                      idValue="total-working-experience"
                      title="Total Working Experience"
                      getData={(data) =>
                        setJobseekerDetails({
                          ...jobseekerDetails,
                          totalWorkingExperience: data,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-item">
                    <InputBox
                      idValue="company"
                      title={
                        employmentStatus === "yes"
                          ? "Company"
                          : "Previous Company"
                      }
                      getData={(data) =>
                        setJobseekerDetails({
                          ...jobseekerDetails,
                          company: data,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-item">
                    <InputBox
                      idValue="job-title"
                      title={
                        employmentStatus === "yes"
                          ? "Job Title"
                          : "Previous Job Title"
                      }
                      getData={(data) =>
                        setJobseekerDetails({
                          ...jobseekerDetails,
                          jobTitle: data,
                        })
                      }
                      required
                    />
                  </div>
                  {/* Current city in which job-seeker works */}
                  <div className="form-item">
                    <InputBox
                      idValue="working-city"
                      title={
                        employmentStatus === "yes"
                          ? "Working City"
                          : "Previous Working City"
                      }
                      getData={(data) =>
                        setJobseekerDetails({
                          ...jobseekerDetails,
                          workingCity: data,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-item">
                    <label htmlFor="working-since" className="text-md">
                      Working Since
                      <span className="fg-danger"> *</span>
                    </label>
                    <input
                      // value={personalState.firstName}
                      type={"date"}
                      name="working-since"
                      id="working-since"
                      className="input-field"
                      onChange={(e) =>
                        setJobseekerDetails({
                          ...jobseekerDetails,
                          workingSince: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <SelectBox
                    for="stage"
                    label="Availability to join"
                    // onChange={onChange(e, )}
                    default={"Select"}
                    options={[
                      "15 days or less",
                      "1 Month",
                      "2 Months",
                      "3 Months",
                      "moere than 3 Months",
                      "Serving notice period",
                    ]}
                    onChange={(e) =>
                      setJobseekerDetails({
                        ...jobseekerDetails,
                        noticePeriod: e.target.value,
                      })
                    }
                  />
                  <div className="form-item">
                    <InputBox
                      idValue="annual-salary"
                      title={
                        employmentStatus === "yes"
                          ? "Annual Salary (in INR)"
                          : "Previous Annual Salary (in INR)"
                      }
                      getData={(data) =>
                        setJobseekerDetails({
                          ...jobseekerDetails,
                          salary: data,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-item" />
                </>
              ) : (
                <></>
              )}
            </>
          ) : page === 3 ? (
            <>
              <div className="form-item">
                <InputBox
                  idValue="secondarymarks"
                  title="Secondary % (or CGPA)"
                  getData={(data) =>
                    setJobseekerDetails({
                      ...jobseekerDetails,
                      secondaryMarks: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="higherSecondaryMarks"
                  title="Higher Secondary % (or CGPA)"
                  getData={(data) =>
                    setJobseekerDetails({
                      ...jobseekerDetails,
                      higherSecondaryMarks: data,
                    })
                  }
                  required
                />
              </div>
              <div className="form-item">
                <InputBox
                  idValue="undergraduateCGPA"
                  title="Undergraduate CGPA"
                  getData={(data) =>
                    setJobseekerDetails({
                      ...jobseekerDetails,
                      undergraduateCGPA: data,
                    })
                  }
                  required
                />
              </div>

              <div className="form-item">
                <InputBox
                  idValue="pgCGPA"
                  title="Post Graduate CGPA"
                  getData={(data) =>
                    setJobseekerDetails({
                      ...jobseekerDetails,
                      pgCGPA: data,
                    })
                  }
                  required={false}
                />
              </div>
            </>
          ) : (
            <>
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

export default JobSeekerForm;
