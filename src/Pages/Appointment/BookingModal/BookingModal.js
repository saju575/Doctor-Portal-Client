import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const BookingModal = ({ treatment, selectedDay, setTreatment, refetch }) => {
	const { _id, name, available } = treatment;
	const [user, loading, error] = useAuthState(auth);
	const formattedDate = format(selectedDay, "PP");
	const handleBooking = (e) => {
		e.preventDefault();
		const slot = e.target.slot.value;

		const booking = {
			treatmentId: _id,
			treatmentName: name,
			date: formattedDate,
			slot,
			patientName: user.displayName,
			patientEmail: user.email,
			phone: e.target.phone.value,
		};
		fetch("https://doctor-portal-server-575.herokuapp.com/booking", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(booking),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					toast.success(
						`Appointment is set, ${formattedDate} at ${slot}`
					);
				} else {
					toast.error(
						`Already have an appointment on, ${data.booking?.date} at ${data.booking?.slot}`
					);
				}
				console.log(data);
				refetch();
				setTreatment(null);
			});
		//console.log(booking);
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
							{available.map((slot, id) => (
								<option key={id} value={slot}>
									{slot}
								</option>
							))}
						</select>
						<input
							name="name"
							type="text"
							disabled
							value={user?.displayName || ""}
							className="input input-bordered w-full max-w-xs"
						/>
						<input
							name="email"
							type="email"
							disabled
							value={user?.email || ""}
							className="input input-bordered w-full max-w-xs"
						/>
						<input
							name="phone"
							type={"tel"}
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
