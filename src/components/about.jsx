import React from "react";
import qt from "../assets/Screenfour.png";
import Footer from "./footer";
import NavBar from "./navbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Image } from "antd";

const About=()=>{
    const [team, setTeam]= useState([])

    useEffect(()=>{
      const fetchProduct = async ()=>{
         const response = await axios.get(`https://masterkraft-bn.onrender.com/API/team/get`)
         setTeam(response.data)
      };
      fetchProduct([])
    },[])
    
    return(<>
    <NavBar/>
    <div className="about-container">
        <div className="about-all-content">
            <div className="about-content">
                <div className="about-content-right">
                    <h1>ABOUT US.</h1>
                    <p>In today's digital era, where screens often dominate
                       the attention of our children, Wekraft offers a
                       refreshing departure from idle entertainment, serving
                       as a sanctuary for meaningful, productive activities.
                       Each Wekraft box takes us on a journey of
                       exploration and creativity, equipping our children with
                       the necessary tools to craft, create, and broaden their
                       horizons. This experience not only nurtures their
                       cognitive and motor skills but also ignites their
                       curiosity, fostering a spirit of innovation.
                       <br></br>
                       <br></br>
                       More than just a box, Wekraft represents an
                       enriching experience and a profound connection. It
                       becomes an opportunity for parents and children to
                       bond through the joy of creation, dream together, and
                       inspire one another. </p>
                </div>
            </div>
            <div className="about-qoute">
                <div className="qoute-p">
                <p><KeyboardDoubleArrowLeftIcon className="icon"/>our work does make sense only if it is faithful witnessof his time
                <KeyboardDoubleArrowRightIcon className="icon"/></p>
                </div>
               <div className="qoute-img">
               <img src={qt} alt="" />
               </div>
            </div>
         
            <div className="ourTeam">
           
            <div className="head">
                    <h1>OUR TEARM</h1>
                    </div>
                <div className="ourTeam-div-container">
                   
                 {team && team.datas && team.datas.map((row)=>(
                    <div className="ourTeam-container">
                    <div className="ourTeam-card">
                        <div className="ourTeam-img">
                        <Image width={'100%'} height={'100%'}src={row.teamImage.url} alt="" className="img"/>
                        </div>
                        <h3>{row.personName}</h3>
                        <p>{row.personWork}</p>
                    </div>

                </div>
                 ))}

                   
                </div>
            </div>
          
        </div>
    </div>
    <Footer/>
    </>)
}

export default About