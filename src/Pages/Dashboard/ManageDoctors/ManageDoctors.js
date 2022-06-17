import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import DeleteConfirm from "../../Common/DeleteConfirm/DeleteConfirm";
import Spinner from "../../Common/Spinner/Spinner";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
	const [deletingDoctor, setDeletingDoctor] = useState(null);
	const {
		data: doctors,
		isLoading,
		refetch,
	} = useQuery("doctor", () =>
		fetch("https://doctor-portal-server-575.herokuapp.com/doctor", {
			method: "GET",
			headers: {
				"content-type": "application/json",
				authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		}).then((res) => res.json())
	);
	if (isLoading) {
		return <Spinner />;
	}
	return (
		<div className="bg-[#F1F5F9] min-h-screen">
			<div className="p-7 sm:p-12">
				<div>
					<h2 className="text-2xl"> My Appoinment</h2>
				</div>
				<div className="mt-10">
					{doctors.length === 0 ? (
						<p className="text-center text-red-500 text-sm">
							No doctors information found
						</p>
					) : (
						<div className="overflow-x-auto">
							<table className="table table-compact w-full">
								<thead>
									<tr>
										<th></th>
										<th>Avatar</th>
										<th>Name</th>
										<th>Specialty</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{doctors.map((a, k) => (
										<DoctorRow
											key={a._id}
											a={a}
											k={k}
											setDeletingDoctor={
												setDeletingDoctor
											}
										/>
									))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</div>
			{deletingDoctor && (
				<DeleteConfirm
					deletingDoctor={deletingDoctor}
					refetch={refetch}
					setDeletingDoctor={setDeletingDoctor}
				/>
			)}
		</div>
	);
};

export default ManageDoctors;
