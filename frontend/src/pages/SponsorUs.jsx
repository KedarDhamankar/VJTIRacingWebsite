import { useRef, useState, React } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import "../stylesheets/SponsorUs.css";
import bckgd from "../assets/SponsorUs/bckgd.jpg";
import shape1 from "../assets/SponsorUs/1.png";
import shape2 from "../assets/SponsorUs/2.png";
import bg from "../assets/SponsorUs/3.png";

const SponsorUs = () => {
	const [email, setEmail] = useState("");
	const [cmpname, setCmpname] = useState("");
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [number, setNumber] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`The name you entered was: ${name}`);
	};

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

				<div className="form">
					<span>FILL THE FORM AND WE WILL GET BACK TO YOU</span>
					<form onSubmit={handleSubmit}>
						<div>
							<label>Email</label>
							<br />
							<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
						</div>
						<div>
							<label>Email</label>
							<br />
							<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
						</div>
						<div>
							<label>Email</label>
							<br />
							<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
						</div>
						<div>
							<label>Email</label>
							<br />
							<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
						</div>
						<div>
							<label>Email</label>
							<br />
							<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
						</div>
						<div>
							<label>Email</label>
							<br />
							<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
						</div>
						{/* <input type="submit" /> */}
					</form>
				</div>
			</section>
		</>
	);
};

export default SponsorUs;
