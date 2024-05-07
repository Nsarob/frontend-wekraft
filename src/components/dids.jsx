import React, { useState, useEffect } from "react";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import temp from '../assets/temp2.png'

function Display() {
    const [filteredMentors, setFilteredMentors] = useState([]);
    const [nextClicked, setNextClicked] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://masterkraft-bn.onrender.com/API/didyou/get');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const responseData = await response.json();
    
                if (!Array.isArray(responseData.datas)) {
                    throw new Error('Invalid data format: expected an array');
                }

               
                setFilteredMentors(responseData.datas.reverse()); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
     
    const nextMentor = () => {
        setCurrentIndex(prevIndex => prevIndex + 1);
        setNextClicked(true);
    };

    const previousMentor = () => {
        setCurrentIndex(prevIndex => prevIndex - 1);
        setNextClicked(false);
    };

    return (
        <>
            <div className="read-container">
                <div className="dids">
                    {filteredMentors.length > 0 && currentIndex >= 0 && currentIndex < filteredMentors.length ? (
                        <div className="did" key={filteredMentors[currentIndex]._id}>
                            <div className="image-container">
                                <div className="image">
                                    <img src={temp} alt="home" />
                                </div>
                            </div>
                            <div className="description-container">
                                <div className="head">
                                    <h1>{filteredMentors[currentIndex].Title}</h1>
                                </div>
                                <div className="text">
                                    <p>{filteredMentors[currentIndex].Description}</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>No mentors available.</p>
                    )}

                    <div className="icon-footer">
                        <SkipPreviousIcon className={`icon next ${nextClicked ? 'black' : 'green'}`} onClick={previousMentor} />
                        <SkipNextIcon className="icon pre" onClick={nextMentor} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Display;

