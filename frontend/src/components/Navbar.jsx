/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";


import "../stylesheets/Navbar.css";
import vrlogo from "../assets/VR_logo_1.png";

const Navbar = () => {
	const [color, setColor] = useState(false);

	const changeColor = () => {
		if (window.scrollY >= 200) {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	window.addEventListener("scroll", changeColor);
	return (
		<>
			<div className={color ? "nav nav-bg" : "nav"}>
				<Link to="/" className="linklogo">
					<img src={vrlogo} alt="" className="logo" />
				</Link>

				{/* Hiding this navlinks for mobiles */}
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
						<Link to="/SponsorUs" className="linktext">
							SPONSOR US
						</Link>
					</li>
				</ul>

				{/* Display this on mobiles */}

				<div className="nav-mobile">
					<input type="checkbox" name="" id="" />
					<div className="toggleslide">
						<span className="top_line common"></span>
						<span className="middle_line common"></span>
						<span className="bottom_line common"></span>
					</div>

					<div className="slide">
						<h1></h1>
						<h1></h1>
						<ul className="moblinks">
							<li>
								<Link to="/Teams" className="mob-linktext">
									TEAMS
								</Link>
							</li>
							<li>
								<Link to="/Competitions" className="mob-linktext">
									COMPETITIONS
								</Link>
							</li>
							<li>
								<Link to="/Activities" className="mob-linktext">
									ACTIVITIES
								</Link>
							</li>
							<li>
								<Link to="/Internships" className="mob-linktext">
									INTERNSHIPS
								</Link>
							</li>
							<li>
								<Link to="/Media" className="mob-linktext">
									MEDIA
								</Link>
							</li>
							<li>
								<Link to="/Crowdfunding" className="mob-linktext">
									CROWDFUNDING
								</Link>
							</li>
							<li>
								<Link to="/SponsorUs" className="mob-linktext">
									SPONSOR US
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
