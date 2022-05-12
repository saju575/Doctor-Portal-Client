import React from "react";
import SingleTestimonial from "./SingleTestimonial";

const Testimonial = () => {
	const reviewInfoes = [
		{
			_id: 1,
			text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
			img: "./assets/images/people1.png",
			name: "Winson Herry",
			city: "Califonia",
		},
		{
			_id: 2,
			text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
			img: "./assets/images/people1.png",
			name: "Winson Herry",
			city: "Califonia",
		},
		{
			_id: 3,
			text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
			img: "./assets/images/people1.png",
			name: "Winson Herry",
			city: "Califonia",
		},
	];
	return (
		<section className="container mx-auto py-24 px-2">
			<div className="flex justify-between items-center">
				<div>
					<p className="text-secondary font-bold">Testimonial</p>
					<h2 className="my-4 capitalize text-accent text-3xl">
						What Our Patients Says
					</h2>
				</div>
				<div>
					<img
						src="./assets/icons/quote.svg"
						className="w-48 h-48"
						alt=""
					/>
				</div>
			</div>
			<div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
				{reviewInfoes.map((review) => (
					<SingleTestimonial review={review} key={review._id} />
				))}
			</div>
		</section>
	);
};

export default Testimonial;
