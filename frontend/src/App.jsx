import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
<<<<<<< HEAD
import Competitions from "./pages/Competitions";
=======
import SponsorUs from "./pages/SponsorUs";
>>>>>>> fb99194a7239ef66220f0aeb5a9230089dff5cfa

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route element={<Home />} path="/" />
					<Route element={<Teams />} path="/Teams" />
<<<<<<< HEAD
					<Route element={<Competitions />} path="/Competitions" />
=======
					<Route element={<SponsorUs />} path="/SponsorUs" />
>>>>>>> fb99194a7239ef66220f0aeb5a9230089dff5cfa
				</Routes>
			</Router>
		</div>
	);
};

export default App;
