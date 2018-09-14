import React, { Component } from 'react';

import './Games.css'

import coco_vs_paint from '../assets/imgs/coco_vs_paint_gif.gif'
import breakout from '../assets/imgs/breakout_gif.gif'
import adler from '../assets/imgs/adler_gif.gif'
import lost_robot from '../assets/imgs/lost_robot_gif.gif'

class Games extends Component {
    render() {
        return (
            <div>
                <div className="game-type-title">Native</div>
                <div className="wrapper">
                    <div className="game-box">
                        <a href="https://github.com/Luiz0tavio/breakout">
                            <div className="game-box-image">
                                <span className="helper" />
                                <img className="game-gif" src={breakout} alt="loading..."/>
                            </div>
                            <div className="game-box-title">
                                <span className="game-title">Breakout</span>
                            </div>
                        </a>
                    </div>
                    <div className="game-box">
                        <a href="https://github.com/Luiz0tavio/lost_robot">
                            <div className="game-box-image">
                                <img className="game-gif" src={lost_robot} alt="loading..."/>
                            </div>

                            <div className="game-box-title">
                                <span className="game-title">Lost Robot</span>
                            </div>
                        </a>
                    </div>
                </div>
                <hr/>
                <div className="game-type-title">Browser</div>
                <div className="wrapper">
                    <div className="game-box">
                        <a href="https://github.com/Luiz0tavio/adler">
                            <div className="game-box-image">
                                <span className="helper" />
                                <img className="game-gif" src={adler} alt="loading..."/>
                            </div>
                            <div className="game-box-title">
                                <span className="game-title">Adler</span>
                            </div>
                        </a>
                    </div>

                    <div className="game-box">
                        <a href="https://github.com/Luiz0tavio/coco_vs_paint">
                            <div className="game-box-image">
                                <span className="helper" />
                                <img className="game-gif" src={coco_vs_paint} alt="loading..."/>
                            </div>
                            <div className="game-box-title">
                                <span className="game-title">Coco vs Paint</span>
                            </div>
                        </a>
                    </div>
                </div>


            </div>
        )
    }
}

export default Games;