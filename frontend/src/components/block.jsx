/* eslint-disable no-unused-vars */
import React from 'react'
import "../stylesheets/Block.css"
import c1 from "../assets/Competitions/DSC_15.png";
const block = () => {
  return (
    <>
        <div className="piece">
            <img src={c1} alt="" />
            <div className="content">
                <h2>Competition name</h2>
                <p>Contrary to popular belief, 
                Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin 
                literature from 45 BC, making it over 2000
                years old. Richard McClintock, a Latin professor 
                at Hampden-Sydney College in Virginia, 
                looked up one of the more obscure Latin words, 
                consectetur, from a Lorem Ipsum passage, 
                and going through the cites of the word in 
                classical literature, discovered the undoubtable 
                source.</p>
            </div>
            
        </div>
    </>

  )
}

export default block
