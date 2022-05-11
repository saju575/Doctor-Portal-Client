import React from "react";
import Banner from "../Banner.js/Banner";
import Info from "../Info/Info";
import "./Home.css";

const Home = () => {
	return (
		<div>
			<div className="">
				<Banner />
				<Info />
			</div>
		</div>
	);
};

export default Home;
