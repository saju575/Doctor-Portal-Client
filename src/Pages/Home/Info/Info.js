import React from "react";
import InfoCard from "./InfoCard";

const Info = () => {
	// const clock = "./assets/icons/clock.svg";
	// const mark = "./assets/icons/marker.svg";
	// const phone = "./assets/icons/phone.svg";
	// const color = {
	//     primary:
	// }
	const text = [
		{
			_id: 1,
			img: "./assets/icons/clock.svg",
			header: "Opening Hours",
			description: "Lorem Ipsum is simply dummy text of the pri",
			bgColor: "bg-gradient-to-r from-secondary to-primary",
		},
		{
			_id: 2,
			img: "./assets/icons/marker.svg",
			header: "Visit our location",
			description: "Brooklyn, NY 10036, United States",
			bgColor: "bg-accent",
		},
		{
			_id: 3,
			img: "./assets/icons/phone.svg",
			header: "Contact us now",
			description: "+000 123 456789",
			bgColor: "bg-gradient-to-r from-secondary to-primary",
		},
	];
	return (
		<div className="container px-2 mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
			{text.map((t) => (
				<InfoCard t={t} key={t._id} />
			))}
		</div>
	);
};

export default Info;
