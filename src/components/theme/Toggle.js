import React from "react";
import "./toggle.scss";

const Toggle = ({ checked, onChange }) => (
  <label className="switch">
    <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <span className="slider"></span>
  </label>
);

export default Toggle;
