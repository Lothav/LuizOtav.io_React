import React, { Component } from 'react';
import MePhoto from './mePhoto/MePhoto';
import Description from './description/Description';

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
                <Description />
                <div style={{height:"50px"}} />
            </div>
        );
    }
}

export default App;
