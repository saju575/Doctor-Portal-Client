import React from "react";

const ServiceCard = (props) => {
	const { img, details, header } = props.info;
	return (
		<div className="card md:w-80 bg-base-100 shadow-xl">
			<figure className="px-10 pt-10">
				<img src={img} alt="service" className="rounded-xl" />
			</figure>
			<div className="card-body items-center text-center">
				<h2 className="card-title">{header}</h2>
				<p>{details}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
