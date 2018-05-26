import React, { Component } from 'react';

import './Games.css'

import coco_vs_paint from '../assets/imgs/coco_vs_paint_gif.gif'
import breakout from '../assets/imgs/breakout_gif.gif'
import adler from '../assets/imgs/adler_gif.gif'

class Games extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="game-box">
                    <a href="https://github.com/Luiz0tavio/adler">
                        <img className="game-gif" src={adler} alt="loading..."/>
                        Adler
                    </a>
                </div>
                <div className="game-box">
                    <a href="https://github.com/Luiz0tavio/breakout">
                        <img className="game-gif" src={breakout} alt="loading..."/>
                        Breakout
                    </a>
                </div>
                <div className="game-box">
                    <a href="https://github.com/Luiz0tavio/coco_vs_paint">
                        <img className="game-gif" src={coco_vs_paint} alt="loading..."/>
                        Coco vs Paint
                    </a>
                </div>
            </div>
        )
    }
}

export default Games;