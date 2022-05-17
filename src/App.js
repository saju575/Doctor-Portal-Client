import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Navbar from "./Pages/Common/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/appointment" element={<Appointment />}></Route>
			</Routes>
		</div>
	);
}

export default App;
