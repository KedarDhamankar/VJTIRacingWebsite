import { useRef, useState, React } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import "../stylesheets/SponsorUs.css";
import bckgd from "../assets/SponsorUs/bckgd.jpg";
import shape1 from "../assets/SponsorUs/1.png";
import shape2 from "../assets/SponsorUs/2.png";
import bg from "../assets/SponsorUs/3.png";

const SponsorUs = () => {
	const [Email, setEmail] = useState("");
	const [CompanyName, setCmpname] = useState("");
	const [Name, setName] = useState("");
	const [Address, setAddress] = useState("");
	const [Number, setNumber] = useState("");
	const [Message, setMessage] = useState("");

	function handleSubmit(e) {
		const formEle = document.querySelector("form");
		e.preventDefault();
		console.log("Submitted");
		const formData = new FormData(formEle);
		fetch("https://script.google.com/macros/s/AKfycbyxUEpwvMP7TbRDJicX8-5RCAHx7fIE_HX4KxkkLdwQxWvbZGyEFfXyXu-mb7w2KMRMwg/exec", { method: "POST", body: formData });
	}

	return (
		<>
			<title>SponsorUs</title>
			<Navbar />

			{/* First Background image section */}
			<section className="sponsorbg">
				<img src={bckgd} alt="" />
				<span>SPONSOR US</span>
			</section>

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
		</>
	);
};

export default SponsorUs;
