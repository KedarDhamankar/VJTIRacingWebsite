import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Competitions from "./pages/Competitions";

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route element={<Home />} path="/" />
					<Route element={<Teams />} path="/Teams" />
					<Route element={<Competitions />} path="/Competitions" />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
