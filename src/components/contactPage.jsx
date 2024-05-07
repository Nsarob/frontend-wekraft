import React from "react";
import Contact from "./contact";
import NavBar from "./navbar";
import Footer from "./footer";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
const ContactPage=()=>{
    return(
        <>
        <NavBar/>
        <div className="contactPage-container">
            <h1>GET IN TOUCH</h1> 
            <div className="contactPage-content">
                <div className="content-first">
                <LocationOnIcon className="icon"/>
                <h2>ADDRESS</h2>
                <p>RWANDA-Kigali-Gasabo</p>
                </div>
                <div className="content-first">
                <PermPhoneMsgIcon className="icon"/>
                <h2>PHONE-whatapp/call</h2>
                <p> +250 874 4783 38</p>
                </div>
                <div className="content-first">
                <AttachEmailIcon className="icon"/>
                <h2>MESSAGE</h2>
                <p>E-Mail: wekraft@gmail.com</p>
                </div>
                </div>  
        </div>
        <Contact/>
        <Footer/>
        </>
    )
}
export default ContactPage