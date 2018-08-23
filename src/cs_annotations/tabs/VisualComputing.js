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
                        Image processing <br/>
                        PNG is format that has no losses <br/>
                        Put image in a matrix format -> don't want to more or less pixels <br/>
                        Fourier -> create a frequency function that describe a variation of color image <br/>
                        We use the minimal the double of frequency to guarantee that we will not loss anything <br/>
                        Low frequency -> <br/>
                        High frequency -> <br/>
                        The light quantity as an <b>log</b> function: with high luminance we cant see much detail! <br/>
                        Image depth: `2^8` = 256. We don't want to use more depth unless specific cases. <br/>
                    </p>
                    <p>
                        Noise <br/>
                        Solve Salt and pepper with <b>median</b> neighbor <br/>
                        Analyse entropy > check histogram. High variation histogram => low entropy.
                    </p>
                    <p>
                        Quality Metrics <br/>
                        Maximum Error: Useful just when you want to check if both images are equal (e.g. compression with no loss). <br/>
                        Correlation Coeff: good when change bright (sum a value to all pixels)<br/>
                    </p>
                    <p>
                        Transforming <br/>
                        Unidimensional O(n^2) <br/>
                        Bidimensional O(n^4) <br/>
                        DCT (discret cossine transformation) -> used to JPG -> discard lower values! <br/>
                        Fourier -> instead mod z = sqrt(a^2 + b^2) we can do mod z = log(1 + sqrt(a^2 + b^2)) <br/>
                    </p>
                    <p>
                        Compression <br/>
                        Go do frequency domain -> discard high frequencies -> apply entropy. <br/>
                        Huffman coding -> binary tree -> more frequent near tree root. <br/>
                    </p>

                </div>
            </div>
        )
    }
}

export default VisualComputing;