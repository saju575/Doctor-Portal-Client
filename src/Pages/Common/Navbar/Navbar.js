import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase.init";

const Navbar = () => {
	const [user, loading, error] = useAuthState(auth);
	const logout = () => {
		signOut(auth);
		localStorage.removeItem("accessToken");
	};
	const menuItems = (
		<>
			<li className="mx-1">
				<NavLink to={"/"}>Home</NavLink>
			</li>
			<li className="mx-1">
				<NavLink to={"/appointment"}>Appointment</NavLink>
			</li>
			<li className="mx-1">
				<NavLink to={"/about"}>About</NavLink>
			</li>
			<li className="mx-1">
				<NavLink to={"/reviews"}>Reviews</NavLink>
			</li>
			<li className="mx-1">
				<NavLink to={"/contact"}>Contact</NavLink>
			</li>
			{user && (
				<li className="mx-1">
					<NavLink to={"/dashboard"}>Dashboard</NavLink>
				</li>
			)}
			<li className="mx-1">
				{user ? (
					<button onClick={logout} className="btn btn-ghost">
						Sign Out
					</button>
				) : (
					<NavLink to={"/login"}>Login</NavLink>
				)}
			</li>
		</>
	);
	return (
		<div className="sticky-top bg-gray-200">
			<div className="container mx-auto">
				<div className="navbar flex justify-between ">
					<div className="navbar">
						<div className="dropdown">
							<label
								tabIndex="0"
								className="btn btn-ghost lg:hidden"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h8m-8 6h16"
									/>
								</svg>
							</label>
							<ul
								tabIndex="0"
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
							>
								{menuItems}
							</ul>
						</div>
						<a className="ml-1 normal-case text-xl">
							Doctors Portal
						</a>
					</div>
					<div className=" hidden lg:flex">
						<ul className="menu menu-horizontal p-0">
							{menuItems}
						</ul>
					</div>
					<div>
						<label
							tabIndex="1"
							htmlFor="dashboard-sidebar"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
