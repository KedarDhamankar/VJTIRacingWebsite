import React from "react";
import "../stylesheets/Crowdfunding.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import bg from "../assets/Crowdfunding/bg.jpg";
import im2 from "../assets/Crowdfunding/forza.png";

const Crowdfunding = () => {
	return(
		<>
		<section>
			<title>Crowdfunding</title>
			<Navbar/>
		</section>
		<section>
			<div className="crowd">
				{/* Background image and title */}
				<div className="back">
					<img src={bg} alt="" />
					<div className="darkenimage"></div>
					<span className="head">CROWDFUNDING</span>
				</div>
				
				{/* section2 sponsor */}
				<div className="bg">

					<div className="floater">
							<img src={im2} alt="" />
							<div className="cont">
								
								<span className="header">
									TEAM MOTORBREATH
								</span>
								
								<div className="des">
									<p>With a legacy of successfully competing in BAJA 
										SAEINDIA competitions. Team Motorbreath is
										here for e-BAJA 2024. With a shared vision to
										design and fabricate our own electric ATV,
										we hope you tag along for our journey</p>
								</div>
								<div className="button">
									<button>
										Click here to sponsor us
									</button>
								</div>
						</div>
						
					</div>

					<div className="floater">
							<img src={im2} alt="" />
							<div className="cont">
								
								<span className="header">
									TEAM FORZAVJTI
								</span>
								
								<div className="des">
									<p>With a vision for expansion, 
										we present to you Team ForzaVJTI, 
										a new initiative by a group of highly 
										motivated second year undergraduates. 
										With a shared vision to manufacture 
										our own EV Go-Kart and participate in IKR 2024, 
										join us on our way to achieve our goal.</p>
								</div>
								<div className="button">
									<button>
										Click here to sponsor us
									</button>
								</div>
						</div>
						
					</div>
				
				</div>
				
				<div className="formsec">
					
				</div>

			</div>
		</section>
		<section>
			<Footer/>
		</section>
		</>
	);
};

export default Crowdfunding;
