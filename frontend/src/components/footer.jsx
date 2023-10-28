/* eslint-disable no-unused-vars */
import React from "react";

import "../stylesheets/Footer.css";

import {
    FaMapMarked,
    FaPhoneAlt,
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <span className=" text1">CONTACT US</span>
                <div className="footercontent">
                    <div className="container" style={{ textAlign: "left" }}>
                        <h2>VJTI RACING</h2>
                        <span>The club for VJTI's automobile enthusiasts.</span>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1885.9716141382025!2d72.85483373470099!3d19.02222315365996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4972d21%3A0x2c50185364aca4c1!2sVeermata%20Jijabai%20Technological%20Institute%20VJTI!5e0!3m2!1sen!2sin!4v1690807913559!5m2!1sen!2sin"
                            width="370"
                            height="250"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="container contacts">
                        <h3>CONTACT DETAILS</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td width={"50rem"}>
                                        <div className="socialicons">
                                            <FaMapMarked size={35} />
                                        </div>
                                    </td>
                                    <td>
                                        <span>
                                            VJTI Racing-167, Nathalal Parekh
                                            Marg, Wadla Village, Wadala, Mumbai,
                                            Maharashtra 400031
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="socialicons">
                                            <FaPhoneAlt size={35} />
                                        </div>
                                    </td>
                                    <td>
                                        <span>Captain: +91 90048 12503</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="socialicons">
                                            <GrMail size={35} />
                                        </div>
                                    </td>
                                    <td>
                                        <span>
                                            vjtiracingindia@me.vjti.ac.in
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="container">
                        <h3>WE'RE SOCIAL</h3>
                        <div className="socialicons">
                            <a
                                href="https://www.facebook.com/vjtiracing/"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                {" "}
                                <FaFacebookSquare size={35} />
                            </a>

                            <a
                                href="https://www.instagram.com/vjtiracing/"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                {" "}
                                <FaInstagramSquare size={35} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/vjti-racing/"
                                style={{
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                {" "}
                                <FaLinkedin size={35} />
                            </a>
                        </div>
                        <h5>
                            © VJTI Racing 2023 <br /> All Rights Reserved.
                        </h5>
                        <br />
                        <h3>MAINTAINED BY:</h3>

                        <div className="credits">
                            <h5>Kedar Dhamankar</h5>
                            <h5>Rucha Patil</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
