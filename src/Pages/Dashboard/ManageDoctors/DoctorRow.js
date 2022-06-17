import React from "react";

const DoctorRow = ({ a, k, setDeletingDoctor }) => {
	const { name, speciality, img } = a;

	return (
		<tr>
			<th>{k + 1}</th>
			<td>
				<div className="avatar">
					<div className="w-16 rounded">
						<img src={img} alt="avater" />
					</div>
				</div>
			</td>
			<td>{name}</td>

			<td>{speciality}</td>
			<td>
				<label
					onClick={() => {
						setDeletingDoctor(a);
					}}
					htmlFor="delete-confirm-modal"
					className="fa-solid fa-trash-can cursor-pointer"
				></label>
				{/* <i className="fa-solid fa-trash-can"></i> */}
			</td>
		</tr>
	);
};

export default DoctorRow;
