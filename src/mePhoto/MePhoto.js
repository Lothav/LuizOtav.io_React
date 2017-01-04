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
        this.loaded_all = 0;

        let img1 = new Image();
        img1.onload = this.handleLoad.bind(this);
        img1.src = photo;

        let img2 = new Image();
        img2.onload = this.handleLoad.bind(this);
        img2.src = photo;
    }

    handleLoad () {
        if(this.loaded_all){
            setTimeout(()=>{ //@TODO fix this time out svg loaded
                this.setState({loaded: true});
            },1000);
        }else{
            this.loaded_all = true;
        }
    }

    render() {
        return this.state.loaded ? (
            <div>
                <ReactSVG
                    path={ photo }
                    callback={ (svg) =>{
                        let paths = svg.querySelectorAll("path");
                        let animation_dur = 1;
                        for(let i in paths) {
                            if(paths.hasOwnProperty(i)) {
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
