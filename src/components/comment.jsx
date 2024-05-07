import React from "react";
import Card from "./card";
// import card from '../assets/wht.jpeg';
import sponsor from '../assets/comment.json'

function Comment(){
return (
    <>
    <div className="protection">
    <div className="head">
    <p>Join our community of parents and let your voice be heard! Share your valuable reviews
and experiences with us. Your feedback matters</p>
    </div>
    
    <div className="cards">
       {sponsor ? (sponsor.map((sponsorx)=>(
        <Card desc={sponsorx.description} photo={sponsorx.newsImage} name = {sponsorx.name} location={sponsorx.location} />
    ))):(
        <p>Loading...</p>
    )}
    </div>
    <div className="sponsor">
    <p>our amazing parterners</p>
    <div className="our">
    <h1>wekraft</h1>
        <h1>jasiri</h1>
    </div>
    
        
    </div>
    </div>

    </>
)
}
export default Comment