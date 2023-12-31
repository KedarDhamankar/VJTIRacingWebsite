/* eslint-disable no-unused-vars */
import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import "../stylesheets/Internships.css";
// importing images
import motorbreath from "../assets/Teams/motorbreath.jpg";
import rohan from "../assets/Internships/Rohan.png";
import jatin from "../assets/Internships/jatin.png";
import krish from "../assets/Internships/krish.png";
import atharva from "../assets/Internships/Atharva.png";
import chaitanya from "../assets/Internships/Chaitanya.png";
import harsh from "../assets/Internships/Harsh.png";
import siddharth from "../assets/Internships/siddharth.png";
import madhusugandh from "../assets/Internships/madhusugandh.png";
import ritesh from "../assets/Internships/Ritesh.png";
import chandrashekhar from "../assets/Internships/Chandrashekhar.png";
import kartika from "../assets/Internships/Kartika.png";
import shivam from "../assets/Internships/Shivam.png";
import shivraj from "../assets/Internships/Shivraj.png";
import shraddha from "../assets/Internships/Shraddha.png";
import samir from "../assets/Internships/samir.jpeg";
// backgnd imgs
import bg1 from "../assets/Internships/plane.png";
import csir from "../assets/Internships/7.png";
import csir_mobile from "../assets/Internships/7_copy.png";
import barc from "../assets/Internships/9.png";
import logo from "../assets/Internships/barc.png";
import bg2 from "../assets/Internships/10.png";
import logo2 from "../assets/Internships/mitacs.png";
import logo3 from "../assets/Internships/Ohio.png";
import bg3 from "../assets/Internships/11.png";
import bg4 from "../assets/Internships/12.png";
import logo4 from "../assets/Internships/crompton.png";
import logo5 from "../assets/Internships/ir.png";
import logo6 from "../assets/Internships/tata.png";
import logo7 from "../assets/Internships/glatt.png";
import logo8 from "../assets/Internships/L&T.png";

const Internships = () => {
    return (
        <>
            <title>Internships</title>
            <Navbar />

            <section className="internshipsbg">
                <img src={motorbreath} alt="" />
                <div className="darkenimage"></div>
                <span>INTERNSHIPS</span>
            </section>

            {/* <div className="whiteline"></div> */}
            <section>
                <div
                    className="CSIR"
                    style={{
                        backgroundImage: `url(${bg1})`,
                    }}
                >
                    <div className="head">
                        <img src={csir} alt="" />
                        <img src={csir_mobile} alt="" />
                    </div>
                    <span>
                        <i>RESEARCH INTERNS</i>
                    </span>
                    <div className="pics">
                        <div className="box1">
                            <img src={rohan} alt="" />
                            <span>ROHAN ADKHALE</span>
                        </div>
                        <div className="box1">
                            <img src={jatin} alt="" />
                            <span>JATIN BARANWAL</span>
                        </div>
                        <div className="box1">
                            <img src={harsh} alt="" />
                            <span>HARSH KUBADIA</span>
                        </div>
                        <div className="box1">
                            <img src={ritesh} alt="" />
                            <span>RITESH JAGTAP</span>
                        </div>
                        <div className="box1">
                            <img src={atharva} alt="" />
                            <span>ATHARVA BHOSALE</span>
                        </div>
                    </div>
                </div>

                <div
                    className="BARC"
                    style={{
                        backgroundImage: `url(${barc})`,
                    }}
                >
                    <span className="barc-head">BARC</span>
                    <br />
                    <span className="barc-head2">Research Interns</span>

                    <div className="barc-logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="pics">
                        <div className="box1">
                            <img src={chaitanya} alt="" />
                            <span>CHAITANYA DESHPANDE</span>
                        </div>

                        <div className="box1">
                            <img src={krish} alt="" />
                            <span>KRISH SHAH</span>
                        </div>
                        <div className="box1">
                            <img src={shivam} alt="" />
                            <span>SHIVAM SHINDE</span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div
                    className="research"
                    style={{
                        backgroundImage: `url(${bg2})`,
                        backgroundRepeat: "no-repeat",
                        objectFit: "cover",
                    }}
                >
                    <div className="whitediv">
                        <span>
                            <i>RESEARCH INTERNS</i>
                        </span>
                        <div className="grid">
                            <div className="pics">
                                <img src={logo3} alt="" />
                                <div className="box1">
                                    <img src={siddharth} alt="" />
                                    <span>SIDDHARTH SANKHE</span>
                                    <h4>
                                        <i>
                                            RIYA Program Gear Train lab, Ohio
                                            State University
                                        </i>
                                    </h4>
                                </div>

                                <div className="box1">
                                    <img src={kartika} alt="" />
                                    <span>KARTIKA SHARMA</span>
                                    <h4>
                                        <i>
                                            MITACS - DALHOUSIE UNIVERSITY,
                                            CANADA
                                        </i>
                                    </h4>
                                </div>
                                <img src={logo2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="mitacs2"
                style={{
                    backgroundImage: `url(${bg3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPositionY: "center",
                }}
            >
                <div className="whitediv">
                    {/* <span>
                        <i>RESEARCH INTERNS</i>
                    </span> */}
                    <div className="pics">
                        <img src={logo4} alt="" />
                        <div className="box1">
                            <img src={shraddha} alt="" />
                            <i>
                                <span>SHRADDHA</span>
                                <br />
                                <span>BEDRE</span>
                                <h4>CROMPTON GREAVES</h4>
                                <h4>IOT INTERN</h4>
                            </i>
                        </div>

                        <div className="box1">
                            <img src={chandrashekhar} alt="" />
                            <i>
                                <span>CHANDRASHEKHAR JADHAV</span>
                                <h4>INDIAN RAILWAYS</h4>
                            </i>
                        </div>
                        <img src={logo5} alt="" />
                    </div>
                </div>
            </section>
            <section
                className="mitacs3"
                style={{
                    backgroundImage: `url(${bg4})`,
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                }}
            >
                <div className="whitediv">
                    <div className="pics">
                        <div className="box1">
                            <img src={samir} className="pic" alt="" />
                            {/* <div className="pic"> */}
                            <img src={logo6} className="company" alt="" />
                            {/* </div> */}
                            <i>
                                <span>SAMIR KADRI</span>
                                <h4>VEHICLE DYNAMICS INTERN</h4>
                                <h4>TATA MOTORS PUNE</h4>
                            </i>
                        </div>

                        <div className="box1">
                            <img src={madhusugandh} className="pic" alt="" />
                            {/* <div className="pic"> */}
                            <img src={logo7} className="company" alt="" />
                            {/* </div> */}
                            <i>
                                <span>MADHUSUDHAN KULKARNI</span>
                                <h4>TIME STUDY INTERN</h4>
                                <h4>GLATT SYSTEMS PUNE</h4>
                            </i>
                        </div>

                        <div className="box1">
                            <img src={shivraj} className="pic" alt="" />
                            {/* <div className="pic"> */}
                            <img src={logo8} className="company" alt="" />
                            {/* </div> */}
                            <i>
                                <span>SHIVRAJ PARLE</span>
                                <h4>LARSEN & TOUBRO</h4>
                            </i>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Internships;
