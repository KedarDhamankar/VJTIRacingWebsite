/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Competitions from "./pages/Competitions";
import Activities from "./pages/Activities";
import Internships from "./pages/Internships";
import Media from "./pages/Media";
import Crowdfunding from "./pages/Crowdfunding";
import SponsorUs from "./pages/SponsorUs";

// Component to scroll to top whenever route changes
import ScrollToTop from "./components/ScrolltoTop";

const App = () => {
	return (
		<div>
			<Router>
				<ScrollToTop />
				<Routes>
					<Route element={<Home />} path="/" />
					<Route element={<Teams />} path="/Teams" />
					<Route element={<Competitions />} path="/Competitions" />
					<Route element={<Activities />} path="/Activities" />
					<Route element={<Internships />} path="/Internships" />
					<Route element={<Media />} path="/Media" />
					<Route element={<Crowdfunding />} path="/Crowdfunding" />
					<Route element={<SponsorUs />} path="/SponsorUs" />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
