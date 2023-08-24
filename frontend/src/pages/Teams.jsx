// import React from "react";

import Navbar from "../components/Navbar";
// import Footer from "../components/footer";

import "../stylesheets/Teams.css";

import bg1 from "../assets/Teams/bg1.jpg";
import sen1 from "../assets/Teams/Senate/sen1.jpg";
import sen2 from "../assets/Teams/Senate/sen2.jpg";
import sen3 from "../assets/Teams/Senate/sen3.jpg";

const Teams = () => {
	return (
		<>
			<title>Teams</title>
			<Navbar />

			<div className="teams">
				<div className="teamsbg" style={{ backgroundImage: `url(${bg1})` }}>
					<div className="content">
						<div className="box1">
							<div className="line"></div>
							<span className="team">TEAM</span>
						</div>
						<div className="box2">
							<span className="teamname">MOTORBREATH</span>
							<span className="baja">BAJA SAEINDIA</span>
							<button>Know More</button>
						</div>
					</div>
				</div>
				<div className="whiteline"></div>
				<div className="senate">
					<span className="title">CLUB SENATE</span>
					<div className="picsflex">
						<div className="box">
							<img src={sen1} alt="" />
							<span>Madhusudhan Kulkarni</span>
							<div className="line"></div>
							<span>Joint General Secretary</span>
							<span>Team Motorbreath</span>
						</div>
						<div className="box">
							<img src={sen2} alt="" />
							<span>Siddharth Sankhe</span>
							<div className="line"></div>
							<span>General Secretary</span>
						</div>
						<div className="box">
							<img src={sen3} alt="" />
							<span>Shivraj Parle</span>
							<div className="line"></div>
							<span>Joint General Secretary</span>
							<span>Team ForzaVJTI</span>
						</div>
					</div>
				</div>
				<div className="whiteline"></div>
			</div>
		</>
	);
};

export default Teams;
