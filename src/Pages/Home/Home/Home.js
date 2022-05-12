import React from "react";
import Banner from "../Banner.js/Banner";
import Care from "../Care/Care";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import Info from "../Info/Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
	return (
		<div>
			<Banner />
			<Info />
			<Services />
			<Care />
			<MakeAppointment />
			<Testimonial />
			<ContactForm />
			<Footer />
		</div>
	);
};

export default Home;
