import React, { Component } from 'react';
import me_svg from '../assets/game.svg';
import home_svg from '../assets/home.svg';
import "./Navigation.css";
import ReactSVG from 'react-svg';

class Navigation extends Component {

    callbackSvg(svg){
        let paths = svg.querySelectorAll("path");
        for(let i in paths) {
            if(paths.hasOwnProperty(i)) {
                paths[i].animation = "svg-animate 4s forwards";
                let round_len = Math.round(Number(paths[i].getTotalLength()));
                console.log(round_len);
                // paths[i].style.stroke = "#f0f";
                paths[i].setAttribute('stroke-dasharray', round_len);
                paths[i].setAttribute('stroke-dashoffset', round_len);
            }
        }
    }

    render(){
        return (
            <div className="navigation-box">

                <div className="navigation-item">
                    <ReactSVG path={ home_svg }
                              callback={ this.callbackSvg }
                    />
                    <div className="navigation-label">Home</div>
                </div>
                <div className="navigation-item">
                    <ReactSVG path={ me_svg }
                              callback={ this.callbackSvg }
                    />

                    <div className="navigation-label">html5<br />Games</div>
                </div>

            </div>
        );
    }

}

export default Navigation;