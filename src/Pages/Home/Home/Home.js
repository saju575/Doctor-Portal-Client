import React from "react";
import Banner from "../Banner.js/Banner";
import Care from "../Care/Care";
import Info from "../Info/Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
	return (
		<div>
			<Banner />
			<Info />
			<Services />
			<Care />
			<MakeAppointment />
		</div>
	);
};

export default Home;
