import React from "react";
import Select from "react-select";
import "./SelectBox.css";

const customStyles = {
  option: (provided, state) => ({
    // ...provided,
    // borderBottom: "1px dotted pink",
    // color: state.isSelected ? "red" : "blue",
    // padding: 20,
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

const SelectBox = ({ data, placeholder }) => {
  return (
    <div className="select-box-container fg-black text-md">
      <Select
        // width="500px"
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
      />
    </div>
  );
};

export default SelectBox;
