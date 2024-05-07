import React from "react";
import screenone from "../assets/Screenone.png";
import screentwo from "../assets/Screentwo.png";
import screenthree from "../assets/Screenthree.png";
import screenfour from "../assets/Screenfour.png";
import CountUp from 'react-countup';

const Award=()=>{
    return(
        <>
        <div className="award-container">
            <div className="award-div">
                <div className="award-one">
                    <img src={screenone} alt="" />
                    <CountUp start={-0}end={768}duration={8} className="count"></CountUp>
                    <p>TUTORIALS PUBLISHED</p>
                </div>
                <div className="award-one">
                    <img src={screentwo} alt="" />
                    <CountUp start={-0}end={120}duration={8} className="count"></CountUp>
                    <p>EXPERT INSTRUCTORS</p>
                </div>
                <div className="award-one">
                    <img src={screenthree} alt="" />
                    <CountUp start={-0}end={8300}duration={8} className="count"></CountUp>
                    <p>HAPPY LEARNERS</p>
                </div>
                <div className="award-one">
                    <img src={screenfour} alt="" />
                    <CountUp start={-0}end={32}duration={8} className="count"></CountUp>
                    <p>AWARDS ACHIEVED</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Award