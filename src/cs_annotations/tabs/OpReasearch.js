import React, { Component } from 'react';

import papperclip from '../static/paperclip.png'
import MathJax from 'react-mathjax2'

class OpResearch extends Component {
    render() {
        return (
            <MathJax.Context>
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
                        <h1>Operational Researching</h1>
                        <h2>1st Class (09/08)</h2>
                        Points distribution:
                        <ol>
                            <li>3 exams (25 points each)</li>
                            <li>1 ~ 2 practical works (20 points)</li>
                            <li>Lists (10 points)</li>
                        </ol>
                        <span>Suggested biography:</span>
                        <ol>
                            <li>Guenin, Koenemman and Tunçel. A Gentle Introduction to Optimization</li>
                            <li>Papadimitriou and Streiglitz. Combinatorial Optimization</li>
                            <li>Chvatal. Linear Programming</li>
                            <li>Dantzig and Thapa. Linear Programming</li>
                        </ol>
                        <p>
                            Discussion about Operational Researching history. <br/>
                            Can be apply in most real world fields.<br/>
                            In this course, we care about Linear programming and Integer Programming.<br/>
                        </p>
                        <h2>2nd Class (14/08)</h2>
                        <p>
                            Discussing from 1 to 2.2 section of <a href="https://LuizOtav.io/files/POaula1-8.pdf">Lecture Notes</a>.<br/>
                            Simplex comment: Worst case it's exponential, but, in the average case, it's polynomial!<br/>
                            Tip: Every best-solution point remains on crossing lines. <br/>
                        </p>
                        <p>
                            Solving 2.2 Practical example: <br/>
                            variables: x1, x2, x3, x4, y1, y2 <br/>
                            $$max (300x1 + 260x2 + 220x3 + 180x3 - 8y1 - 6y2)$$
                            $$s.t. (y1 \le 600) $$
                            $$y2 \le 650$$
                            $$y1 = 8x1 + 5x2 + 5x3 + 6x4$$
                            $$y2 = 7x1 + 8x2 + 7x3 + 4x4$$
                            $$11x1 + 7x2 + 6x3 + 5x4 \leq 700$$
                            $$4x1  + 6x2 + 5x3 + 4x4 \leq 500$$
                            $$x,y,z \ge 0$$
                        </p>

                    </div>
                </div>
            </MathJax.Context>
        )
    }
}

export default OpResearch;