/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "../stylesheets/Media.css";
import bg1 from "../assets/SponsorUs/3.png";
import i1 from "../assets/Media/i1.png";
import i2 from "../assets/Media/i2.png";
import i3 from "../assets/Media/i3.png";
import i4 from "../assets/Media/i4.png";
import i5 from "../assets/Media/i5.png";
import i6 from "../assets/Media/i6.png";
import i7 from "../assets/Media/i7.png";
import i8 from "../assets/Media/i8.png";
import i9 from "../assets/Media/i9.png";
import i10 from "../assets/Media/i10.png";
import i11 from "../assets/Media/i11.png";
import i12 from "../assets/Media/i12.png";
import i13 from "../assets/Media/i13.png";
import i14 from "../assets/Media/i14.png";
import i15 from "../assets/Media/i15.png";
import i16 from "../assets/Media/i16.png";
import i17 from "../assets/Media/i17.png";
import i18 from "../assets/Media/i18.png";
import i19 from "../assets/Media/i19.png";
import i20 from "../assets/Media/i20.png";
import i21 from "../assets/Media/i21.png";

const Media = () => {
    return (
        <>
            <section>
                <title>Media</title>
                <Navbar />
            </section>
            <section>
                <div
                    className="backgnd"
                    style={{
                        backgroundImage: `url(${bg1})`,
                        backgroundRepeat: "repeat-x",
                    }}
                >
                    {/* <img src={bg} alt="" />  */}
                    <div className="darkenimage"></div>
                    <span className="head">MEDIA</span>
                </div>
                <div
                    className="mediaimg"
                    style={{ backgroundImage: `url(${bg1})` }}
                >
                    <img src={i1} alt="" />
                    <img src={i2} alt="" />
                    <img src={i13} alt="" />
                    <img src={i4} alt="" />
                    <img src={i14} alt="" />
                    <img src={i15} alt="" />
                    <img src={i3} alt="" />
                    <img src={i5} alt="" />
                    <img src={i6} alt="" />
                    <img src={i8} alt="" />
                    <img src={i9} alt="" />
                    <img src={i10} alt="" />
                    <img src={i11} alt="" />
                    <img src={i12} alt="" />
                    <img src={i16} alt="" />
                    <img src={i17} alt="" />
                    <img src={i7} alt="" />
                    <img src={i18} alt="" />
                    <img src={i20} alt="" />
                    <img src={i19} alt="" />
                    <img src={i21} alt="" />
                </div>
            </section>
            {/* <section>
                <div className="foot">
                    <Footer style={{zIndex:20}} />
                </div>
            </section> */}
            {/* <div style={{ zIndex: 99, position: "absolute" }}> */}
            <Footer />
            {/* </div> */}
        </>
    );
};

export default Media;
