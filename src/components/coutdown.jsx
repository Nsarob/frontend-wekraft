import React, { useState, useEffect } from 'react';
import kk from "../assets/kkk.png";

const CountDown=()=>{
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTime(new Date());
        }, 1000);
    
        return () => clearInterval(timer);
      }, []);
    
      const currentDay = currentTime.getDay(undefined, { weekday: 'long' });
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();
      const currentSecond = currentTime.getSeconds();
    
    return(
        <>
        <div className="home-bottom">
                <div className="home-bottom-img">
                    <img src={kk} alt="" />
                </div>
                <div className="home-bottom-txt">
                    <h2><span>Holiday Course</span> Countdown</h2>
                    <p>Exciting learning adventures for festive seasons!</p>
                </div>
                <div className="home-bottom-date">
                    <div className="days">
                        <h1>{currentDay}</h1>
                        <p>Day</p>
                    </div>
                    <p className="colon">:</p>
                    <div className="hours">
                        <h1>{currentHour}</h1>
                        <p>hour</p>
                    </div>
                    <p className="colon">:</p>
                    <div className="minutes">
                        <h1>{currentMinute}</h1>
                        <p>minutes</p>
                    </div>
                    <p className="colon">:</p>
                    <div className="seconds">
                        <h1>{currentSecond}</h1>
                        <p>seconds</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CountDown