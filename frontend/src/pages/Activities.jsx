import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import "../stylesheets/Activities.css";

import motorbreath from "../assets/Teams/motorbreath.jpg";

const Activities = () => {
	return (
		<>
			<title>Activities</title>
			<Navbar />

			<div className="activities">
				<div className="activitiesbg">
					<img src={motorbreath} alt="" />
					<span>ACTIVITIES</span>
				</div>
				<div className="whiteline"></div>
				{/* Activities content section */}
				<div className="blackdiv">
					<div className="box">
						<div className="box1">
							<span className="title">SOLIDWORKS WORKSHOP</span>
							<span className="content">Students from the freshman year are introduced to the world of Computer Aided Design with SolidWorks, an industry leading software</span>
						</div>
						<img src={motorbreath} alt="" />
					</div>
					<div className="box">
						<div className="box1">
							<span className="title">FINITE ELEMENT ANALYSIS WORKSHOP</span>
							<span className="content">Finite Element Analysis helps study the strength and behaviour of modelled partsn under load, helping validate designs</span>
						</div>
						<img src={motorbreath} alt="" />
					</div>
					<div className="box">
						<div className="box1">
							<span className="title">SIMULINK WORKSHOP</span>
							<span className="content">Offering a graphical editor, customizable block libraries for dynamic system modeling and simulation. Integrated with MATLAB, it incorporates MATLAB algorithms and exports simulation results for analysis.</span>
						</div>
						<img src={motorbreath} alt="" />
					</div>
					<div className="box">
						<div className="box1">
							<span className="title">3D PRINTING</span>
							<span className="content">A cutting edge technology at the forefront of the manufacturing and prototyping industries, students are introduced to the working and programming of 3D printers.</span>
						</div>
						<img src={motorbreath} alt="" />
					</div>
					<div className="box">
						<div className="box1">
							<span className="title">AUTO SHOW</span>
							<span className="content">Our show which attracts automotive enthusiasts from all over Mumbai, with a footfall of more than 10,000; featuring a line-up of several exotic cars and bikes, as well as our very own ATV.</span>
						</div>
						<img src={motorbreath} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Activities;
