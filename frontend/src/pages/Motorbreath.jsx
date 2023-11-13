import { useRef, React } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/footer";

import "../stylesheets/Teams.css";

import motorbreath from "../assets/Teams/motorbreath.jpg";
import motorbg from "../assets/Teams/bgmotorbreath.jpg";

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

const MotorBreath = () => {
    return (
        <>
            <Navbar />

            {/* Motorbreath Team */}
            <section className="motorbreath">
                <div
                    className="motorbg"
                    style={{ backgroundImage: `url(${motorbg})` }}
                >
                    <div className="content">
                        <span className="heading">HEADS</span>
                        <div className="picsflex">
                            <div className="box">
                                <img src={mbvivek} alt="" />
                                <span>Vivek Wagadiya</span>
                                <span>
                                    <i>Captain</i>
                                </span>
                            </div>
                            <div className="box">
                                <img src={mbgrishma} alt="" />
                                <span>Grishma Balgi</span>
                                <span>
                                    <i>Vice - Captain</i>
                                </span>
                            </div>
                        </div>
                        <div className="picsflex">
                            <div className="box">
                                <img src={mbmanav} alt="" />
                                <span>Manav Yadav</span>
                                <span>
                                    <i>Treasurer</i>
                                </span>
                            </div>
                            <div className="box">
                                <img src={mbtaran} alt="" />
                                <span>Taran Poojari</span>
                                <span>
                                    <i>Sponsorship Head</i>
                                </span>
                            </div>
                        </div>

                        {/* Chassis members */}
                        <span className="heading">CHASSIS</span>
                        <div className="picsflex chassis margin_neg">
                            <div className="box">
                                <img src={mbtaran} alt="" />
                                <span>Taran Poojari</span>
                            </div>
                            <div className="box">
                                <img src={mbveer} alt="" />
                                <span>Veer Gupta</span>
                                <span>
                                    <i>Sector Head</i>
                                </span>
                            </div>
                            <div className="box">
                                <img src={mbkunal} alt="" />
                                <span>Kunal Dodani</span>
                            </div>
                        </div>
                        <div className="picsflex chassis">
                            <div className="box">
                                <img src={mbkartik} alt="" />
                                <span>Kartik Kedare</span>
                            </div>
                            <div className="box">
                                <img src={mbvivek} alt="" />
                                <span>Vivek Wagadiya</span>
                            </div>
                        </div>

                        {/* Vehicle dynamics members */}
                        <span className="heading">VEHICLE DYNAMICS</span>
                        <div className="picsflex chassis vd margin_neg">
                            <div className="box">
                                <img src={mbashwin} alt="" />
                                <span>Ashwin Dias</span>
                            </div>
                            <div className="box">
                                <img src={mbrahul} alt="" />
                                <span>Rahul Barbude</span>
                                <span>
                                    <i>Sector Head</i>
                                </span>
                            </div>
                            <div className="box">
                                <img src={mbrajvar} alt="" />
                                <span>Rajvardhan Sawant</span>
                            </div>
                        </div>
                        <div className="picsflex chassis vd">
                            <div className="box">
                                <img src={mbatharva} alt="" />
                                <span>Atharva Bagwe</span>
                            </div>
                            <div className="box">
                                <img src={mbkunalborole} alt="" />
                                <span>Kunal Borole</span>
                            </div>
                        </div>

                        {/* Power Transmission members */}
                        <span className="heading">POWER TRANSMISSON</span>
                        <div className="picsflex chassis powertrans ">
                            <div className="box">
                                <img src={mbmanav} alt="" />
                                <span>Manav Yadav</span>
                            </div>
                            <div className="box">
                                <img src={mbsahil} alt="" />
                                <span>Sahil Dhoble</span>
                                <span>
                                    <i>Sector Head</i>
                                </span>
                            </div>
                        </div>
                        <div className="picsflex chassis powertrans">
                            <div className="box">
                                <img src={mbdev} alt="" />
                                <span>Dev Ganatra</span>
                            </div>
                            <div className="box">
                                <img src={mbsakshi} alt="" />
                                <span>Sakshi Chorghe</span>
                            </div>
                            {/* <div className="box">
                                    <img src={mbtaran} alt="" />
                                    <span>Vishwesh Chauhan</span>
                                </div> */}
                        </div>

                        {/* Brakes members */}
                        <span className="heading">BRAKES</span>
                        <div className="picsflex chassis brakes">
                            {/* brake1 class used to give negative margin to box so that top and bottom flex mixes */}
                            <div className="box ">
                                <img src={mbshravani} alt="" />
                                <span>Shravani Deshpande</span>
                                <span>
                                    <i>Sector Head</i>
                                </span>
                            </div>
                            <div className="box ">
                                <img src={mbniel} alt="" />
                                <span>Niel James</span>
                            </div>
                        </div>
                        <div className="picsflex chassis brakes">
                            <div className="box">
                                <img src={mbomkar} alt="" />
                                <span>Omkar Ahir</span>
                            </div>
                            <div className="box">
                                <img src={mbgrishma} alt="" />
                                <span>Grishma Balgi</span>
                            </div>
                        </div>
                        {/* Electronics members */}
                        <span className="heading">ELECTRONICS</span>
                        <div className="picsflex chassis elecleft margin_neg">
                            <div className="box">
                                <img src={mbflavia} alt="" />
                                <span>Flavia Saldanha</span>
                            </div>
                            <div className="box">
                                <img src={mbashutosh} alt="" />
                                <span>Ashutosh Mohapatra</span>
                                <span>
                                    <i>Sector Head</i>
                                </span>
                            </div>
                        </div>
                        <div className="picsflex chassis elecright">
                            <div className="box">
                                <img src={mbanish} alt="" />
                                <span>Anish Dhar</span>
                            </div>
                            <div className="box">
                                <img src={mbjateen} alt="" />
                                <span>Jateen Telange</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="whiteline"></div>
            <Footer />
        </>
    );
};

export default MotorBreath;
