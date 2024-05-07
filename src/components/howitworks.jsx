import React from "react";
import amico from "../assets/amico.png";
import Events from "../assets/pana.png";
import screen from "../assets/Screen.png"

const HowItWorks=()=>{
    return(
        <>
        <div className="works-container">
            <div className="works-top">
                <h1>How It Works</h1>
                <p>Welcome to the exciting world of MasterKraft! Here's how it all works.
                  It's super easy, so you can dive right in and start having fun while learning. Let's get started!</p>
            </div>
            <div className="works-bottom">
                <div className="works-bottom-left">
                   <div className="first">
                   <h1>Get <span>Your</span> Box</h1>
                    <p>We'll send your chosen
                     box to your doorstep.
                     Unboxing the magic starts here!</p>
                   </div>
                   <div className="image">
                    <img src={amico} alt="" />
                   </div>
                   <div className="last">
                    <h1>Pick <span>Your Box</span></h1>
                    <p>Choose a themed box that piques your interest.
                       Get ready for a world of creativity and exploration!</p>
                   </div>
                </div>
                <div className="works-bottom-center">
                <div className="first">
                   <h1><span>Access</span> Tutorials</h1>
                    <p>After exploring your box, dive into tutorials
                       that match your theme. Learn step-by-step
                       with easy-to-follow lessons and videos.</p>
                   </div>
                   <div className="image">
                    <img src={Events} alt="" />
                   </div>
                   <div className="last">
                    <h1><span>Open and</span> Explore</h1>
                    <p>Discover exciting projects in your box.
                       Get hands-on and create amazing things!</p>
                   </div>
                </div>
                <div className="works-bottom-bottom">
                   <div className="image">
                    <img src={screen} alt="" />
                    <div className="first">
                    <h1>Keep<span> Learning</span></h1>
                    <p>As you learn, create your
                       own fantastic projects. Share
                       your creations with family and friends.</p>
                   </div>
                   </div>
                   <div className="last">
                    <h1><span>Create</span> and<span> Share</span></h1>
                    <p>As you learn, create your
                       own fantastic projects. Share
                       your creations with family and friends.</p>
                   </div>
                  
                </div>
            </div>
        </div>
        </>
    )
}
export default HowItWorks