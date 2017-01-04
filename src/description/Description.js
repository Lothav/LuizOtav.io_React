import React, { Component } from 'react';
import "./Description.css";
import Typist from 'react-typist';

class Description extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoad : false};
    }

    getAge(){
        let birthday = new Date("07-06-1994");
        let ageDifMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    componentDidMount() {
        setTimeout(()=>{
            this.setState({isLoad : true});
        },1000);
    }

    render(){
        return this.state.isLoad ? (
            <div className="description-box">
                <div className="animated tada my-name" style={{width: "100%"}}>
                    <div className="animated rubberBand">
                        <div>Luiz Otávio</div>
                    </div>
                </div>
                <div className="description-box--ins">
                    <div className="icon-box-out">
                        <div className="icon-box">
                            <i className="fa fa-hand-peace-o faa-bounce" />
                        </div>
                        <div className="icon-box-label">
                            {this.getAge()} yrs old
                        </div>
                    </div>
                    <div className="icon-box-out">
                        <div className="icon-box">
                            <i className="fa fa-code faa-wrench" />
                        </div>
                        <div className="icon-box-label">
                            <Typist>
                                Full-stack Web Developer
                            </Typist>
                        </div>
                    </div>
                    <div className="icon-box-out">
                        <div className="icon-box">
                            <i className="fa fa-graduation-cap faa-tada" />
                        </div>
                        <div className="icon-box-label">
                            Graduating Computer Science
                        </div>
                    </div>
                    <div className="icon-box-out">
                        <div className="icon-box">
                            <i className="fa fa-map-marker float" />
                        </div>
                        <div className="icon-box-label">
                            Belo Horizonte/MG - Brazil
                        </div>
                    </div>
                </div>
            </div>
        ) : (<div></div>);
    }
}

export default Description;