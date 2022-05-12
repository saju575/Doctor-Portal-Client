import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
	const infoes = [
		{
			_id: 1,
			img: "./assets/images/fluoride.png",
			header: "Fluoride Treatment",
			details:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
		{
			_id: 2,
			img: "./assets/images/cavity.png",
			header: "Cavity Filling",
			details:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
		{
			_id: 3,
			img: "./assets/images/whitening.png",
			header: "Teeth Whitening",
			details:
				"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
		},
	];
	return (
		<div className="container px-2 mx-auto py-16">
			<p className="uppercase text-primary text-lg text-center">
				OUR SERVICES
			</p>
			<h2 className="text-center text-3xl">Services We Provide</h2>
			<div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
				{infoes.map((info) => (
					<ServiceCard key={info._id} info={info} />
				))}
			</div>
		</div>
	);
};

export default Services;
