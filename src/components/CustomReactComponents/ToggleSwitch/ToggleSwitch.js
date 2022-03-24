import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ isOn, handleToggle, onColor, offColor, height }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        style={{ height: height }}
      />
      <label
        style={{ background: isOn ? onColor : offColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default ToggleSwitch;
