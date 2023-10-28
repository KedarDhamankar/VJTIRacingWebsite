/* eslint-disable no-unused-vars */
import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    Label,
    LabelList,
    ResponsiveContainer,
} from "recharts";
import "../stylesheets/Crowdfunding.css";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import bg from "../assets/Crowdfunding/bg.jpg";
import im1 from "../assets/Crowdfunding/mb.png";
import im2 from "../assets/Crowdfunding/forza.png";
import im3 from "../assets/Crowdfunding/car2.png";
import im4 from "../assets/Crowdfunding/car.png";
import qr from "../assets/Crowdfunding/scan.png";
import bg1 from "../assets/SponsorUs/3.png";
import { useNavigate } from "react-router-dom";

const Crowdfunding = () => {
    const navigate = useNavigate();
    const navigateToSpons = () => {
        navigate("/SponsorUs");
    };

    const data01 = [
        { name: "Registration", value: 100000 },
        { name: "Raw material", value: 300000 },
        { name: "Research & Development", value: 150000 },
        { name: "Electronics", value: 400000 },
        { name: "Logistics", value: 200000 },
        { name: "Manufacturing", value: 400000 },
    ];
    const data02 = [
        { name: "Administrative fees", value: 60000 },
        { name: "Raw material & OEM", value: 100000 },
        { name: "Tyres & Driver Equipment", value: 35000 },
        { name: "Battery,Motor & Controller", value: 50000 },
        { name: "Manufacturing", value: 40000 },
        { name: "Logistics", value: 115000 },
    ];
    const COLORS = [
        "#d85c18",
        "#f78104",
        "#f6a631",
        "#249ea0",
        "#008083",
        "#005f60",
    ];
    // function Submit(e) {
    //     const formEle = document.querySelector("fform");
    //     e.preventDefault();
    //     console.log("Submitted");
    //     const formData = new FormData(formEle);
    //     fetch(
    //         "https://script.google.com/macros/s/AKfycbw0JLrg5F2C7zfzH34D10cNR1SdqdadVTdWOzrAVs9eoMWvNZZwO_84ZQ_qE9Hez-PW/exec",
    //         { method: "POST", body: formData }
    //     );
    // }

    window.onload = function () {
        e.preventDefault();
        // This line declares a variable called "url" and assigns it a value of "Api_Endpoint_Url"
        let url =
            "https://script.google.com/macros/s/AKfycbw9K6g5jHbFjbKwN4Y51o60AQPkaUjf35hWQIqe-u2cYVq1J-WyxGnIL4CGhy3df7nUjw/exec";
        // This line declares a variable called "file" and assigns it the value of the first input element on the page
        let file = document.getElementById("screenshot");
        // This line declares a variable called "img" and assigns it the value of the first image element on the page
        let img = document.getElementById("screenshotimg");

        // This line adds an event listener to the "change" event of the "file" input element
        file.addEventListener("change", () => {
            // e.preventDefault();
            // This line creates a new FileReader object called "fr"
            let fr = new FileReader();
            // This line adds an event listener to the "loadend" event of the FileReader object
            fr.addEventListener("loadend", () => {
                // This line declares a variable called "res" and assigns it the result of the FileReader object
                let res = fr.result;
                // This line sets the "src" attribute of the "img" element to the value of "res"
                img.src = res;
                // This line splits the "res" variable into an array, using the string "base64," as the separator, and assigns the second element to a variable called "spt"
                let spt = res.split("base64,")[1];
                // This line creates an object called "obj" with three properties: "base64", "type", and "name"
                let obj = {
                    base64: spt,
                    type: file.files[0].type,
                    name: file.files[0].name,
                };
                // This line sends a POST request to the URL specified in the "url" variable, with the "obj" object as the request body
                fetch(url, {
                    method: "POST",
                    body: JSON.stringify(obj),
                })
                    // This line waits for the response from the server and converts it to text
                    .then((r) => r.text())
                    // This line logs the response data to the console
                    .then((data) => console.log(data));
            });
            // This line reads the selected file as a data URL
            fr.readAsDataURL(file.files[0]);
        });
    };

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
                        <span>CROWDFUNDING</span>
                    </div>
                </div>
                {/* section 4 tiers */}
                <div
                    className="tiers"
                    style={{
                        backgroundImage: `url(${bg1})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
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
                                    <li>BADGE</li>
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
                                    <li>BADGE</li>
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
                                    <li>EXCULSIVE ENTRY TO ALL CLUB EVENTS</li>
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
                                    <li>STICKER & BADGE</li>
                                    <li>CERTIFICATE OF GRATITUDE</li>
                                    <li>POSTER</li>
                                    <li>WRIST BAND</li>
                                    <li>VJTI RACING T-SHIRT</li>
                                    <li>EXCULSIVE ENTRY TO ALL CLUB EVENTS</li>
                                    <li>SPECIAL MENTION ON WEBSITE</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="desktop">
                {/* section 5 budget breakup  */}
                <div
                    className="budget"
                    style={{
                        backgroundImage: `url(${bg1})`,
                        backgroundSize: "cover",
                    }}
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
                                <PieChart width={500} height={500}>
                                    <Legend width={500} align="center" />
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
                                        {data01.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={
                                                    COLORS[
                                                        index % COLORS.length
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
                                                        index % COLORS.length
                                                    ]
                                                }
                                            />
                                        ))}
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
                            <img src={im4} alt="" className="image-2" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mobile">
                <div
                    className="budget"
                    style={{
                        backgroundImage: `url(${bg1})`,
                        backgroundSize: "cover",
                    }}
                >
                    <div className="txt-2">
                        <span>BUDGET BREAKUP</span>
                    </div>
                    <div className="breakup-2">
                        <div className="photo-2">
                            <img src={im1} alt="" className="image-1" />
                            <img src={im3} alt="" className="image-2" />
                        </div>

                        <div className="chart-2">
                            <div className="pie-2">
                                <PieChart width={400} height={400}>
                                    <Legend
                                        width={400}
                                        align="center"
                                        iconSize={10}
                                    />
                                    <Pie
                                        data={data01}
                                        cx="50%"
                                        cy="50%"
                                        dataKey="value"
                                        nameKey="name"
                                        labelLine={false}
                                        label
                                        outerRadius={90}
                                        fill="#8884d8"
                                    >
                                        {data01.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={
                                                    COLORS[
                                                        index % COLORS.length
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

                    <div className="breakup-2">
                        <div className="chart-2">
                            <div className="photo-2">
                                <img src={im4} alt="" className="image-2" />
                                <img src={im2} alt="" className="image-1" />
                            </div>
                            <div className="pie-2">
                                <PieChart width={400} height={400}>
                                    <Legend width={400} align="center" />
                                    <Pie
                                        data={data02}
                                        cx="50%"
                                        cy="50%"
                                        dataKey="value"
                                        nameKey="name"
                                        labelLine={false}
                                        label
                                        outerRadius={90}
                                        fill="#8884d8"
                                    >
                                        {data02.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={
                                                    COLORS[
                                                        index % COLORS.length
                                                    ]
                                                }
                                            />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </div>
                            <div className="total">
                                <span>TOTAL : 4,00,000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* section2 sponsor */}
            {/* <div className="bg" style={{ backgroundImage: `url(${bg1})`,backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
                <div className="floater">
                    <img src={im1} alt="" />
                    <div className="cont">
                        <span className="header">TEAM MOTORBREATH</span>

                        <div className="des">
                            <p>
                                With a legacy of successfully competing in BAJA
                                SAEINDIA competitions. Team Motorbreath is here
                                for e-BAJA 2024. With a shared vision to design
                                and fabricate our own electric ATV, we hope you
                                tag along for our journey
                            </p>
                        </div>
                        <div className="button">
                            {/* <button onClick={navigateToSpons}>
                                Click here to sponsor us
                            </button> 
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="floater">
                    <img src={im2} alt="" />
                    <div className="cont">
                        <span className="header">TEAM FORZAVJTI</span>

                        <div className="des">
                            <p>
                                With a vision for expansion, we present to you
                                Team ForzaVJTI, a new initiative by a group of
                                highly motivated second year undergraduates.
                                With a shared vision to manufacture our own EV
                                Go-Kart and participate in IKR 2024, join us on
                                our way to achieve our goal.
                            </p>
                        </div>
                        <div className="button">
                            <button onClick={navigateToSpons}>
                                Click here to sponsor us
                            </button>
                        </div>
                    </div>
                </div> */}
            {/* section 3 form for sponsors */}
            <div
                className="crowdform"
                style={{ backgroundImage: `url(${bg1})` }}
            >
                <div className="formy">
                    <div className="title">
                        <span>
                            THANK YOU FOR BEING A PART OF VJTI RACING'S
                            CROWDFUNDING CAMPAIGN!
                        </span>
                    </div>
                    <form className="fform" onSubmit={(e) => handleSubmit(e)}>
                        <div>
                            <label>Email</label>
                            <br />
                            <input name="Email" type="email" required />
                        </div>
                        <div>
                            <label>Full Name</label>
                            <br />
                            <input name="Name" type="text" required />
                        </div>
                        <div>
                            <label>Address</label>
                            <br />
                            <input name="Address" type="text" required />
                        </div>
                        <div>
                            <label>Contact Number</label>
                            <br />
                            <input name="ContactNumber" type="text" required />
                        </div>
                        {/* <div>
                                <label>Team you would like to support</label>
                                <br />
                                <select name="Team">
                                    <option value="Motorbreath">
                                        Team Motorbreath 2024
                                    </option>
                                    <option value="ForzaVJTI">
                                        Team ForzaVJTI 2024
                                    </option>
                                </select>
                            </div> */}
                        <div>
                            <label>Amount</label>
                            <br />
                            <input name="Amount" type="text" />
                        </div>
                        <div>
                            <label>Mode of Payment</label>
                            <br />
                            <select name="Mode">
                                <option value="paytm">Paytm</option>
                                <option value="googlepay">Google Pay</option>
                                <option value="banktransfer">
                                    Bank Transfer
                                </option>
                                <option value="cash">Cash</option>
                            </select>
                        </div>
                        <div>
                            <label>
                                Name of Point of Contact In VJTI Racing
                            </label>
                            <br />
                            <input name="POCname" type="text" />
                        </div>
                        <div>
                            <label>T-Shirt size</label>
                            <br />
                            <select name="ShirtSize">
                                <option value="XS" name="XS">
                                    XS
                                </option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                                <option value="XXL">XXL</option>
                            </select>
                        </div>
                        <div>
                            <label>SCREENSHOT OF PAYMENT</label>
                            <br />
                            <div className="scan">
                                <span>SCAN AND PAY </span>
                                <img src={qr} alt="" />
                                <span>UPI ID : SAEINDIAVJTI@SBI</span>
                                <span>OR</span>
                                <span>Bank Transfer:</span>
                                <span>
                                    Name : SAEINDIA VEERMATA JIJABAI
                                    TECHNOLOGICAL INSTITUTE
                                </span>
                                <span>Account Number : 30678373626</span>
                                <span>IFSC Code : SBIN0011075</span>
                            </div>
                        </div>
                        <div>
                            <label>Upload a file:</label>
                            <br />
                            <input
                                type="file"
                                id="screenshot"
                                name="Screenshot"
                                required
                            ></input>
                            <img src="" alt="" id="screenshotimg" />
                        </div>
                        <div>
                            <center>
                                <input type="submit" className="submit" />
                            </center>
                        </div>
                    </form>
                </div>
            </div>

            <section>
                <Footer />
            </section>
        </>
    );
};

export default Crowdfunding;
