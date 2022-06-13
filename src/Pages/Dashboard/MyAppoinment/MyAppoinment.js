import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../firebase.init";
import Spinner from "../../Common/Spinner/Spinner";

const MyAppoinment = () => {
	const [user] = useAuthState(auth);
	const [appoinments, setAppoinments] = useState([]);
	// const {
	// 	data: appoinments,
	// 	isLoading,
	// 	refetch,
	// } = useQuery(["appoinment", user], () => {
	// 	if (user) {
	// 		fetch(`http://localhost:5000/booking?patient=${user.email}`).then(
	// 			(res) => res.json()
	// 		);
	// 	}
	// });
	useEffect(() => {
		if (user) {
			fetch(`http://localhost:5000/booking?patient=${user.email}`)
				.then((res) => res.json())
				.then((data) => setAppoinments(data));
		}
	}, [user]);

	return (
		<div className="bg-[#F1F5F9] min-h-screen">
			<div className="p-7 sm:p-12">
				<div>
					<h2 className="text-2xl"> My Appoinment</h2>
				</div>
				<div className="mt-10">
					<div className="overflow-x-auto">
						<table className="table table-compact w-full">
							<thead>
								<tr>
									<th></th>
									<th>Name</th>
									<th>Service</th>
									<th>Day</th>
									<th>Time</th>
								</tr>
							</thead>
							<tbody>
								{appoinments.map((a, k) => (
									<tr key={a._id}>
										<th>{k + 1}</th>
										<td>{a.patientName}</td>
										<td>{a.treatmentName}</td>

										<td>{a.date}</td>
										<td>{a.slot}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyAppoinment;
