import React, { Component } from 'react';

import './Games.css'

import breakout from '../assets/imgs/breakout_gif.gif'

class Games extends Component {
    render() {
        return (
            <div className="games-grid">
                <div className="game-box">
                    <img className="game-gif" src={breakout} alt="loading..."/>
                    Breakout
                </div>
            </div>
        )
    }
}

export default Games;