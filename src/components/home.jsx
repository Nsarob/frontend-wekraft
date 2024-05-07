import React from "react";
import mtn from "../assets/wtr.png";
import parents from "../assets/Parents.png";
import hand from "../assets/Hand.png";
import bike from "../assets/bike.svg";
import smiley from "../assets/smiley-face.svg";

const Home=()=>{
    return(
        <>
        <div className="home-container">
        <div className="home">
        <div className="home-text">
                <p className="p-one">Ignite the Spark of Imagination:</p>
                    <p className="p-two"><span>Wekraft's</span> Secrets to</p>
                    <p className="p-three">Nurturing <span>Young Talent</span> and</p>
                    <p className="p-four">Cultivating Lifelong Skills for a</p>
                    <p className="p-five"><span>Bright and</span> Exciting Future.</p>
                    <div className="btn">
                        <a href="./tools" className="expo">EXPLORE THE KIT</a>
                    </div>
                </div>
        <div className="home-image">
            <img src={mtn} alt="" className="image" />   
            <img src={smiley} alt=""  className="smiley"/> 
            <img src={hand} alt="" className="hand"/>
            <img src={bike} alt="" className="bike"/>
            <img src={parents} alt="" className="valentine"/>
        </div>
        </div>
        </div>
        {/* <div className="home-container">
            <div className="home-image">
            <img src={mtn} alt="" />
            <div className="home-text-carton">
                    <img src={pencil} alt="" className="pencil"/>
                    <img src={parents} alt="" className="parents"/>
                    <img src={valentine} alt="" className="valentine"/>
                    <img src={hand} alt="" className="hand"/>
                    <img src={bike} alt="" className="bike"/>
                    <img src={smiley} alt="" className="smiley"/>
                    <img src={brid} alt="" className="brid"/>
                </div>
            <div className="home-text">
                <div className="home-text-text">
                    <p className="p-one">Ignite the Spark of Imagination:</p>
                    <p className="p-two"><span>Wekraft's</span> Secrets to</p>
                    <p className="p-three">Nurturing <span>Young Talent</span> and</p>
                    <p className="p-four">Cultivating Lifelong Skills for a</p>
                    <p className="p-five"><span>Bright and</span> Exciting Future.</p>
                    <div className="btn">
                        <a href="./tools" className="expo">EXPLORE THE BOX</a>
                        </div>
                    
                </div>
            </div>
            </div>
        </div> */}
        </>
    )
}

export default Home