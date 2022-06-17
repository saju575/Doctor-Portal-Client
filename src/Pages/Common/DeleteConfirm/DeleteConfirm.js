import React from "react";
import { toast } from "react-toastify";

const DeleteConfirm = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
	const { name, email } = deletingDoctor;
	const handleDelete = () => {
		fetch(
			`https://doctor-portal-server-575.herokuapp.com/doctor/${email}`,
			{
				method: "DELETE",
				headers: {
					"content-type": "application/json",
					authorization: `Bearer ${localStorage.getItem(
						"accessToken"
					)}`,
				},
			}
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					toast.success(`Doctor  ${name} is deleted.`);
					setDeletingDoctor(null);
					refetch();
				}
			});
	};
	return (
		<div>
			<input
				type="checkbox"
				id="delete-confirm-modal"
				className="modal-toggle"
			/>
			<div className="modal modal-bottom sm:modal-middle">
				<div className="modal-box">
					<h3 className="font-bold text-lg text-red-500 text-center">
						Are you sure you want to delete Doctor {name} !
					</h3>
					<p className="py-4 text-center">
						If you delete then you can't back it
					</p>
					<div className="modal-action">
						<label
							htmlFor="delete-confirm-modal"
							className="btn btn-xs"
						>
							Cancel
						</label>
						<label
							onClick={() => {
								handleDelete();
							}}
							htmlFor="delete-confirm-modal"
							className="btn btn-xs btn-error"
						>
							Delete
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DeleteConfirm;
