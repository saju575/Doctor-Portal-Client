import React from "react";
import { useQuery } from "react-query";
import Spinner from "../../Common/Spinner/Spinner";
import UserRow from "./UserRow";

const Users = () => {
	const {
		data: users,
		isLoading,
		refetch,
	} = useQuery("users", () =>
		fetch("https://doctor-portal-server-575.herokuapp.com/users", {
			method: "GET",
			headers: {
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
					<h2 className="text-2xl"> All Users</h2>
				</div>
				<div className="mt-10">
					<div className="overflow-x-auto">
						<table className="table table-compact w-full">
							<thead>
								<tr>
									<th></th>
									<th>User Name</th>
									<th>Role</th>
									<th>Delete User</th>
								</tr>
							</thead>
							<tbody>
								{users.map((a, k) => (
									<UserRow
										refetch={refetch}
										a={a}
										key={a._id}
										k={k}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Users;
