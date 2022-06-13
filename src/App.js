import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Navbar from "./Pages/Common/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequirAuth from "./Pages/Login/RequireAuth/RequirAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MyAppoinment from "./Pages/Dashboard/MyAppoinment/MyAppoinment";
import MyReview from "./Pages/Dashboard/MyReview/MyReview";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route
					path="/appointment"
					element={
						<RequirAuth>
							<Appointment />
						</RequirAuth>
					}
				></Route>
				<Route
					path="/dashboard"
					element={
						<RequirAuth>
							<Dashboard />
						</RequirAuth>
					}
				>
					<Route index element={<MyAppoinment />}></Route>
					<Route path="myreview" element={<MyReview />} />
				</Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/register" element={<Register />}></Route>
			</Routes>
			<ToastContainer />
		</div>
	);
}

export default App;
