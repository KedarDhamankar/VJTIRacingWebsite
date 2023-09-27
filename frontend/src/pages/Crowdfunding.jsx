/* eslint-disable no-unused-vars */
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, Label,LabelList } from "recharts";
import "../stylesheets/Crowdfunding.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import bg from "../assets/Crowdfunding/bg.jpg";
import im1 from "../assets/Crowdfunding/mb.png";
import im2 from "../assets/Crowdfunding/forza.png";
import im3 from "../assets/Crowdfunding/car.jpg";
import qr from "../assets/Crowdfunding/scan.png";
import bg1 from "../assets/SponsorUs/3.png";

const Crowdfunding = () => {
    const data01 = [
        { name: "Registration", value: 100000 },
        { name: "Raw material", value: 300000 },
        { name: "Research & Development", value: 150000 },
        { name: "Electronics", value: 400000 },
        { name: "Logistics", value: 200000 },
        { name: "Manufacturing", value: 400000 }
    ];
    const data02 = [
        { name: "Administrative fees", value: 60000 },
        { name: "Raw material & OEM", value: 100000 },
        { name: "Tyres & Driver Equipment", value: 35000 },
        { name: "Battery,Motor & Controller", value: 50000 },
        { name: "Manufacturing", value: 40000 },
        { name: "Logistics", value: 115000 }
    ];
    const COLORS = [
        "#8884d8",
        "#82ca9d",
        "#FFBB28",
        "#FF8042",
        "#AF19FF",
        "#249ea0",
    ];
    
    return (
        <>
            <section>
                <title>Crowdfunding</title>
                <Navbar />
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
                    <div
                        className="bg"
                        style={{ backgroundImage: `url(${bg1})` }}
                    >
                        <div className="floater">
                            <img src={im1} alt="" />
                            <div className="cont">
                                <span className="header">TEAM MOTORBREATH</span>

                                <div className="des">
                                    <p>
                                        With a legacy of successfully competing
                                        in BAJA SAEINDIA competitions. Team
                                        Motorbreath is here for e-BAJA 2024.
                                        With a shared vision to design and
                                        fabricate our own electric ATV, we hope
                                        you tag along for our journey
                                    </p>
                                </div>
                                <div className="button">
                                    <button>Click here to sponsor us</button>
                                </div>
                            </div>
                        </div>

                        <div className="floater">
                            <img src={im2} alt="" />
                            <div className="cont">
                                <span className="header">TEAM FORZAVJTI</span>

                                <div className="des">
                                    <p>
                                        With a vision for expansion, we present
                                        to you Team ForzaVJTI, a new initiative
                                        by a group of highly motivated second
                                        year undergraduates. With a shared
                                        vision to manufacture our own EV Go-Kart
                                        and participate in IKR 2024, join us on
                                        our way to achieve our goal.
                                    </p>
                                </div>
                                <div className="button">
                                    <button>Click here to sponsor us</button>
                                </div>
                            </div>
                        </div>
                        {/* section 3 form for sponsors */}
                        <div
                            className="crowdform"
                            style={{ backgroundImage: `url(${bg1})` }}
                        >
                            <div className="formy">
                                <div className="title">
                                    <span>
                                        THANK YOU FOR BEING A PART OF VJTI
                                        RACING'S CROWDFUNDING CAMPAIGN!{" "}
                                    </span>
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
                                        <input
                                            name="Contact Number"
                                            type="text"
                                        />
                                    </div>
                                    <div>
                                        <label>
                                            Team you would like to support
                                        </label>
                                        <br />
                                        <select>
                                            <option value="Motorbreath">
                                                Team Motorbreath 2024
                                            </option>
                                            <option value="ForzaVJTI">
                                                Team ForzaVJTI 2024
                                            </option>
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
                                        <select>
                                            <option value="paytm">Paytm</option>
                                            <option value="googlepay">
                                                Google Pay
                                            </option>
                                            <option value="banktransfer">
                                                Bank Transfer
                                            </option>
                                            <option value="cash">Cash</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>
                                            Name of Point of Contact In VJTI
                                            Racing
                                        </label>
                                        <br />
                                        <input name="POC name" type="text" />
                                    </div>
                                    <div>
                                        <label>T-Shirt size</label>
                                        <br />
                                        <select>
                                            <option value="XS">XS</option>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                            <option value="XL">XL</option>
                                            <option value="XXL">XXL</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>Screenshot of payment</label>
                                        <br />
                                        <div className="scan">
                                            <span>SCAN AND PAY </span>
                                            <img src={qr} alt="" />
                                            <span>
                                                UPI ID : SAEINDIAVJTI@SBI
                                            </span>
                                            <span>OR</span>
                                            <span>Bank Transfer:</span>
                                            <span>
                                                Name : SAEINDIA VEERMATA JIJABAI
                                                TECHNOLOGICAL INSTITUTE
                                            </span>
                                            <span>
                                                Account Number : 30678373626
                                            </span>
                                            <span>IFSC Code : SBIN0011075</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* section 4 tiers */}
                    <div
                        className="tiers"
                        style={{ backgroundImage: `url(${bg1})` }}
                    >
                        <span className="ok">TIERS</span>
                        <div className="all">
                            <div className="tier">
                                <div className="before">
                                    <span>QUARTZ</span>
                                    <br />
                                    <span>&#60; &#8377;500</span>
                                </div>
                                <div className="after">
                                    <ul>
                                        <li>DIGITAL CERTIFICATE</li>
                                        <li>DIGITAL POSTER</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tier">
                                <div className="before">
                                    <span>PEARL</span>
                                    <br />
                                    <span>&#8377;500&#43;</span>
                                </div>
                                <div className="after">
                                    <ul>
                                        <li>STICKER</li>
                                        <li>CERTIFICATE OF GRATITUDE</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tier">
                                <div className="before">
                                    <span>TOPAZ</span>
                                    <br />
                                    <span>&#8377;1000&#43;</span>
                                </div>
                                <div className="after">
                                    <ul>
                                        <li>STICKER</li>
                                        <li>CERTIFICATE OF GRATITUDE</li>
                                        <li>POSTER</li>
                                        <li>WRIST BAND</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tier">
                                <div className="before">
                                    <span>SAPPHIRE</span>
                                    <br />
                                    <span>&#8377;2000&#43;</span>
                                </div>
                                <div className="after">
                                    <ul>
                                        <li>STICKER</li>
                                        <li>CERTIFICATE OF GRATITUDE</li>
                                        <li>POSTER</li>
                                        <li>WRIST BAND</li>
                                        <li>CAP</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tier">
                                <div className="before">
                                    <span>EMERALD</span>
                                    <br />
                                    <span>&#8377;5000&#43;</span>
                                </div>
                                <div className="after">
                                    <ul>
                                        <li>STICKER</li>
                                        <li>CERTIFICATE OF GRATITUDE</li>
                                        <li>POSTER</li>
                                        <li>WRIST BAND</li>
                                        <li>CAP</li>
                                        <li>VJTI RACING T-SHIRT</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tier">
                                <div className="before">
                                    <span>RUBY</span>
                                    <br />
                                    <span>&#8377;10000&#43;</span>
                                </div>
                                <div className="after">
                                    <ul>
                                        <li>STICKER</li>
                                        <li>CERTIFICATE OF GRATITUDE</li>
                                        <li>POSTER</li>
                                        <li>WRIST BAND & CAP</li>
                                        <li>VJTI RACING T-SHIRT</li>
                                        <li>
                                            EXCULSIVE ENTRY TO ALL CLUB EVENTS
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tier">
                                <div className="before">
                                    <span>DIAMOND</span>
                                    <br />
                                    <span>&#8377;20000&#43;</span>
                                </div>

                                <div className="after">
                                    <ul>
                                        <li>STICKER & CAP</li>
                                        <li>CERTIFICATE OF GRATITUDE</li>
                                        <li>POSTER</li>
                                        <li>WRIST BAND</li>
                                        <li>VJTI RACING T-SHIRT</li>
                                        <li>
                                            EXCULSIVE ENTRY TO ALL CLUB EVENTS
                                        </li>
                                        <li>SPECIAL MENTION ON WEBSITE</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* section 5 budget breakup */}
                    <div
                        className="budget"
                        style={{ backgroundImage: `url(${bg1})` }}
                    >
                        <div className="txt">
                            <span>BUDGET BREAKUP</span>
                        </div>

                        <div className="breakup-1">
                            <div className="photo-1">
                                <img src={im1} alt="" className="image-1" />
                                <img src={im3} alt="" className="image-2" />
                            </div>

                            <div className="chart-1">
                                <div className="pie-1">
                                    <PieChart width={700} height={500}>
                                        <Legend width={700} align="center" />
                                        <Pie
                                            data={data01}
                                            cx="50%"
                                            cy="50%"
                                            dataKey="value"
                                            nameKey="name"
                                            labelLine={false}
                                            label
                                            outerRadius={140}
                                            fill="#8884d8"
                                        >
                                            <LabelList
                                                dataKey="name"
                                                position={"outside"}
                                                angle="-45"
                                                offset={40}
                                                fill="#8884d8"
                                            />
                                            {data01.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={
                                                        COLORS[
                                                            index %
                                                                COLORS.length
                                                        ]
                                                    }
                                                />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </div>

                                <div className="total">
                                    <span>TOTAL : 15,50,00</span>
                                </div>
                            </div>
                        </div>

                        <div className="breakup-1">
                            <div className="chart-1">
                                <div className="pie-1">
                                    <PieChart width={500} height={500}>
                                        <Legend width={500} align="center" />
                                        <Pie
                                            data={data02}
                                            cx="50%"
                                            cy="50%"
                                            dataKey="value"
                                            nameKey="name"
                                            labelLine={false}
                                            label
                                            outerRadius={140}
                                            fill="#8884d8"
                                        >
                                            {data02.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={
                                                        COLORS[
                                                            index %
                                                                COLORS.length
                                                        ]
                                                    }
                                                />
                                            ))}
                                            {/* {data.map((name, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                label={data[index % data.name]}
                                            ></Cell>
                                        ))} */}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </div>
                                <div className="total">
                                    <span>TOTAL : 4,00,000</span>
                                </div>
                            </div>

                            <div className="photo-1">
                                <img src={im2} alt="" className="image-1" />
                                <img src={im3} alt="" className="image-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <Footer />
            </section>
        </>
    );
};

export default Crowdfunding;
