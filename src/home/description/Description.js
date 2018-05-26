import React, { Component } from 'react';
import "./Description.css";
import Typist from 'react-typist';

class Description extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoad : false, isLoad_name : false};
    }

    getAge() {
        let birthday = new Date("07-06-1994");
        let ageDifMs = Date.now() - birthday.getTime();
        let ageDate = new Date(ageDifMs); // miliseconds from epoch

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({isLoad : true});
        },1000);
        setTimeout(()=>{
            this.setState({isLoad_name : true});
        },3000);
    }

    render(){
        return this.state.isLoad ? (
            <div className="description-box">
                {
                    (() => {
                        return this.state.isLoad_name ? (
                            <div className="animated tada my-name" style={{width: "100%"}}>
                                <div className="animated rubberBand">
                                    <div>Luiz Otávio</div>
                                </div>
                            </div>
                        ) : (<div />);
                    }).call(this)
                }
                <div className="description-box--ins">
                    <div className="icon-box-out">
                        <div className="icon-box">
                            <i className="fa fa-desktop faa-bounce" />
                        </div>
                        <div className="icon-box-label">
                            Computer Graphics enthusiast
                        </div>
                    </div>
                    <div className="icon-box-out">
                        <div className="icon-box">
                            <i className="fa fa-code faa-wrench" />
                        </div>
                        <div className="icon-box-label">
                            <Typist>
                                std::cout &lt;&lt; "C++ guy" &lt;&lt; std::endl;
                            </Typist>
                        </div>
                    </div>
                    <div className="icon-box-out">
                        <div className="icon-box">
                            <i className="fa fa-graduation-cap faa-tada" />
                        </div>
                        <div className="icon-box-label">
                            Computer Science Undergrad
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
        ) : (<div/>);
    }
}

export default Description;