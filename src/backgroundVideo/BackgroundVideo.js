import React, { Component } from 'react';
import mp4 from "../assets/video/programming-ide.mp4";
import ogg from "../assets/video/programming-ide.ogv";
import webm from "../assets/video/programming-ide.webm";

import "./BackgroundVideo.css";

class BackgroundVideo extends Component{

    render () {
        return (
            <video id="background-video" loop autoPlay>
                <source src={mp4} type="video/mp4" />
                <source src={webm} type="video/webm" />
                <source src={ogg} type="video/ogv" />
                Your browser does not support the video tag.
            </video>
        )
    }
}

export default BackgroundVideo;
