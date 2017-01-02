import React, { Component } from 'react';
import MePhoto from './mePhoto/MePhoto';
import Description from './description/Description';
import logo from './assets/logo.svg';
import hearth from "./assets/hearth.png";

import facebook from './assets/imgs/facebook.png';
import github from "./assets/imgs/github.png";
import linkedin from './assets/imgs/linkedin.png';
import livecoding from "./assets/imgs/livecoding.png";
import wow from './assets/imgs/wow.png';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <a href="https://github.com/Luiz0tavio/LuizOtav.io_React">
                    <img style={{position: "fixed", top: 0, right: 0, border: 0, zIndex: 1001}}
                         src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
                         alt="Fork me on GitHub"
                         data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
                    />
                </a>
                <div className="App-header">
                    <div className="box-header">
                        <div className="find-me-text animated infinite flash">
                            <span>Find Me</span>
                        </div>
                        <div id="social0" className="animated bounceInDown" >
                            <a href="http://facebook.com/luizorv">
                                <img src={facebook} />
                            </a>
                        </div>
                        <div id="social1" className="animated bounceInDown" >
                            <a href="http://br.linkedin.com/in/luizorv">
                                <img src={linkedin} />
                            </a>
                        </div>
                        <div id="social2" className="animated bounceInDown" >
                            <a href="http://us.battle.net/wow/en/character/nemesis/Lothav/simple">
                                <img  src={wow} />
                            </a>
                        </div>
                        <div id="social3" className="animated bounceInDown" >
                            <a href="https://github.com/Luiz0tavio">
                                <img  src={github} />
                            </a>
                        </div>
                        <div id="social4" className="animated bounceInDown">
                            <a href="https://www.livecoding.tv/luiz0tavio/">
                                <img src={livecoding} style={{height: "33px"}} />
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{height:"100px"}}></div>
                <MePhoto />
                <Description />
                <div style={{height:"100px"}}></div>
                <div className="built-with-love-and-react-box">
                    <div className="built-with-love-and-react">
                        Built with
                        <img src={hearth} className="App-hearth" alt="hearth" />
                        and React
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
