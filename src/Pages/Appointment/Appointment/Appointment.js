import React, { useState } from "react";
import Footer from "../../Common/Footer/Footer";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
	const [selectedDay, setSelectedDay] = useState(new Date());
	return (
		<div>
			<AppointmentBanner
				selectedDay={selectedDay}
				setSelectedDay={setSelectedDay}
			/>
			<AvailableAppointments selectedDay={selectedDay} />
			<Footer />
		</div>
	);
};

export default Appointment;
