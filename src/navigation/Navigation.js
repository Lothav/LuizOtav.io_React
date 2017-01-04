import React, { Component } from 'react';
import me_svg from '../assets/game.svg';
import "./Navigation.css";
import ReactSVG from 'react-svg';

class Navigation extends Component {

    render(){
        return (
            <div className="navigation-box">
                <ReactSVG path={ me_svg }
                     callback={ (svg) =>{
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
                     }}
                />
                <div className="navigation-label">html5<br />Games</div>
            </div>
        );
    }

}

export default Navigation;