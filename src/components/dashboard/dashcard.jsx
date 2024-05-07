import React, { useState, useEffect } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import GroupIcon from '@mui/icons-material/Group';
import GradingIcon from '@mui/icons-material/Grading';
import axios from 'axios';

function DashCard() {
    const [videoCount, setVideoCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);
    const [userCount, setUserCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token')
                const videoResponse = await axios.get('https://masterkraft-bn.onrender.com/API/video/get');
                setVideoCount(videoResponse.data.datas.length);
                const orderResponse = await axios.get('https://masterkraft-bn.onrender.com/API/product/get');
                setOrderCount(orderResponse.data.datas.length);
                const userResponse = await axios.get('https://masterkraft-bn.onrender.com/API/user/get',{
                    method: "POST",
                   
                        headers: {
                            'Content-Type': 'application/json',
                            'auth-token': token,
                          },
                  
                });
                setUserCount(userResponse.data.datas.length);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="card-container">
                <div className="cards">
                    <div className="cardx">
                        <div className="text">
                            <h3>{videoCount}</h3>
                            <p>VIDEO UPLOADED</p>
                        </div>
                        <div className="icons">
                            <CloudUploadIcon className="icon"/>
                        </div>
                    </div>
                    <div className="cardx">
                        <div className="text">
                            <h3>{orderCount}</h3>
                            <p>PRODUCT AVAILABLE</p>
                        </div>
                        <div className="icons">
                            <GradingIcon className="icon"/>
                        </div>
                    </div>
                    <div className="cardx">
                        <div className="text">
                            <h3>{userCount}</h3>
                            <p>USERS</p>
                        </div>
                        <div className="icons">
                            <GroupIcon  className="icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashCard;
