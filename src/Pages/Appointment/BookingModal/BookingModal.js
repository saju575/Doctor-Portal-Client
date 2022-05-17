import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDay, setTreatment }) => {
	const { name, slots } = treatment;
	const handleBooking = (e) => {
		e.preventDefault();
		const slot = e.target.slot.value;
		console.log(slot);
		setTreatment(null);
	};
	return (
		<div>
			<input
				type="checkbox"
				id="booking-modal"
				className="modal-toggle"
			/>
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<label
						htmlFor="booking-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2"
					>
						✕
					</label>
					<h3 className="font-bold text-lg text-secondary">{name}</h3>
					<form
						onSubmit={handleBooking}
						className="grid grid-cols-1 gap-3 justify-items-center mt-4 "
					>
						<input
							name="date"
							type="text"
							value={format(selectedDay, "PP")}
							disabled
							className="input input-bordered w-full max-w-xs"
						/>
						<select
							name="slot"
							className="select select-bordered w-full max-w-xs"
						>
							{slots.map((slot, id) => (
								<option key={id} value={slot}>
									{slot}
								</option>
							))}
						</select>
						<input
							name="name"
							type="text"
							placeholder="Your Name"
							className="input input-bordered w-full max-w-xs"
						/>
						<input
							name="email"
							type="email"
							placeholder="Email Address"
							className="input input-bordered w-full max-w-xs"
						/>
						<input
							name="phone"
							type="text"
							placeholder="Phone Number"
							className="input input-bordered w-full max-w-xs"
						/>
						<input
							type="submit"
							value={"submit"}
							className="btn btn-secondary text-white w-full max-w-xs"
						/>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BookingModal;
