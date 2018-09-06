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
                        Example Huffman Coding: <br/>
                        <pre>
                        {`
                            1
                        s2     .61
                            s6     .30
                                s1     .20
                                    s4     .10
                                        s5     s3`}
                        </pre>
                        <br/>
                        Predictive Codification no Loss <br/>
                        We cant predict future bits <br/>
                    </p>
                    <p>
                        1- Calcule o histograma para a imagem abaixo <br/>
                        2- Aplique o filtro da mediana de tamanho 3x3 na imagem. <br/>
                        3- Aplique o filtro da media de tamanho 3x3 na imagem. <br/>
                        4- Discorra sobre as diferenças entre os resultados das questoes 2 e 3. <br/>
                        5- Reduza a profundidade da imagem para 3bits (profundidade original: 8bits).
                    </p>
                    Imagem:
                    <p>
                        10  20  10  3  5
                         3   5 255 11 23
                         0  31  21 33 32
                        31  12  23 34 34
                        56 255  63 64 32
                        55  21   0 21 11
                    </p>
                </div>
            </div>
        )
    }
}

export default VisualComputing;