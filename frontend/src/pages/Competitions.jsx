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
year:"2023",
title:"Competition 1",
img: c1,
description:"competition description 1",
}
const comp2 = {
year:"2022",
title:"Competition 2",
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
            <Block year={comp1.year} img={comp1.img} title={comp1.title} description={comp1.description}/>
            <Block year={comp2.year}img={comp2.img} title={comp2.title} description={comp2.description}/>
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