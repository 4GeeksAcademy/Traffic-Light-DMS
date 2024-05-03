import React from "react";


const Traffic = () => {
	const [lightSelect, setLightSelect] = React.useState("red");

	return (
		<div>
			<div className="trafficTop">
				<div className="container card">
					<div onClick={() => setLightSelect("red")} className={`red row ${lightSelect == "red" ? "glow" : ""}`}></div>
					<div onClick={() => setLightSelect("yellow")}className={`yellow row ${lightSelect == "yellow" && "glow" }`} ></div>
					<div onClick={() => setLightSelect("green")}className={`green row ${lightSelect == "green" && "glow" || ""}`}></div>
				</div>
			</div>
		</div>
	);
};

export default Traffic;
