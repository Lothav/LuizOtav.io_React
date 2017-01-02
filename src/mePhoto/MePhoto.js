import React, { Component } from 'react';
import photo from '../assets/me.svg';
import './MePhoto.css';
import ReactSVG from 'react-svg';
import '../loading.css';
import Description from '../description/Description';

class MePhoto extends Component{

    constructor (props) {
        super(props);
        this.state = {loaded: false};
        this.img = new Image();
        this.img.onload = this.handleLoad.bind(this);
        this.img.src = photo;
    }

    handleLoad () {
        setTimeout(()=>{ //@TODO fix this time out svg loaded
            this.setState({loaded: true});
        },100000);
    }

    render() {
        console.log(this.state.loaded);
        return this.state.loaded ? (
            <div>
                <ReactSVG
                    path={ photo }
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
                />
                <Description />
            </div>
        ) : (
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        );
    }
}

export default MePhoto;
