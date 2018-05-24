import React, { Component } from 'react';

import './Games.css'

import breakout from '../assets/imgs/breakout_gif.gif'

class Games extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="game-box">
                    <a href="https://github.com/Luiz0tavio/breakout">
                        <img className="game-gif" src={breakout} alt="loading..."/>
                        Breakout
                    </a>
                </div>
            </div>
        )
    }
}

export default Games;