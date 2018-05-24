import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import Navigation from './navigation/Navigation';
import FindMe from './findMe/FindMe';
import hearth from "../assets/hearth.png";
import './Bars.css'

class Bars extends Component {
    render(){
        return (
            <div>
                <FindMe />
                <Navigation />
                <div className="built-with-love-and-react-box">
                    <div className="built-with-love-and-react">
                        Built with
                        <img src={hearth} className="App-hearth" alt="hearth" />
                        and React
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Bars;