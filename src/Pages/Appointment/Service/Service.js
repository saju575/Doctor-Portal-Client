import React from "react";

const Service = ({ service, setTreatment }) => {
	const { name, slots } = service;
	return (
		<div className="card lg:max-w-lg bg-base-100 shadow-xl">
			<div className="card-body flex flex-col items-center justify-center">
				<h2 className="card-title text-secondary">{name}</h2>
				<p>
					{slots.length ? (
						<span>{slots[0]}</span>
					) : (
						<span className="text-red-500">
							No slots aviailable
						</span>
					)}
				</p>
				<p className="my-2">
					{slots.length} {slots.length > 1 ? "spaces" : "space"}{" "}
					available
				</p>
				<div className="card-actions justify-center">
					<label
						htmlFor="booking-modal"
						className="btn btn-secondary text-white uppercase"
						disabled={slots.length === 0}
						onClick={() => setTreatment(service)}
					>
						Book appointment
					</label>
				</div>
			</div>
		</div>
	);
};

export default Service;
