/* eslint-disable no-unused-vars */
// import React from "react";
import { useRef, React } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import "../stylesheets/Teams.css";

import motorbreath from "../assets/Teams/motorbreath.jpg";
import forza from "../assets/Teams/forza.jpg";
import motorbg from "../assets/Teams/bgmotorbreath.jpg";
import forzabg from "../assets/Teams/bgforza.jpg";
// import sen1 from "../assets/Teams/Senate/sen1.jpg";
// import sen2 from "../assets/Teams/Senate/sen2.jpg";
// import sen3 from "../assets/Teams/Senate/sen3.jpg";

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
import mbkunalborole from "../assets/Teams/Motorbreath/Kunal.png";
// Power Trans
import mbsahil from "../assets/Teams/Motorbreath/sahil_dhoble.jpg";
import mbdev from "../assets/Teams/Motorbreath/dev ganatra.jpg";
import mbsakshi from "../assets/Teams/Motorbreath/sakshi chorghe.jpg";
// import mbvishwesh from "../assets/Teams/Motorbreath/vishwesh chauhan.jpg";
// Brakes
import mbshravani from "../assets/Teams/Motorbreath/shravani deshpande.jpg";
import mbniel from "../assets/Teams/Motorbreath/niel james.jpeg";
import mbomkar from "../assets/Teams/Motorbreath/omkar ahir.jpg";
// Electronics
import mbflavia from "../assets/Teams/Motorbreath/flavia saldanha.jpg";
import mbashutosh from "../assets/Teams/Motorbreath/ashutosh mohapatra.jpg";
import mbanish from "../assets/Teams/Motorbreath/anish dhar.jpg";
import mbdhruv from "../assets/Teams/Motorbreath/dhruv chugh.jpg";
import mbjateen from "../assets/Teams/Motorbreath/jateen telange.jpeg";

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
import fzkartik from "../assets/Teams/Forza/kartik mahalle.jpg";
import fzneil from "../assets/Teams/Forza/niel.png";

// Electronics
import fzharsh from "../assets/Teams/Forza/harsh deosthali.jpeg";
import fzgauravp from "../assets/Teams/Forza/gaurav patil.jpg";
import fzanish from "../assets/Teams/Forza/anish dhar.jpg";
import fzaditi from "../assets/Teams/Forza/aditi shinde.jpg";

const Teams = () => {
    const navigate = useNavigate();
    const navigateToForza = () => {
        navigate("/Forza");
    };
    const navigateToMotor = () => {
        navigate("/Motorbreath");
    };

    return (
        <>
            <title>Teams</title>
            <Navbar />

            {/* Senate Section */}
            <div className="teams">
                {/* <section className="senate">
                    <span className="heading">CLUB SENATE</span>

                    
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
                </section> */}

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
                            <button onClick={navigateToMotor}>Know More</button>
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
                            <button onClick={navigateToForza}>Know More</button>
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
