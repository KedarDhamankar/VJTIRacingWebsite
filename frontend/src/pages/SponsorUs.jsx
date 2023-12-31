/* eslint-disable no-unused-vars */
import { useRef, useState, React } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import "../stylesheets/SponsorUs.css";
import bckgd from "../assets/SponsorUs/bckgd.jpg";
import bg from "../assets/SponsorUs/3.png";
import cs1 from "../assets/SponsorUs/new sponsors/sponsors_landscape.png";
import cs2 from "../assets/SponsorUs/new sponsors/sponsors_portrait.png";
import ps1 from "../assets/SponsorUs/past/pastspons_landscape.png";
import ps2 from "../assets/SponsorUs/past/pastspons_portrait.png";

const SponsorUs = () => {
    function handleSubmit(e) {
        const formEle = document.querySelector("form");
        e.preventDefault();
        console.log("Submitted");
        const formData = new FormData(formEle);
        fetch(
            "https://script.google.com/macros/s/AKfycbzXJpiz-Je4vMvOTcxxrsitLvXniiW5gCiKrqIy18K270hd0W8Kt-rIzCecUB3S4f7wUw/exec",
            { method: "POST", body: formData }
        );
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

            <section
                className="formsection"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="booklet">
                    <span>DOWNLOAD OUR SPONSORSHIP BOOKLETS FROM HERE</span>
                    <div className="download">
                        {/* <Link to="https://drive.google.com/file/d/1radmUe_dbwQKrq18v38nzhU_MVLF5PeO/view?usp=sharing"> */}
                        <a
                            href="https://drive.google.com/file/d/1radmUe_dbwQKrq18v38nzhU_MVLF5PeO/view?usp=sharing"
                            target="_blank"
                        >
                            <button>TEAM MOTORBREATH</button>
                        </a>
                        {/* </Link> */}
                        {/* <Link to="https://drive.google.com/file/d/1kdlOJFhK61C8nETWTBUoLiinn0jAgaKM/view?usp=sharing"> */}
                        <a
                            href="https://drive.google.com/file/d/1kdlOJFhK61C8nETWTBUoLiinn0jAgaKM/view?usp=sharing"
                            target="_blank"
                        >
                            <button>TEAM FORZA</button>
                        </a>
                        {/* </Link> */}
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

            <section
                className="sponsorsection"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="currentspons">
                    <h1>OUR SPONSORS</h1>
                    <img className="currsponslandscape" src={cs1} alt="" />
                    <img className="currsponsportrait" src={cs2} alt="" />
                </div>
                <div className="pastspons">
                    <h1>OUR PAST SPONSORS</h1>
                    <img className="pastsponslandscape" src={ps1} alt="" />
                    <img className="pastsponsportrait" src={ps2} alt="" />
                </div>
            </section>

            <Footer />
        </>
    );
};

export default SponsorUs;
