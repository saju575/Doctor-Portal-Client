import { signOut } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Spinner from "../../Common/Spinner/Spinner";

const MyAppoinment = () => {
	const [user] = useAuthState(auth);
	const [appoinments, setAppoinments] = useState([]);
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();
	useEffect(() => {
		if (user) {
			fetch(
				`https://doctor-portal-server-575.herokuapp.com/booking?patient=${user.email}`,
				{
					method: "GET",
					headers: {
						authorization: `Bearer ${localStorage.getItem(
							"accessToken"
						)}`,
					},
				}
			)
				.then((res) => {
					if (res.status === 401 || res.status === 403) {
						signOut(auth);
						localStorage.removeItem("accessToken");
						navigate("/");
					}
					return res.json();
				})
				.then((data) => {
					setAppoinments(data);
					setLoading(false);
				});
		}
	}, [user]);
	if (loading) {
		return <Spinner />;
	}

	return (
		<div className="bg-[#F1F5F9] min-h-screen">
			<div className="p-7 sm:p-12">
				<div>
					<h2 className="text-2xl"> My Appoinment</h2>
				</div>
				<div className="mt-10">
					{appoinments.length === 0 ? (
						<p className="text-center text-red-500 text-sm">
							No previous appoinment found
						</p>
					) : (
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
					)}
				</div>
			</div>
		</div>
	);
};

export default MyAppoinment;
