import React from "react";
import Button from "../../Common/Button/Button";

const MakeAppointment = () => {
	return (
		<section
			style={{ background: "url('./assets/images/appointment.png')" }}
		>
			<div className="container mx-auto flex justify-center items-center">
				<div className="flex-1 mt-[-120px]">
					<img src="./assets/images/doctor-small.png" alt="" />
				</div>
				<div className="flex-1">
					<p className="text-secondary">Appointment</p>
					<h2 className="text-white text-3xl my-5">
						Make an appointment Today
					</h2>
					<p className="text-white my-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Modi, aspernatur! Cumque aliquid rerum asperiores
						voluptas adipisci, explicabo in nam voluptatibus facilis
						corrupti at aspernatur cupiditate, numquam veritatis
						consectetur dolor itaque?
					</p>
					<Button>get started</Button>
				</div>
			</div>
		</section>
	);
};

export default MakeAppointment;
