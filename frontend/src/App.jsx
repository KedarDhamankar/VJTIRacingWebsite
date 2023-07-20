import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route element={<Home />} path="/" />
					<Route element={<Teams />} path="/Teams" />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
