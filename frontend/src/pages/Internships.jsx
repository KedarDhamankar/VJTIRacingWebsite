import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import "../stylesheets/Internships.css";

import motorbreath from "../assets/Teams/motorbreath.jpg";
import rohan from "../assets/Internships/Rohan Adkhale.jpg";

const Internships = () => {
    return (
        <>
            <title>Internships</title>
            <Navbar />

            <section className="internshipsbg">
                <img src={motorbreath} alt="" />
                <span>INTERNSHIPS</span>
            </section>

            {/* <div className="whiteline"></div> */}

            <section
                className="CSIR"
                style={{ backgroundImage: `url(${motorbreath})` }}
            >
                <div className="pics">
                    <div className="box1">
                        <img src={rohan} alt="" />
                        <span>ROHAN ADKHALE</span>
                    </div>
                    <div className="box1">
                        <img src={rohan} alt="" />
                        <span>JATIN BARANWAL</span>
                    </div>
                    <div className="box1">
                        <img src={rohan} alt="" />
                        <span>HARSH KUBADIA</span>
                    </div>
                    <div className="box1">
                        <img src={rohan} alt="" />
                        <span>RITESH JAGTAP</span>
                    </div>
                    <div className="box1">
                        <img src={rohan} alt="" />
                        <span>ATHARVA BHOSALE</span>
                    </div>
                </div>
            </section>

            <section
                className="BARC"
                style={{ backgroundImage: `url(${motorbreath})` }}
            >
                <div className="pics">
                    <div className="box1">
                        <img src={rohan} alt="" />
                        <span>CHAITANYA DESHPANDE</span>
                    </div>

                    <div className="box1">
                        <img src={rohan} alt="" />
                        <span>KRISH SHAH</span>
                    </div>
                    <div className="box1">
                        <img src={rohan} alt="" />
                        <span>SHIVAM SHINDE</span>
                    </div>
                </div>
            </section>

            <section
                className="mitacs"
                style={{ backgroundImage: `url(${motorbreath})` }}
            >
                <div className="whitediv">
                    <span>
                        <i>RESEARCH INTERNS</i>
                    </span>
                    <div className="pics">
                        <div className="box1">
                            <img src={rohan} alt="" />
                            <span>SIDDHARTH SANKHE</span>
                            <h4>
                                <i>
                                    RIYA Program Gear Train lab, Ohio State
                                    University
                                </i>
                            </h4>
                        </div>

                        <div className="box1">
                            <img src={rohan} alt="" />
                            <span>KARTIKA SHARMA</span>
                            <h4>
                                <i>MITACS - DALHOUSIE UNIVERSITY, CANADA</i>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="mitacs2"
                style={{ backgroundImage: `url(${motorbreath})` }}
            >
                <div className="whitediv">
                    {/* <span>
                        <i>RESEARCH INTERNS</i>
                    </span> */}
                    <div className="pics">
                        <div className="box1">
                            <img src={rohan} alt="" />
                            <i>
                                <span>SHRADDHA BEDRE</span>
                                <h4>CROMPTON GREAVES</h4>
                                <h4>IOT INTERN</h4>
                            </i>
                        </div>

                        <div className="box1">
                            <img src={rohan} alt="" />
                            <i>
                                <span>CHANDRASHEKHAR JADHAV</span>
                                <h4>INDIAN RAILWAYS</h4>
                            </i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Internships;
