// import React from "react";
import PropTypes from "prop-types";

export const Radio = ({ property1, onChange, checked }) => {
  return (
    <div>
      <input
        type="radio"
        name="radioGroup"
        onChange={onChange}
        checked={checked}
      />
      {/* Label or additional content */}
    </div>
  );
};

Radio.propTypes = {
  property1: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};

// The value of the radio button is passed to `onChange` as an argument