import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Common/Navbar/Navbar";
import Home from "./Pages/Home/Home/Home";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</div>
	);
}

export default App;
