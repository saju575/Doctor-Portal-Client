import React from "react";
import {
	useCreateUserWithEmailAndPassword,
	useSignInWithGoogle,
	useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";
import Spinner from "../../Common/Spinner/Spinner";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../../hooks/useToken";

const Register = () => {
	const [signInWithGoogle, gUser, gLoading, gError] =
		useSignInWithGoogle(auth);
	const [createUserWithEmailAndPassword, user, loading, error] =
		useCreateUserWithEmailAndPassword(auth);
	const [updateProfile, updating, updateError] = useUpdateProfile(auth);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	//use navigate
	const navigate = useNavigate();

	const [token] = useToken(user || gUser);
	//loading

	if (loading || gLoading || updating) {
		return <Spinner />;
	}
	let signInError;
	if (error || gError || updateError) {
		signInError = (
			<p className="text-red-500">
				{error?.message || gError?.message || updateError?.message}
			</p>
		);
	}
	// if (user || gUser) {
	// console.log(user);
	// console.log(gUser);

	// }
	if (token) {
		navigate("/");
	}
	const onSubmit = async (data) => {
		await createUserWithEmailAndPassword(data.email, data.password);
		await updateProfile({ displayName: data.name });
		//console.log(data);
		//navigate("/appointment");
	};
	return (
		<div className="flex h-screen justify-center items-center">
			<div className="card w-96 bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="text-center font-bold text-2xl">Sign Up</h2>

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
								placeholder="Your Name"
								className="input input-bordered w-full max-w-xs"
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
								placeholder="Your Email"
								className="input input-bordered w-full max-w-xs"
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
								<span className="label-text">Password</span>
							</label>
							<input
								{...register("password", {
									required: {
										value: true,
										message: "*Password is required",
									},

									minLength: {
										value: 6,
										message: "*Must be 6 character or long",
									},
								})}
								type="password"
								placeholder="Password"
								className="input input-bordered w-full max-w-xs"
							/>
							<label className="label">
								{errors.password?.type === "required" && (
									<span className="label-text-alt text-red-500">
										{errors.password.message}
									</span>
								)}
								{errors.password?.type === "minLength" && (
									<span className="label-text-alt text-red-500">
										{errors.password.message}
									</span>
								)}
							</label>
						</div>
						<input />
						{signInError}
						<input
							className="btn w-full max-w-xs"
							type="submit"
							value={"Sign Up"}
						/>
					</form>
					<p className="text-center">
						<small>
							Already have an account?{"  "}
							<Link className="text-primary" to={"/login"}>
								Login
							</Link>
						</small>
					</p>
					<div className="divider">OR</div>
					<button
						onClick={() => signInWithGoogle()}
						className="btn btn-outline"
					>
						{" "}
						Continue with google
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
