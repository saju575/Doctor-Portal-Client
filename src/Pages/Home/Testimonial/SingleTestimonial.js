import React from "react";

const SingleTestimonial = (props) => {
	const { img, text, name, city } = props.review;
	return (
		<div className="card  bg-base-100 shadow-xl">
			<div className="card-body">
				<p className="text-accent">{text}</p>
				<div className="flex justify-start items-center mt-6">
					<div className="avatar">
						<div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
							<img src={img} />
						</div>
					</div>
					<div className="ml-7">
						<h3 className="text-accent font-bold text-xl">
							{name}
						</h3>
						<p>{city}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleTestimonial;
