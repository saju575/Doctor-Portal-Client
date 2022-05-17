import React, { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
const AppointmentBanner = ({ selectedDay, setSelectedDay }) => {
	return (
		<div className="container px-6 py-16 mx-auto bg">
			<div className="items-center flex lg:flex-row flex-col-reverse gap-7">
				<div className="w-full lg:w-1/2">
					<div className="lg:max-w-lg">
						<DayPicker
							mode="single"
							selected={selectedDay}
							onSelect={setSelectedDay}
						/>
					</div>
				</div>

				<div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
					<img
						className="w-full h-full lg:max-w-2xl"
						src="./assets/images/chair.png"
						alt="Catalogue-pana.svg"
					/>
				</div>
			</div>
		</div>
	);
};

export default AppointmentBanner;
