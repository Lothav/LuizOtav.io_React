import React, { Component } from 'react';
import facebook from '../../assets/imgs/facebook.png';
import github from "../../assets/imgs/github.png";
import linkedin from '../../assets/imgs/linkedin.png';
import livecoding from "../../assets/imgs/livecoding.png";
import wow from '../../assets/imgs/wow.png';

import './FindMe.css';

class FindMe extends Component {

    constructor(props) {
        super(props);
        this.state = { social: ["none","none","none","none","none"], isLoad : false, load_count: 0 };
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
        let imgs = [facebook, github, linkedin, livecoding, wow];
        for(let i = 0; i< 5; i++){
            this.imgLoad(imgs[i]);
        }
    }

    imgLoad(img_src){
        let img = new Image();
        img.onload = () => {
            this.state.load_count++;
            if(this.state.load_count === 5){
                this.setState({isLoad : true });
            }
        };
        img.src =  img_src;
    }

    render() {
        return this.state.isLoad ? (
            <div className="find-me">
                <div className="find-me-text animated infinite flash">
                    <span>Find Me</span>
                </div>
                <div className="animated bounceInDown" style={{display: this.state.social[0]}}>
                    <a href="http://facebook.com/luizorv">
                        <img alt="facebook" src={facebook} />
                    </a>
                </div>
                <div className="animated bounceInDown" style={{display: this.state.social[1]}}>
                    <a href="http://br.linkedin.com/in/luizorv">
                        <img alt="linkedin" src={linkedin} />
                    </a>
                </div>
                <div className="animated bounceInDown" style={{display: this.state.social[2]}}>
                    <a href="http://us.battle.net/wow/en/character/nemesis/Othav/simple">
                        <img alt="wow" src={wow} />
                    </a>
                </div>
                <div className="animated bounceInDown" style={{display: this.state.social[3]}}>
                    <a href="https://github.com/Luiz0tavio">
                        <img alt="github" src={github} />
                    </a>
                </div>
                <div className="animated bounceInDown" style={{display: this.state.social[4]}}>
                    <a href="https://www.livecoding.tv/luiz0tavio/">
                        <img alt="livecoding" src={livecoding} style={{height: "33px"}} />
                    </a>
                </div>
            </div>
        ) : (<div></div>);
    }
}

export default FindMe;