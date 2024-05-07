import React from "react";

import Contacts from "./contactForm";

function Contact(){
return (
    <>
        <div className="contact-container">
        <div className="contacts">
        <div className="contact-left">
        <div className="contact-head">
        <h1>We're here to help. Feel free to get in touch with us.</h1>
        <p>We value your questions, feedback, and inquiries</p>
        </div>
        <div className="bottom">
            <h2>Lets Talk.</h2>
            <p>Please fill in the details and we will be in touch shortly or send us email or Call us</p>
            <div className="bold">
            <b>Support@wekraft.com</b>
            <b>+2507878788787</b>
            </div>
            
        </div>
        </div>
        <div className="contact-right">
        <h3>Complete the form below...</h3>
        <Contacts/>
        
        </div>
        </div>
        </div>
    </>
)
}
export default Contact