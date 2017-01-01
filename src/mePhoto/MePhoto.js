import React, { Component } from 'react';
import photo from '../assets/me.svg';
import './MePhoto.css';
import ReactSVG from 'react-svg'

class MePhoto extends Component{

    render() {
        return(
            <ReactSVG
                path={photo}
                callback={ (svg) =>{
                    let paths = svg.querySelectorAll("path");
                    let animation_dur = 1;
                    for(let i in paths) {
                        if(paths.hasOwnProperty(i)){
                            let animations = ["rotate-n", "tada", "zoomInDown", "rubberBand"];
                            let random = Math.floor(Math.random() * animations.length);
                            paths[i].style.animation = animations[random]  +" "+animation_dur+"s" ;
                        }
                        animation_dur += 0.25;
                    }
                }}
                className="animate"
            />
        );
    }
}

export default MePhoto;
