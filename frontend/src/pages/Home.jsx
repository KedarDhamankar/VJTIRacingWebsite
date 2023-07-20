import React from "react";
import Navbar from "../components/Navbar";

import "../stylesheets/Home.css";
import bckgd from "../assets/Home/bckgd.jpg";
import designing from "../assets/Home/pencilgear.png";
import manufacturing from "../assets/Home/gear.png";
import racing from "../assets/Home/flag.png";

const Home = () => {
	return (
		<>
			<title>Home</title>
			<Navbar />
			<div className="home">
				<div className="backdiv">
					<img src={bckgd} alt="" />
					<div className="darkenimage"></div>
					<span>VJTI RACING</span>
				</div>

				{/* <div className="whiteline"></div> */}

				<div className="welcome">
					<span className="text1">WELCOME TO VJTI RACING</span>
					<span className="text2">
						<span className="boldtext">The Official SAE Collegiate Club of VJTI, Matunga</span>
						{/* <br /> */}
						<span>Established in 2008, VJTI Racing is a student organization for automobile enthusiasts. It is a platform for young engineers to bring their innovative ideas into action that would contribute for a better future. We seek to be at par with the leading technology in the industry and implement those in the most effective and cost cutting ways in our project.</span>
					</span>
					<div className="boxes">
						<div className="box">
							<img src={designing} alt="" />
							<div className="flextitle">DESIGNING</div>
							<span className="flexcontent">We begin our journey each year by designing our vehicle from scratch. Every component is carefully designed, taking all the parameters into consideration. The design is then subject to analysis through which all the little aberrations are removed</span>
						</div>
						<div className="box">
							<img src={manufacturing} alt="" />
							<div className="flextitle">MANUFACTURING</div>
							<span className="flexcontent">In this phase, we take the vehicle from our computer screens and bring them into reality. Once every component is machined and ready, everything is assembled and just like that, we go from pieces of metal to one of the most important inventions of our century</span>
						</div>
						<div className="box">
							<img src={racing} alt="" />
							<div className="flextitle">RACING</div>
							<span className="flexcontent">Once our sweet ride is ready, we take it out to compete in competitions throughout the world. The thrill and joy of competing with a car made by our own hands is unparalleled</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
