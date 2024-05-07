import React from "react";
// import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player/youtube";

function Tutorial(props) {

    return (
        <div className="video-container">
            <div className="delay">
                <div className="videos">
                    <div className="video-card">
                       
                        <ReactPlayer url={props.video} width={'100%'} height={'200px'} controls={true}  playing={false} loop={true} />
                        
                        <div className="video-content">
                            <h1>{props.proff}</h1>
                            <p>{props.course}</p>
                            <Link to={props.youtube} className="youtube" target="_blank">Go to watch on YouTube</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tutorial;
