import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/Navbar.css";
import vrlogo from "../assets/VR_logo.png";

const Navbar = () => {
	return (
		<>
			<div className="nav">
				<Link to="/" className="linklogo">
					<img src={vrlogo} alt="" className="logo" />
				</Link>

				<ul className="navlinks">
					<li>
						<Link to="/Teams" className="linktext">
							TEAMS
						</Link>
					</li>
					<li>
						<Link to="/Competitions" className="linktext">
							COMPETITIONS
						</Link>
					</li>
					<li>
						<Link to="/Activities" className="linktext">
							ACTIVITIES
						</Link>
					</li>
					<li>
						<Link to="/Internships" className="linktext">
							INTERNSHIPS
						</Link>
					</li>
					<li>
						<Link to="/Media" className="linktext">
							MEDIA
						</Link>
					</li>
					<li>
						<Link to="/Crowdfunding" className="linktext">
							CROWDFUNDING
						</Link>
					</li>
					<li>
						<Link to="/Sponsor" className="linktext">
							SPONSOR US
						</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
