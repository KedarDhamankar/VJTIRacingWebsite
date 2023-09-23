/* eslint-disable no-unused-vars */
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
				
				<div className="crowdform">

					<div className="formy">
						<div className="title">
							<span>THANK YOU FOR BEING A PART OF VJTI RACING'S CROWDFUNDING CAMPAIGN! </span>
						</div>
						<form action="" className="fform">
							<div>
								<label>Email</label>
								<br />
								<input name="Email" type="email" />
                            </div>
							<div>
								<label>Full Name</label>
								<br />
								<input name="Full name" type="text" />
                            </div>
							<div>
								<label>Address</label>
								<br />
								<input name="Address" type="text" />
                            </div>
							<div>
								<label>Contact Number</label>
								<br />
								<input name="Contact Number" type="text" />
                            </div>
							<div>
								<label>Team you would like to support</label>
								<br />
								<select >
									<option value="Motorbreath">Team Motorbreath 2024</option>
									<option value="ForzaVJTI">Team ForzaVJTI 2024</option>
								</select>
                            </div>
							<div>
								<label>Amount</label>
								<br />
								<input name="Amount" type="text" />
                            </div>
							<div>
								<label>Mode of Payment</label>
								<br />
								<select >
									<option value="paytm">Paytm</option>
									<option value="googlepay">Google Pay</option>
									<option value="banktransfer">Bank Transfer</option>
									<option value="cash">Cash</option>
								</select>
                            </div>
							<div>
								<label>Name of Point of Contact In VJTI Racing</label>
								<br />
								<input name="POC name" type="text" />
                            </div>
							<div>
								<label>T-Shirt size</label>
								<br />
								<select >
									<option value="XS">XS</option>
									<option value="S">S</option>
									<option value="M">M</option>
									<option value="L">L</option>
									<option value="XL">XL</option>
									<option value="XXL">XXL</option>
								</select>
                            </div>
						</form>

					</div>

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
