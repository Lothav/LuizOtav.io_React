import React, { Component } from 'react';

import './Resume.css';

class Resume extends Component {

    constructor(props) {

        super(props);

        fetch('resume.html')
            .then((r) => r.text())
            .then(text  => {
                this.setState({htmlMarkup: text});
            });

        this.state = {htmlMarkup: ""};
    }

    render() {

        return (
            <div className="resume-wrapper" >
                <div className="resume-box">
                    <div dangerouslySetInnerHTML={{__html: this.state.htmlMarkup}} />
                </div>
            </div>
        )
    }
}

export default Resume;