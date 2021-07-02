import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = ({ active = true, onChange, name }) => {
	const [activate, setActive] = useState(active);
	const isActive = (isActive) => (isActive ? "toggle-active" : "");

	return (
		<label className="switch my-auto">
			<input
				type="checkbox"
				name={name}
				onClick={() => setActive(!activate)}
				className={isActive(activate)}
				value={activate}
				onChange={onChange}
			/>
			<span className="slider round"></span>
		</label>
	);
};

export default ToggleButton;
