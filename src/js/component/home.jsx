import React from "react";
import Traffic from "./traffic";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
		<Traffic />
		</div>
	);
};

export default Home;
