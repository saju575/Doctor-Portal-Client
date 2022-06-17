import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Spinner from "../../Common/Spinner/Spinner";
import { toast } from "react-toastify";

const AddDoctor = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm();

	const {
		data: services,
		isLoading,
		refetch,
	} = useQuery("service", () =>
		fetch("https://doctor-portal-server-575.herokuapp.com/service").then(
			(res) => res.json()
		)
	);
	//image api key
	const imageKey = "cb4d65a5c005cc95a5bae38d43e831a1";
	const onSubmit = (data) => {
		//console.log("add doctor", data);
		const image = data.image[0];
		const formData = new FormData();
		formData.append("image", image);

		axios
			.post(`https://api.imgbb.com/1/upload?key=${imageKey}`, formData)
			.then((response) => {
				if (response.data.success) {
					const img = response.data.data.url;
					const doctor = {
						name: data.name,
						email: data.email,
						speciality: data.speciality,
						img,
					};
					fetch(
						"https://doctor-portal-server-575.herokuapp.com/doctor",
						{
							method: "POST",
							headers: {
								"content-type": "application/json",
								authorization: `Bearer ${localStorage.getItem(
									"accessToken"
								)}`,
							},
							body: JSON.stringify(doctor),
						}
					)
						.then((res) => res.json())
						.then((inserted) => {
							if (inserted.insertedId) {
								toast.success("Doctor added successfully");
								reset();
							} else {
								toast.error("Failed to add the doctor");
							}
						});
				}

				//console.log("success");
			});
	};
	if (isLoading) {
		return <Spinner />;
	}
	return (
		<div>
			<div className="bg-[#F1F5F9] min-h-screen ">
				<div className="p-7 sm:p-12">
					<div className="mb-8">
						<h2 className="text-2xl">Add Doctor</h2>
					</div>
					<div className="flex items-center justify-center">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="form-control w-full max-w-xs">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									{...register("name", {
										required: {
											value: true,
											message: "*Name is required",
										},
									})}
									type="text"
									placeholder="Doctor Name"
									className="input input-bordered rounded w-full max-w-xs"
								/>
								<label className="label">
									{errors.name?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.name.message}
										</span>
									)}
								</label>
							</div>
							<div className="form-control w-full max-w-xs">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									{...register("email", {
										required: {
											value: true,
											message: "*Email is required",
										},
										pattern: {
											value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
											message: "*Provide a valid email",
										},
									})}
									type="email"
									placeholder="Doctor Email"
									className="input input-bordered rounded w-full max-w-xs"
								/>
								<label className="label">
									{errors.email?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.email.message}
										</span>
									)}
									{errors.email?.type === "pattern" && (
										<span className="label-text-alt text-red-500">
											{errors.email.message}
										</span>
									)}
								</label>
							</div>
							<div className="form-control w-full max-w-xs">
								<label className="label">
									<span className="label-text">
										Speciality
									</span>
								</label>
								<select
									{...register("speciality")}
									className="select select-bordered w-full max-w-xs rounded"
								>
									{services.map((service) => (
										<option
											key={service._id}
											value={service.name}
										>
											{service.name}
										</option>
									))}
								</select>
							</div>

							<div className="form-control w-full max-w-xs">
								<label className="label">
									<span className="label-text">Photo</span>
								</label>
								<input
									{...register("image", {
										required: {
											value: true,
											message: "*Image is required",
										},
									})}
									type="file"
									className="input input-bordered rounded w-full max-w-xs"
								/>
								<label className="label">
									{errors.image?.type === "required" && (
										<span className="label-text-alt text-red-500">
											{errors.image.message}
										</span>
									)}
								</label>
							</div>

							<input
								className="btn w-full max-w-xs rounded"
								type="submit"
								value={"ADD"}
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddDoctor;
