import { useRef, useState, React } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import "../stylesheets/SponsorUs.css";
import bckgd from "../assets/SponsorUs/bckgd.jpg";
import shape1 from "../assets/SponsorUs/1.png";
import shape2 from "../assets/SponsorUs/2.png";
import bg from "../assets/SponsorUs/3.png";

const SponsorUs = () => {
	function handleSubmit(e) {
		const formEle = document.querySelector("form");
		e.preventDefault();
		console.log("Submitted");
		const formData = new FormData(formEle);
		fetch("https://script.google.com/macros/s/AKfycby0aS8rF-UrWMDQZDYMF6_zBSLJNBKxgrHIZlTGW1uyDrT4b3mrtIw-eGMzpLscztbHXg/exec", { method: "POST", body: formData });
	}

	return (
		<>
			<title>Sponsor Us</title>
			<Navbar />

			{/* First Background image section */}
			<section className="sponsorbg">
				<img src={bckgd} alt="" />
				<span>SPONSOR US</span>
			</section>

			<div className="whiteline"></div>

			<section className="formsection" style={{ backgroundImage: `url(${bg})` }}>
				<div className="booklet">
					<span>DOWNLOAD OUR SPONSORSHIP BOOKLETS FROM HERE</span>
					<div className="download">
						<button>TEAM MOTORBREATH</button>
						<button>TEAM FORZA</button>
					</div>
				</div>

				<div className="formdiv">
					<span>FILL THE FORM AND WE WILL GET BACK TO YOU</span>
					<form className="form" onSubmit={(e) => handleSubmit(e)}>
						<div>
							<label>Email</label>
							<br />
							<input name="Email" type="email" />
						</div>
						<div>
							<label>Company Name</label>
							<br />
							<input name="CompanyName" type="text" />
						</div>
						<div>
							<label>Name</label>
							<br />
							<input name="Name" type="text" />
						</div>
						<div>
							<label>Address</label>
							<br />
							<input name="Address" type="text" />
						</div>
						<div>
							<label>Contact Number</label>
							<br />
							<input name="Number" type="number" />
						</div>
						<div>
							<label>Your Message</label>
							<br />
							<input name="Message" type="text" />
						</div>
						{/* <button> */}
						<center>
							<input type="submit" className="submit" />
						</center>
						{/* </button> */}
					</form>
				</div>
			</section>

			{/* <div className="whiteline"></div> */}

			{/* Current Sponsors section */}
			
			<section className="sponsorsection" style={{ backgroundImage: `url(${bg})` }}>
				<span>Our Sponsors</span>
				</section>
		</>
	);
};

export default SponsorUs;
