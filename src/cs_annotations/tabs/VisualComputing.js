import React, { Component } from 'react';

import papperclip from '../static/paperclip.png'

class VisualComputing extends Component {
    render() {
        return (
            <div className="site_content">
                <div className="sidebar_container">
                    <img className="paperclip" src={papperclip} alt="paperclip"/>
                    <div className="sidebar">
                        <h3>1º Exam</h3>
                        <h4>14/04</h4>
                        <h5>(25 pnts)</h5>
                        <p>Exam Content HERE</p>
                    </div>
                    <img className="paperclip" src={papperclip} alt="paperclip"/>
                    <div className="sidebar">
                        <h3>1º Practical Work</h3>
                        <h4>14/04</h4>
                        <h5>(10 pnts)</h5>
                        <p>PW Content HERE</p>
                    </div>
                </div>
                <div className="content">
                    <h1>Visual Computing</h1>
                    <p>
                        Image processingbr <br/>
                        PNG is format that has no losses <br/>
                        Put image in a matrix format -> don't want to more or less pixels <br/>
                        Fourier -> create a frequency function that describe a variation of color image <br/>
                        We use the minimal the double of frequency to guarantee that we will not loss anything <br/>
                        Low frequency -> <br/>
                        High frequency -> <br/>
                        The light quantity as an <b>log</b> function: with high luminance we cant see much detail! <br/>
                        Image depth: `2^8` = 256. We don't want to use more depth unless specific cases. <br/>
                    </p>
                </div>
            </div>
        )
    }
}

export default VisualComputing;