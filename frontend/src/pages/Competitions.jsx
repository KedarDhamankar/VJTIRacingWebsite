/* eslint-disable no-unused-vars */
import React from 'react';
import {useRef} from "react";
import Navbar from "../components/Navbar";
import Block from "../components/block";
import Footer from "../components/footer";
import bckgd from "../assets/Home/bckgd.jpg";
import "../stylesheets/Competitions.css";

//images 
import c1 from "../assets/Competitions/car2.png";
import c2 from "../assets/Competitions/mb23.png";
import c3 from "../assets/Competitions/forza23.png";
import c4 from "../assets/Competitions/mb22.png";
import c5 from "../assets/Competitions/mb21.png";
import c6 from "../assets/Competitions/mb20.png";
import c7 from "../assets/Competitions/mb19.png";
import c8 from "../assets/Competitions/mb18.png";
import c9 from "../assets/Competitions/mb17.png";
import c10 from "../assets/Competitions/mb16.png";
import c11 from "../assets/Competitions/esvc16.png";
import c12 from "../assets/Competitions/mb16.png";
import c13 from "../assets/Competitions/DSC_15.png";
import c14 from "../assets/Competitions/mb14.png";
import c15 from "../assets/Competitions/supra14.png";
import c16 from "../assets/Competitions/baja12.png";

//variables
const comp1 = {
year:"2024",
title:"TEAM MOTORBREATH",
subheading:"e-BAJA 2024",
img: c1,
}
const comp2 = {
year:"2023",
title:"TEAM MOTORBREATH",
subheading:"e-BAJA 2023",
img: c2,
}
const comp3 = {
year:"2023",
title:"TEAM FORZA",
subheading:"IKR 2023",
img: c3,
}
const comp4 = {
year:"2022",
title:"TEAM MOTORBREATH",
subheading:"e-BAJA 2022",
img: c4,
}
const comp5 = {
year:"2021",
title:"TEAM MOTORBREATH",
subheading:"m-BAJA 2021",
img: c5,
}
const comp6 = {
year:"2020",
title:"TEAM MOTORBREATH",
subheading:"m-BAJA 2020",
img: c6,
}
const comp7 = {
year:"2019",
title:"TEAM MOTORBREATH",
subheading:"m-BAJA 2019",
img: c7,
}
const comp8 = {
year:"2018",
title:"TEAM MOTORBREATH",
subheading:"m-BAJA 2018",
img: c8,
}
const comp9 = {
year:"2017",
title:"TEAM MOTORBREATH",
subheading:"m-BAJA 2017",
img: c9,
}
const comp10 = {
year:"2016",
title:"TEAM MOTORBREATH",
subheading:"m-BAJA 2016",
img: c10,
}
const comp11 = {
year:"2016",
title:"TEAM MOTORBREATH",
subheading:"ESVC 2016",
img: c11,
}
const comp12 = {
year:"2015",
title:"TEAM MOTORBREATH",
subheading:"m-BAJA 2015 (SOUTH AFRICA)",
img: c12,
}
const comp13 = {
year:"2015",
title:"TEAM MOTORBREATH",
subheading:"ECO-KART 2015",
img: c13,
}
const comp14 = {
year:"2014",
title:"TEAM MOTORBREATH",
subheading:"m-BAJA 2014",
img: c14,
}
const comp15 = {
year:"2014",
title:"TEAM MOTORBREATH",
subheading:"SUPRA 2014",
img: c15,
}
const comp16 = {
year:"2012",
title:"TEAM MOTORBREATH",
subheading:"m-BAJA 2014",
img: c16,
}

const Competitions = () => {
    const ref = useRef(null);

	// const handleClick = () => {
	// 	ref.current?.scrollIntoView({ behavior: "smooth" });
	// };

  return (
      <>
          <title>Competitions</title>
          <Navbar />

          <div className="comp">
              {/* Section 1 heading competitions */}
              <section>
                  <div className="bgimg">
                      <img src={bckgd} alt="" />
                      <div className="darkenimage"></div>
                      <span className="head">COMPETITIONS</span>
                  </div>
              </section>

              {/* Section 2 cards */}
              <section>
                  <div ref={ref} className="sec2">
                      <Block
                          year={comp1.year}
                          img={comp1.img}
                          title={comp1.title}
                          subheading={comp1.subheading}
                      >
                          <p>• A rugged electric all-terrain vehicle with an
                              RWD powertrain, to participate in ATVC 2024 and
                              eBAJA SAEINDIA 2024
                          </p>
                      </Block>
                      <Block
                          year={comp2.year}
                          img={comp2.img}
                          title={comp2.title}
                          subheading={comp2.subheading}
                      >
                          <p>• AIR 18</p>
                          <p>• 2nd in innovation</p>
                          <center>
                              <h2>ATVC 2023</h2>
                          </center>
                          <p>• 1st in design round</p>
                      </Block>
                      <Block
                          year={comp3.year}
                          img={comp3.img}
                          title={comp3.title}
                          subheading={comp3.subheading}
                      >
                          <p>
                            • A sleek and speedy electric go-kart, to
                              participate in ISIE IKR 2023
                          </p>
                      </Block>
                      <Block
                          year={comp4.year}
                          img={comp4.img}
                          title={comp4.title}
                          subheading={comp4.subheading}
                      >
                          <p>• AIR 4 in virtual round</p>
                          <p>• Best AWD Award</p>
                      </Block>
                      <Block
                          year={comp5.year}
                          img={comp5.img}
                          title={comp5.title}
                          subheading={comp5.subheading}
                      >
                          <p>• AIR 2</p>
                          <p>• 6th in sales presentation</p>
                      </Block>
                      <Block
                          year={comp6.year}
                          img={comp6.img}
                          title={comp6.title}
                          subheading={comp6.subheading}
                      >
                          <p>
                            • Ranked 26th among all the participating teams in
                              India
                          </p>
                          <p>• 6th in virtual round</p>
                      </Block>
                      <Block
                          year={comp7.year}
                          img={comp7.img}
                          title={comp7.title}
                          subheading={comp7.subheading}
                      >
                          <p>• 7th Rank in the Marketing Event</p>
                          <p>• 10th Rank in the Design Challenge</p>
                          <p>• 14th in the Acceleration Event</p>
                      </Block>
                      <Block
                          year={comp8.year}
                          img={comp8.img}
                          title={comp8.title}
                          subheading={comp8.subheading}
                      >
                          <p>• 1st in Sales presentation</p>
                          <p>• 3rd in Virtual evaluation</p>
                          <p>• 4th in the Cost Event</p>
                      </Block>
                      <Block
                          year={comp9.year}
                          img={comp9.img}
                          title={comp9.title}
                          subheading={comp9.subheading}
                      >
                          <p>• Secured Overall 23rd National Rank</p>
                          <p>• 4th in Suspension & Traction Event</p>
                          <p>• 9th in Sales Presentation Round</p>
                          <p>• 10th in Design Presentation Round</p>
                          <p>• 14th in Acceleration Round</p>
                      </Block>
                      <Block
                          year={comp10.year}
                          img={comp10.img}
                          title={comp10.title}
                          subheading={comp10.subheading}
                      >
                          <p>
                            • Scored 3rd highest points in the most ruthless
                              Suspension Traction Event
                          </p>
                          <p>
                            • Ranked 9th in acceleration among all 149 teams
                              from across the country
                          </p>
                      </Block>
                      <Block
                          year={comp11.year}
                          img={comp11.img}
                          title={comp11.title}
                          subheading={comp11.subheading}
                      >
                          <p>• Ranked 1st in Acceleration Event</p>
                          <p>• Ranked 5th in Business Presentation Round</p>
                          <p>• Ranked 7th in Maneuverability Event</p>
                          <p>
                            • Overall Secured 7th amongst all teams all over
                              India
                          </p>
                      </Block>
                      <Block
                          year={comp12.year}
                          img={comp12.img}
                          title={comp12.title}
                          subheading={comp12.subheading}
                      >
                          <p>• 1st Rank among all international teams</p>
                          <p>• 1st Prize in Acceleration Event</p>
                          <p>• 1st Prize in Maneuverability Event</p>
                          <p>• 1st Prize in Hill Climb Event</p>
                          <p>• 1st Prize in Dynamic Performance</p>
                          <p>• 2nd Prize in Static Design</p>
                          <p>• 2nd Prize in Sales Presentation</p>
                      </Block>
                      <Block
                          year={comp13.year}
                          img={comp13.img}
                          title={comp13.title}
                          subheading={comp13.subheading}
                      >
                          <p>• Winners of Safest Kart Award</p>
                          <p>• Winners of Best Marketing Scope Award</p>
                          <p>• Winners of Most Synchronized Team Award</p>
                          <p>
                            • Ranked 2nd among all participating teams in
                              India
                          </p>
                      </Block>
                      <Block
                          year={comp14.year}
                          img={comp14.img}
                          title={comp14.title}
                          subheading={comp14.subheading}
                      >
                          <p>
                            • Ranked among the top 15 teams in the endurance
                              race
                          </p>
                          <p>
                            • Nominated among the top teams for Computer-Aided
                              Engineering Award
                          </p>
                          <p>
                            • Ranked 36th among all the participating teams in
                              India
                          </p>
                      </Block>
                      <Block
                          year={comp15.year}
                          img={comp15.img}
                          title={comp15.title}
                          subheading={comp15.subheading}
                      >
                          <p>• Winners of Business Presentation Award</p>
                          <p>• Ranked 1st in Mumbai</p>
                          <p>
                            • Ranked 12th among all participating teams in
                              India
                          </p>
                      </Block>
                      <Block
                          year={comp16.year}
                          img={comp16.img}
                          title={comp16.title}
                          subheading={comp16.subheading}
                      >
                          <p>
                            • Won the Raftaar Award for the most dynamic car.
                          </p>
                          <p>
                            • Nominated among the top 10 teams in the computer-Aided Engineering category
                          </p>
                          <p>
                            • Ranked 35th among all the participating teams in
                              India
                          </p>
                      </Block>
                  </div>
              </section>
          </div>

          <Footer />
      </>
  );
}

export default Competitions