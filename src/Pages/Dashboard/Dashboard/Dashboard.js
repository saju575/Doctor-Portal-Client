import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet, Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import Spinner from "../../Common/Spinner/Spinner";

const Dashboard = () => {
	const [user] = useAuthState(auth);
	const [admin, adminLoading] = useAdmin(user);
	if (adminLoading) {
		return <Spinner />;
	}
	return (
		<div>
			<div className="drawer drawer-mobile ">
				<input
					id="dashboard-sidebar"
					type="checkbox"
					className="drawer-toggle"
				/>
				<div className="drawer-content ">
					{/* <!-- Page content here --> */}
					<Outlet />
				</div>
				<div className="drawer-side ">
					<label
						htmlFor="dashboard-sidebar"
						className="drawer-overlay"
					></label>
					<ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
						{/* <!-- Sidebar content here --> */}
						<li>
							<Link to={"/dashboard"}>
								<i className="fa-solid fa-calendar-check"></i>{" "}
								My Appoinments
							</Link>
						</li>
						<li>
							<Link to={"/dashboard/myreview"}>
								<i className="fa-solid fa-star"></i> My Review
							</Link>
						</li>
						{admin && (
							<>
								<li>
									<Link to={"/dashboard/users"}>
										<i className="fa-solid fa-user"></i> All
										users
									</Link>
								</li>
								<li>
									<Link to={"/dashboard/addDoctor"}>
										<i className="fa-solid fa-user-doctor"></i>{" "}
										Add Doctor
									</Link>
								</li>
								<li>
									<Link to={"/dashboard/manageDoctor"}>
										<i className="fa-solid fa-user-pen"></i>{" "}
										Manage Doctors
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
