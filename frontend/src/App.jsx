/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Competitions from "./pages/Competitions";
import SponsorUs from "./pages/SponsorUs";

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route element={<Home />} path="/" />
					<Route element={<Teams />} path="/Teams" />
					<Route element={<Competitions />} path="/Competitions" />
					<Route element={<SponsorUs />} path="/SponsorUs" />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
