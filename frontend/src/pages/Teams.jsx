/* eslint-disable no-unused-vars */
// import React from "react";
import { useRef, React } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import "../stylesheets/Teams.css";

import motorbreath from "../assets/Teams/motorbreath.jpg";
import forza from "../assets/Teams/forza.jpg";
import motorbg from "../assets/Teams/bgmotorbreath.jpg";
import forzabg from "../assets/Teams/bgforza.jpg";
import sen1 from "../assets/Teams/Senate/sen1.jpg";
import sen2 from "../assets/Teams/Senate/sen2.jpg";
import sen3 from "../assets/Teams/Senate/sen3.jpg";

// Motorbreath team images (mb is prefix for all motorbreath members)
// Heads
import mbvivek from "../assets/Teams/Motorbreath/vivek wagadiya.jpg";
import mbgrishma from "../assets/Teams/Motorbreath/grishma balgi.jpg";
import mbmanav from "../assets/Teams/Motorbreath/manav yadav.jpg";
import mbtaran from "../assets/Teams/Motorbreath/taran poojari.jpg";
// Chassis
import mbveer from "../assets/Teams/Motorbreath/veer gupta.jpg";
import mbkunal from "../assets/Teams/Motorbreath/kunal dodani.jpg";
import mbkartik from "../assets/Teams/Motorbreath/kartik kedare.jpg";
// VD
import mbashwin from "../assets/Teams/Motorbreath/ashwin dias.jpg";
import mbrahul from "../assets/Teams/Motorbreath/rahul barbude.jpg";
import mbrajvar from "../assets/Teams/Motorbreath/rajvardhan sawant.jpeg";
import mbatharva from "../assets/Teams/Motorbreath/atharva bagwe.jpg";
// import mbkunalborole from "../assets/Teams/Motorbreath/kunal borole.jpg";
// Power Trans
import mbsahil from "../assets/Teams/Motorbreath/sahil_dhoble.jpg";
import mbdev from "../assets/Teams/Motorbreath/dev ganatra.jpg";
import mbsakshi from "../assets/Teams/Motorbreath/sakshi chorghe.jpg";
// import mbvishwesh from "../assets/Teams/Motorbreath/vishwesh chauhan.jpg";
// Brakes
import mbshravani from "../assets/Teams/Motorbreath/shravani deshpande.jpg";
import mbomkar from "../assets/Teams/Motorbreath/omkar ahir.jpg";
// Electronics
import mbflavia from "../assets/Teams/Motorbreath/flavia saldanha.jpg";
import mbashutosh from "../assets/Teams/Motorbreath/ashutosh mohapatra.jpg";
import mbanish from "../assets/Teams/Motorbreath/anish dhar.jpg";
import mbdhruv from "../assets/Teams/Motorbreath/dhruv chugh.jpg";

//Forza Team images (fz prefix for forza)
// Heads
import fzvishal from "../assets/Teams/Forza/vishal sejpal.jpg";
import fzjash from "../assets/Teams/Forza/jash shah.jpg";

// S&D
import fzsonal from "../assets/Teams/Forza/Sonal Baranwal.jpg";
import fzyash from "../assets/Teams/Forza/yash rajput.jpg";
import fzvivek from "../assets/Teams/Forza/vivek wagadiya.jpg";
import fzaryan from "../assets/Teams/Forza/aryan patil.jpg";

// Brakes
// import fzniel from "../assets/Teams/Forza/aryan 		.jpg";
import fzaditya from "../assets/Teams/Forza/aditya ambalvar.jpg";

// Power trans
import fzgaurav from "../assets/Teams/Forza/gaurav manuja.jpg";
// import fzpranjal from "../assets/Teams/Forza/aditya ambalvar.jpg";
import fzom from "../assets/Teams/Forza/om khairnar.jpg";
import fzpranjal from "../assets/Teams/Forza/pranjal patil.jpg";
import fztanmay from "../assets/Teams/Forza/tanmay dikey.jpg";
import fzmedha from "../assets/Teams/Forza/medha sati.jpg";

// Electronics
import fzharsh from "../assets/Teams/Forza/harsh deosthali.jpeg";
import fzgauravp from "../assets/Teams/Forza/gaurav patil.jpg";
import fzanish from "../assets/Teams/Forza/anish dhar.jpg";
import fzaditi from "../assets/Teams/Forza/aditi shinde.jpg";

const Teams = () => {
	// Click to scroll for Motorbreath
	const ref1 = useRef(null);

	const handleClick1 = () => {
		ref1.current?.scrollIntoView({ behavior: "smooth" });
	};

	// Click to scroll for Forza
	const ref2 = useRef(null);

	const handleClick2 = () => {
		ref2.current?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<title>Teams</title>
			<Navbar />

			{/* Senate Section */}
			<div className="teams">
				<section className="senate">
					<span className="heading">CLUB SENATE</span>

					{/* Hide this div in mobile layouts */}
					<div className="nonresponsive">
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

					{/* Show this div in mobile layouts */}
					<div className="responsive">
						<div className="picsflex">
							<div className="box">
								<img src={sen2} alt="" />
								<span>Siddharth Sankhe</span>
								<div className="line"></div>
								<span>General Secretary</span>
							</div>
						</div>
						<div className="picsflex">
							<div className="box">
								<img src={sen3} alt="" />
								<span>Shivraj Parle</span>
								<div className="line"></div>
								<span>Joint General Secretary</span>
								<span>Team ForzaVJTI</span>
							</div>
							<div className="box">
								<img src={sen1} alt="" />
								<span>Madhusudhan Kulkarni</span>
								<div className="line"></div>
								<span>Joint General Secretary</span>
								<span>Team Motorbreath</span>
							</div>
						</div>
					</div>
				</section>

				<div className="whiteline"></div>

				{/* MotorBreath Section */}
				<section className="motorbreathbg">
					<img src={motorbreath} alt="" className="bgimg" />
					<div className="content">
						<div className="box1">
							<div className="line"></div>
							<span className="team">TEAM</span>
						</div>
						<div className="box2">
							<span className="teamname">MOTORBREATH</span>
							<span className="baja">BAJA SAEINDIA</span>
							<button onClick={handleClick1}>Know More</button>
						</div>
					</div>
				</section>

				<div className="whiteline"></div>

				{/* Motorbreath Team */}
				<section className="motorbreath">
					<div className="motorbg" style={{ backgroundImage: `url(${motorbg})` }}>
						<div className="content" ref={ref1}>
							<span className="heading">HEADS</span>
							<div className="picsflex">
								<div className="box">
									<img src={mbvivek} alt="" />
									<span>Vivek Wagadiya</span>
									<span>
										<i>Captain</i>
									</span>
								</div>
								<div className="box">
									<img src={mbgrishma} alt="" />
									<span>Grishma Balgi</span>
									<span>
										<i>Vice - Captain</i>
									</span>
								</div>
							</div>
							<div className="picsflex">
								<div className="box">
									<img src={mbmanav} alt="" />
									<span>Manav Yadav</span>
									<span>
										<i>Treasurer</i>
									</span>
								</div>
								<div className="box">
									<img src={mbtaran} alt="" />
									<span>Taran Poojari</span>
									<span>
										<i>Sponsorship Head</i>
									</span>
								</div>
							</div>

							{/* Chassis members */}
							<span className="heading">CHASSIS</span>
							<div className="picsflex chassis margin_neg">
								<div className="box">
									<img src={mbtaran} alt="" />
									<span>Taran Poojari</span>
								</div>
								<div className="box">
									<img src={mbveer} alt="" />
									<span>Veer Gupta</span>
									<span>
										<i>Sector Head</i>
									</span>
								</div>
								<div className="box">
									<img src={mbkunal} alt="" />
									<span>Kunal Dodani</span>
								</div>
							</div>
							<div className="picsflex chassis">
								<div className="box">
									<img src={mbkartik} alt="" />
									<span>Kartik Kedare</span>
								</div>
								<div className="box">
									<img src={mbvivek} alt="" />
									<span>Vivek Wagadiya</span>
								</div>
							</div>

							{/* Vehicle dynamics members */}
							<span className="heading">VEHICLE DYNAMICS</span>
							<div className="picsflex chassis vd margin_neg">
								<div className="box">
									<img src={mbashwin} alt="" />
									<span>Ashwin Dias</span>
								</div>
								<div className="box">
									<img src={mbrahul} alt="" />
									<span>Rahul Barbade</span>
									<span>
										<i>Sector Head</i>
									</span>
								</div>
								<div className="box">
									<img src={mbrajvar} alt="" />
									<span>Rajvardhan</span>
								</div>
							</div>
							<div className="picsflex chassis vd">
								<div className="box">
									<img src={mbatharva} alt="" />
									<span>Atharva Bagwe</span>
								</div>
								<div className="box">
									<img src={mbtaran} alt="" />
									<span>Kunal Borole</span>
								</div>
							</div>

							{/* Power Transmission members */}
							<span className="heading">POWER TRANSMISSON</span>
							<div className="picsflex chassis powertrans margin_neg ">
								<div className="box">
									<img src={mbmanav} alt="" />
									<span>Manav Yadav</span>
								</div>
								<div className="box">
									<img src={mbsahil} alt="" />
									<span>Sahil Dhoble</span>
									<span>
										<i>Sector Head</i>
									</span>
								</div>
								<div className="box">
									<img src={mbdev} alt="" />
									<span>Dev Ganatra</span>
								</div>
							</div>
							<div className="picsflex chassis powertrans">
								<div className="box">
									<img src={mbsakshi} alt="" />
									<span>Sakshi Chorghe</span>
								</div>
								<div className="box">
									<img src={mbtaran} alt="" />
									<span>Vishwesh Chauhan</span>
								</div>
							</div>

							{/* Brakes members */}
							<span className="heading">BRAKES</span>
							<div className="picsflex chassis brakes">
								{/* brake1 class used to give negative margin to box so that top and bottom flex mixes */}
								<div className="box brake1">
									<img src={mbshravani} alt="" />
									<span>Shravani Deshpande</span>
									<span>
										<i>Sector Head</i>
									</span>
								</div>
							</div>
							<div className="picsflex chassis brakes">
								<div className="box">
									<img src={mbomkar} alt="" />
									<span>Omkar Ahir</span>
								</div>
								<div className="box">
									<img src={mbgrishma} alt="" />
									<span>Grishma Balgi</span>
								</div>
							</div>
							{/* Electronics members */}
							<span className="heading">ELECTRONICS</span>
							<div className="picsflex chassis elecleft margin_neg">
								<div className="box">
									<img src={mbflavia} alt="" />
									<span>Flavia Saldanha</span>
								</div>
								<div className="box">
									<img src={mbashutosh} alt="" />
									<span>Ashutosh Mohapatra</span>
									<span>
										<i>Sector Head</i>
									</span>
								</div>
							</div>
							<div className="picsflex chassis elecright">
								<div className="box">
									<img src={mbanish} alt="" />
									<span>Anish Dhar</span>
								</div>
								<div className="box">
									<img src={mbdhruv} alt="" />
									<span>Dhruv Chugh</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="whiteline"></div>

				{/* Forza Section */}
				<section className="motorbreathbg forzabg">
					<img src={forza} alt="" className="bgimg" />
					<div className="content">
						<div className="box2">
							<div className="box1">
								<span className="team">TEAM</span>
								<div className="line"></div>
							</div>
							<span className="teamname">FORZAVJTI</span>
							<span className="baja">INDIAN KARTING RACE</span>
							<button onClick={handleClick2}>Know More</button>
						</div>
					</div>
				</section>

				<div className="whiteline"></div>

				{/* Forza Team */}
				{/* reusing css of motorbreath team section */}
				<section className="motorbreath forzateam">
					<div className="motorbg" style={{ backgroundImage: `url(${forzabg})` }}>
						<div className="content" ref={ref2}>
							<span className="heading">HEADS</span>
							<div className="picsflex heads">
								<div className="box">
									<img src={mbashwin} alt="" />
									<span>Ashwin Dias</span>
									<span>
										<i>Vice Captain</i>
									</span>
								</div>
								<div className="box">
									<img src={fzvishal} alt="" />
									<span>Vishal Sejpal</span>
									<span>
										<i>Captain</i>
									</span>
								</div>
								<div className="box">
									<img src={fzjash} alt="" />
									<span>Jash Shah</span>
									<span>
										<i>Treasurer</i>
									</span>
								</div>
							</div>

							{/* S&D members */}
							<span className="heading">STRUCTURES & DYNAMICS</span>
							<div className="picsflex chassis margin_neg ">
								<div className="box">
									<img src={fzsonal} alt="" />
									<span>Sonal Baranwal</span>
								</div>
								<div className="box">
									<img src={fzyash} alt="" />
									<span>Yash Rajput</span>
									<span>
										<i>Sector Head</i>
									</span>
								</div>
								<div className="box">
									<img src={fzvivek} alt="" />
									<span>Vivek Wagadiya</span>
								</div>
								<div className="box">
									<img src={fzaryan} alt="" />
									<span>Aryan Patil</span>
								</div>
							</div>
							<div className="picsflex chassis">
								<div className="box">
									<img src={fzvishal} alt="" />
									<span>Vishal Sejpal</span>
								</div>
								<div className="box">
									<img src={mbashwin} alt="" />
									<span>Ashwin Dias</span>
								</div>
								<div className="box">
									<img src={fzjash} alt="" />
									<span>Jash Shah</span>
								</div>
							</div>

							{/* Brakes members */}
							<span className="heading">BRAKES</span>
							<div className="picsflex chassis vd ">
								<div className="box">
									<img src={mbashwin} alt="" />
									<span>Niel James</span>
									<span>
										<i>Sector Head</i>
									</span>
								</div>
								<div className="box">
									<img src={fzaditya} alt="" />
									<span>Aditya Ambalwar</span>
								</div>
							</div>

							{/* Power Transmission members */}
							<span className="heading">POWER TRANSMISSION</span>
							<div className="picsflex chassis elecright">
								<div className="box">
									<img src={fzgaurav} alt="" />
									<span>Gaurav Manuja</span>
								</div>
								<div className="box">
									<img src={mbashwin} alt="" />
									<span>Pranjal Patil</span>
									<span>
										<i>Sector Head</i>
									</span>
								</div>
								<div className="box">
									<img src={fzom} alt="" />
									<span>Om Khairnar</span>
								</div>
							</div>
							<div className="picsflex chassis elecleft">
								<div className="box">
									<img src={fzpranjal} alt="" />
									<span>Pranjal Patil</span>
								</div>
								<div className="box">
									<img src={fztanmay} alt="" />
									<span>Tanmay Dikey</span>
								</div>
								<div className="box">
									<img src={fzmedha} alt="" />
									<span>Medha Sati</span>
								</div>
							</div>

							{/* Electronics members */}
							<span className="heading">ELECTRONICS</span>
							<div className="picsflex chassis brakes margin_neg">
								{/* brake1 class used to give negative margin to box so that top and bottom flex mixes */}
								<div className="box">
									<img src={fzharsh} alt="" />
									<span>Harsh Deosthali</span>
								</div>
								<div className="box">
									<img src={fzgauravp} alt="" />
									<span>Gaurav Patil</span>
									<span>
										<i>Sector Head</i>
									</span>
								</div>
								<div className="box">
									<img src={fzanish} alt="" />
									<span>Anish Dhar</span>
								</div>
							</div>
							<div className="picsflex chassis brakes">
								<div className="box">
									<img src={fzaditi} alt="" />
									<span>Aditi Shinde</span>
								</div>
								<div className="box">
									<img src={mbdhruv} alt="" />
									<span>Dhruv Chugh</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div className="whiteline"></div>

				<Footer />
			</div>
		</>
	);
};

export default Teams;
