import React, { Component } from 'react';
import me_svg from '../../assets/eu_foto_draw.svg';
import game_svg from '../../assets/game.svg';
import about_svg from '../../assets/about.svg';
import skills_svg from '../../assets/skills.svg';

import "./Navigation.css";
import ReactSVG from 'react-svg';
import MediaQuery from 'react-responsive';

import { Link } from 'react-router-dom'

class Navigation extends Component {

    callbackSvg(svg){
        let paths = svg.querySelectorAll("path");
        for(let i in paths) {
            if(paths.hasOwnProperty(i)) {
                let dur = Math.round(Math.random() * 5) + 5;
                paths[i].style.animation = "svg-animate "+dur+"s forwards infinite";
                let round_len = Math.round(Number(paths[i].getTotalLength()));
                paths[i].setAttribute('stroke-dasharray', round_len);
                paths[i].setAttribute('stroke-dashoffset', round_len);
            }
        }
    }

    render(){
        return (
            <MediaQuery  minDeviceWidth={700} className="navigation-box">
                <div className="navigation-item">
                    <Link to="/home">
                        <ReactSVG path={ me_svg }
                                  callback={ this.callbackSvg }
                        />
                        <div className="navigation-label">Home</div>
                    </Link>
                </div>
                <div className="navigation-item">
                    <ReactSVG path={ about_svg }
                              callback={ this.callbackSvg }
                    />
                    <div className="navigation-label">About<br />Me</div>
                </div>
                <div className="navigation-item">
                    <ReactSVG path={ skills_svg }
                              callback={ this.callbackSvg }
                    />
                    <div className="navigation-label">Skills</div>
                </div>
                <div className="navigation-item">
                    <Link to="/games">
                        <ReactSVG path={ game_svg }
                                  callback={ this.callbackSvg }
                        />
                        <div className="navigation-label">Games</div>
                    </Link>
                </div>
            </MediaQuery>
        );
    }

}

export default Navigation;