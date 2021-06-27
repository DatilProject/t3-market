import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = ({ active = true }) => {
  const [activate, setActive] = useState(active);
  const isActive = (isActive) => (isActive ? "toggle-active" : "");

  return (
    <label className="switch my-auto">
      <input
        type="checkbox"
        onClick={() => setActive(!activate)}
        className={isActive(activate)}
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleButton;
