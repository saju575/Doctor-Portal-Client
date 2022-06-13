import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

const Dashboard = () => {
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
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
