import React from "react";

const Banner = () => {
	return (
		<div className="hero min-h-screen container mx-auto">
			<div className="hero-content flex-col lg:flex-row-reverse gap-16">
				<img
					src="./assets/images/chair.png"
					className="md:w-3/4 lg:w-2/4 rounded-lg shadow-2xl"
				/>
				<div>
					<h1 className="text-3xl sm:text-5xl font-bold d-b">
						Your New Smile Starts Here
					</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut
						assumenda excepturi exercitationem quasi. In deleniti
						eaque aut repudiandae et a id nisi.
					</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
