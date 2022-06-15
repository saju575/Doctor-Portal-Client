import React from "react";
import { toast } from "react-toastify";
const UserRow = ({ a, k, refetch }) => {
	const makeAdmin = () => {
		fetch(
			`https://doctor-portal-server-575.herokuapp.com/user/admin/${a.email}`,
			{
				method: "PUT",
				headers: {
					authorization: `Bearer ${localStorage.getItem(
						"accessToken"
					)}`,
				},
			}
		)
			.then((res) => {
				if (res.status === 403) {
					toast.error("Failed to Make an admin");
				}
				return res.json();
			})
			.then((data) => {
				if (data.modifiedCount > 0) {
					refetch();
					toast.success(`Sucessfully made an admin`);
				}
			});
	};
	return (
		<tr key={a._id}>
			<th>{k + 1}</th>
			<td>{a.email}</td>
			<td>
				{a.role === "admin" ? (
					<span className="text-xs text-blue-500">Admin</span>
				) : (
					<button onClick={makeAdmin} className="btn btn-xs">
						Make Admin
					</button>
				)}
			</td>
			<td>
				<i className="fa-solid fa-trash-can text-[#354767]"></i>
			</td>
		</tr>
	);
};

export default UserRow;
