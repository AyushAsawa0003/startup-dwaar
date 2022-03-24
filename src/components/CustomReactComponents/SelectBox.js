import React from "react";
import Select from "react-select";
import "./SelectBox.css";

const customStyles = {
  valueContainer: (provided, state) => ({
    ...provided,
    textOverflow: "ellipsis",
    maxWidth: "90%",
    whiteSpace: "nowrap",
    overflow: "hidden",
    display: "initial",
  }),
};

const SelectBox = ({ data, placeholder }) => {
  return (
    <div className="select-box-container fg-black text-md">
      <Select
        // width="500px"
        // isMulti={isMulti}
        options={data}
        theme={(theme) => ({
          ...theme,
          borderRadius: 5,
          colors: {
            ...theme.colors,
            primary: "#7a6efb",
            primary25: "#ccc7fb",
            primary75: "#9b94f3",
            primary50: "#9b94f3",
          },
        })}
        placeholder={placeholder}
        // styles={isMulti && customStyles}
      />
    </div>
  );
};

export default SelectBox;
