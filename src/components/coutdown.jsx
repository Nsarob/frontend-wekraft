import React, { useState, useEffect } from 'react';
import kk from "../assets/kkk.png";

const CountDown = () => {
    const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        // Calculate the target date, which is 5 days from the current date
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 10);

        const updateTimeRemaining = () => {
            const currentTime = new Date();
            const timeDifference = targetDate - currentTime;

            // Calculate days, hours, minutes, and seconds remaining
            const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

            setTimeRemaining({
                days: daysRemaining,
                hours: hoursRemaining,
                minutes: minutesRemaining,
                seconds: secondsRemaining,
            });

            // If the countdown has reached zero, clear the interval
            if (timeDifference <= 0) {
                clearInterval(timer);
            }
        };

        // Update the time remaining every second
        const timer = setInterval(updateTimeRemaining, 1000);

        // Cleanup the timer when the component unmounts
        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="home-bottom">
                <div className="home-bottom-img">
                    <img src={kk} alt="" />
                </div>
                <div className="home-bottom-txt">
                    <h2><span>Science Toolkit</span> Countdown</h2>
                    <p>Exciting learning through exploration kit for your kid</p>
                </div>
                <div className="home-bottom-date">
                    <div className="days">
                        <h1>{timeRemaining.days}</h1>
                        <p>Day{timeRemaining.days === 1 ? '' : 's'}</p>
                    </div>
                    <p className="colon">:</p>
                    <div className="hours">
                        <h1>{timeRemaining.hours}</h1>
                        <p>Hour{timeRemaining.hours === 1 ? '' : 's'}</p>
                    </div>
                    <p className="colon">:</p>
                    <div className="minutes">
                        <h1>{timeRemaining.minutes}</h1>
                        <p>Minute{timeRemaining.minutes === 1 ? '' : 's'}</p>
                    </div>
                    <p className="colon">:</p>
                    <div className="seconds">
                        <h1>{timeRemaining.seconds}</h1>
                        <p>Second{timeRemaining.seconds === 1 ? '' : 's'}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CountDown;
