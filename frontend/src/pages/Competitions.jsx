import React from 'react';
import {useRef} from "react";
import Navbar from "../components/Navbar";
import Block from "../components/block";
// import Footer from "../components/footer";
import bckgd from "../assets/Home/bckgd.jpg";
import "../stylesheets/Competitions.css";

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
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
            <Block/>
        </div>
     </section>
        
    </div>


    </>
    

  )
}

export default Competitions