import Toturial from "./toturial"; // Typo? Should it be "Tutorial"?
import { Spin } from "antd";
import NavBar from "./navbar";
import Footer from "./footer";
import Dids from "./dids";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import axios from "axios";

function Learn() {
    const [video, setVideo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://masterkraft-bn.onrender.com/API/video/get');
                setVideo(response.data);
            } catch (error) {
                console.log('error', error);
            }
        };
        fetchData([]);
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <NavBar />
            <div className="videos" data-oas='zoom-in'>
                {video ? (
                    video.datas.slice().reverse().map((learnx, index) => (
                        <Toturial key={index} proff={learnx.videoTitle} course={learnx.videoDescription} video={learnx.video} youtube={learnx.youtubeLink} data-oas='zoom-in' />
                    ))
                ) : (
                    <Spin />
                )}
            </div>
            <Dids />
            <Footer />
        </>
    );
}

export default Learn;
