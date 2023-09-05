/* eslint-disable no-unused-vars */
import React from 'react';
import {useRef} from "react";
import Navbar from "../components/Navbar";
import Block from "../components/block";
import Footer from "../components/footer";
import bckgd from "../assets/Home/bckgd.jpg";
import "../stylesheets/Competitions.css";

//images 
import c1 from "../assets/Competitions/DSC_15.png";


//variables
const comp1 = {
year:"2024",
title:"TEAM MOTORBREATH",
subheading:"e-BAJA2024",
img: c1,
description:"competition description 1",
}
const comp2 = {
year:"2022",
title:"Competition 2",
subheading:"e-BAJA 2023",
img: c1,
description:"competition description 2",
}
const comp3 = {
year:"2022",
title:"Competition 2",
subheading:"e-BAJA 2023",
img: c1,
description:"competition description 2",
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
            <Block year={comp1.year} img={comp1.img} title={comp1.title} subheading={comp1.subheading} >
              A rugged electric all-terrain vehicle with an RWD powertrain, to participate in ATVC 2024 and eBAJA SAEINDIA 2024
            </Block>
            <Block year={comp2.year}img={comp2.img} title={comp2.title} subheading={comp2.subheading} description={comp2.description}/>
            <Block year={comp3.year}img={comp3.img} title={comp3.title} subheading={comp3.subheading} description={comp3.description}/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
        </div>
     </section>
        
    </div>

    <Footer />
    </>
    

  )
}

export default Competitions