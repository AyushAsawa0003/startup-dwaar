import React, { useState } from "react";
import {
  InputBox,
  SelectBox,
} from "../../../CustomReactComponents/CustomInputBox/InputBox.js";

import "../../../CustomReactComponents/CustomInputBox/InputBox.css";
import "../../../CustomReactComponents/CustomInputBox/Form.css";
import "../../SignupPages/Signup.css";

import { v4 as uuidv4 } from "uuid";

const SucessfullStartup = ({ setStartups, startups, id }) => {
  const intialise = {
    id: uuidv4(),
  };

  const [startupDetails, setStartupDetails] = useState(intialise);
  const [showBtn, setShowBtn] = useState(false);
  return (
    // <div>
    <div className="sucess-story-form">
      <div className="form-item">
        <InputBox
          value={startupDetails.startupName}
          title="Startup Name"
          getData={(data) =>
            setStartupDetails({
              ...startupDetails,
              startupName: data,
            })
          }
          required
        />
      </div>
      <div className="form-item">
        <InputBox
          value={startupDetails.link}
          title="Website/App Link"
          getData={(data) =>
            setStartupDetails({
              ...startupDetails,
              link: data,
            })
          }
          required
        />
      </div>
      <div className="form-item">
        <label htmlFor="brief" className="text-md">
          Brief/Tagline
          <span className="fg-danger"> *</span>
        </label>
        <textarea
          value={startupDetails.brief}
          rows={5}
          name="idea"
          id="idea"
          className="input-field"
          placeholder="Tell us more..."
          onChange={(e) =>
            setStartupDetails({
              ...startupDetails,
              brief: e.target.value,
            })
          }
          required
        />
      </div>

      <div className="form-item">
        <input
          // disabled={false}
          type={"button"}
          name="add"
          id="add"
          className={"input-field btn-bg-primary fg-white"}
          value={"Add"}
          onClick={() => {
            setStartups([...startups, startupDetails]);
            setStartupDetails(intialise);
          }}
          required
        />
      </div>
    </div>
  );
};

export default SucessfullStartup;
