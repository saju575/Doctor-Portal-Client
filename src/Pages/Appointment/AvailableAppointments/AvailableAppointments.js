import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Spinner from "../../Common/Spinner/Spinner";
import BookingModal from "../BookingModal/BookingModal";
import Service from "../Service/Service";

const AvailableAppointments = ({ selectedDay }) => {
	//const [services, setServices] = useState([]);
	const [treatment, setTreatment] = useState(null);
	const formattedDate = format(selectedDay, "PP");

	const {
		data: services,
		isLoading,
		refetch,
	} = useQuery(["available", formattedDate], () =>
		fetch(`http://localhost:5000/available?date=${formattedDate}`).then(
			(res) => res.json()
		)
	);
	if (isLoading) {
		return <Spinner />;
	}

	// useEffect(() => {
	// 	fetch(`http://localhost:5000/available?date=${formattedDate}`)
	// 		.then((res) => res.json())
	// 		.then((data) => setServices(data));
	// }, [formattedDate]);
	return (
		<section className="container mx-auto px-2 py-24">
			<p className="text-xl text-secondary text-center">
				Available Appointment on {format(selectedDay, "PP")}
			</p>
			<div className="pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{services?.map((service) => (
					<Service
						key={service._id}
						service={service}
						setTreatment={setTreatment}
					/>
				))}
			</div>
			{treatment && (
				<BookingModal
					selectedDay={selectedDay}
					treatment={treatment}
					setTreatment={setTreatment}
					refetch={refetch}
				/>
			)}
		</section>
	);
};

export default AvailableAppointments;
