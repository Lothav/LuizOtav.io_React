import React, { Component } from 'react';
import MePhoto from './mePhoto/MePhoto';
import logo from '../assets/logo.svg';
import hearth from "../assets/hearth.png";

import './Home.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state ={social: ["none","none","none","none","none"]};
    }
    componentDidMount() {
        for(let i = 0; i < 5; i++) {
            setTimeout(()=>{
                this.setState({social: [
                    i >= 0 ? "block" : "none",
                    i >= 1 ? "block" : "none",
                    i >= 2 ? "block" : "none",
                    i >= 3 ? "block" : "none",
                    i >= 4 ? "block" : "none"
                ]});
            }, 250*i);
        }
    }

    render() {
        return (
            <div className="App">

                <div style={{height:"50px"}} />
                <MePhoto />
                <div style={{height:"50px"}} />
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
