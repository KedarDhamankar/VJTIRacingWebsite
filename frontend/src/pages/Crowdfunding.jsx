/* eslint-disable no-unused-vars */
import { useRef, React,useEffect } from "react";

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
import bg from "../assets/Crowdfunding/bg.png";
import im1 from "../assets/Crowdfunding/mb.png";
import im2 from "../assets/Crowdfunding/forza.png";
import im3 from "../assets/Crowdfunding/car2.png";
import im4 from "../assets/Crowdfunding/car.png";
import qr from "../assets/Crowdfunding/scan.png";
import bg1 from "../assets/SponsorUs/3.png";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";

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

    const imgdata = useRef();
    window.onload = function hello(e) {
        e.preventDefault();
        let url =
            "https://script.google.com/macros/s/AKfycbzSX9ljLiSEefS9EswAUDpIhDDmC6B_2qDzwF3-ua_AeRQN0m41xUoPCUdNxso3utwXEA/exec";
        let file = document.getElementById("screenshot");
        let img = document.getElementById("screenshotimg");
        file.addEventListener("change", () => {
            let fr = new FileReader();
            fr.addEventListener("loadend", () => {
                let res = fr.result;
                img.src = res;
                let spt = res.split("base64,")[1];
                var obj = {
                    base64: spt,
                    type: file.files[0].type,
                    name: file.files[0].name,
                };
                imgdata.current = obj;
            });
            fr.readAsDataURL(file.files[0]);
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        const formEle = document.getElementById("forms");
        let formData = new FormData(formEle);
        var object = {};
        formData.forEach(function (value, key) {
            object[key] = value;
        });
        let requestBody = {
            imgdata: imgdata.current,
            dict: object,
        };

        let url =
            "https://script.google.com/macros/s/AKfycbzz5RtoPVqMwRso717bEhwIkxsGXlY5cIrvi1FusVcDD0zblgCwS9oRqgHt7PrQWgEqcQ/exec";
        fetch(url, {
            method: "POST",
            body: JSON.stringify(requestBody),
        })
            .then((r) => r.text())
            .then((data) => console.log(data));
    }


      useEffect(() => {
          var script = document.createElement("script");
          script.id = "ff-script";
          script.src =
              "https://formfacade.com/include/101806054270967856136/form/1FAIpQLSfwnp17hKgDvPMWoXwFq8KPxioiZP8IxlK0UYrab52e1SZeIQ/classic.js?div=ff-compose";
          script.defer = true;
          script.async = true;
          document.body.appendChild(script);
      }, []);





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
                        {/* <div className="darkenimage"></div> */}
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
                                <span>TOTAL : 15,50,000 </span>
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

            {/* section 3 form for sponsors */}
            <div
                className="crowdform"
                style={{ backgroundImage: `url(${bg1})` }}
            >
                <div className="formy">
                    {/* <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSd3xGqYKBTmo3JRII7-MxLxzbHu09evk6yqqLp3gh8k0llWyA/viewform?embedded=true"
                        className="new"
                    >
                        Loading…
                    </iframe> */}

                    {/* <div className="title">
                        <span>
                            THANK YOU FOR BEING A PART OF VJTI RACING'S
                            CROWDFUNDING CAMPAIGN!
                        </span>
                    </div>
                    <form
                        className="fform"
                        onSubmit={(e) => handleSubmit(e)}
                        id="forms"
                    >
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
                            <input
                                name="Number"
                                type="tel"
                                required
                                pattern="[0-9]{10}"
                            />
                        </div>

                        <div>
                            <label>Amount</label>
                            <br />
                            <input name="Amount" type="text" />
                        </div>
                        <div>
                            <label>Mode of Payment</label>
                            <br />
                            <select name="Mode">
                                <option value="Paytm">Paytm</option>
                                <option value="GooglePay">Google Pay</option>
                                <option value="BankTransfer">
                                    Bank Transfer
                                </option>
                                <option value="Cash">Cash</option>
                            </select>
                        </div>
                        <div>
                            <label>
                                Name of Point of Contact In VJTI Racing
                            </label>
                            <br />
                            <input name="POC" type="text" />
                        </div>
                        <div>
                            <label>T-Shirt size</label>
                            <br />
                            <select name="Tshirt">
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
                    </form> */}

                    <div id="ff-compose"></div>
                </div>
            </div>

            <section>
                <Footer />
            </section>
        </>
    );
};

export default Crowdfunding;
