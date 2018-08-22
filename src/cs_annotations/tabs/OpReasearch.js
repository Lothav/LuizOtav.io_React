import React, { Component } from 'react';

import papperclip from '../static/paperclip.png'
import MathJax from 'react-mathjax2'

class OpResearch extends Component {
    static matrix(vec) {

        let lines = [];
        vec.forEach(function(line){
            lines.push(line.join(" & "));
        });

        return '\\begin{pmatrix} ' + lines.join("\\\\") + '\\end{pmatrix}';
    }

    static  linear_programming(obj_fn, restrictions, non_neg_vars) {

        if (!Array.isArray(restrictions) || !Array.isArray(obj_fn)) {
            console.log("linear_programming() ERR: Wrong types params [" + typeof restrictions + ", " + typeof obj_fn + "]");
            return "";
        }

        let size = obj_fn.length;

        let lp = '$$max\\;(';
        obj_fn.forEach(function(obj_fn_i, index) {
            if(obj_fn_i !== 0) {
                lp += (obj_fn_i > 0 ? ' +' : ' ') + obj_fn_i.toString() + 'x_' + index.toString();
            }
        });
        lp += ')$$';

        restrictions.forEach(function (restriction, index) {
            lp += '$$';
            lp += index === 0 ? 's.t.\\;' : ' ';
            for (let i = 0; i < size; i ++) {
                if (restriction[i] !== 0) {
                    console.log(restriction[i]);
                    lp += (restriction[i] > 0 ? " +" : " ") + restriction[i].toString()  + 'x_' + i.toString();
                }
            }
            lp +=  restriction[size] + ' ' + restriction[size+1];
            lp += '$$';
        });

        if(Array.isArray(non_neg_vars) && non_neg_vars.length > 0) {

            let arr = [];

            non_neg_vars.forEach(function (non_neg_var, index) {
                if(non_neg_var) {
                    arr.push("x_" + index.toString())
                }
            });

            lp += '$$';
            lp += arr.join(", ");
            lp += '\\ge 0 $$';
        }

        return lp;
    }

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
                            Discussion about Operational Researching history ->
                            George Dantzig use OR to solve war problems.
                            Furthermore he develop <b>Simplex</b><br/>
                            Can be apply in most real world fields.<br/>
                            In this course, we care about Linear programming and Integer Programming.<br/>
                        </p>
                        <h2>2nd Class (14/08)</h2>
                        <p>
                            Sections 1 to 2.2 from <a href="https://LuizOtav.io/files/POaula1-8.pdf">Lecture Notes</a>.<br/>
                            Simplex comment: Worst case it's exponential, but, in the average case, it's polynomial!<br/>
                            Tip: draw the line equations and analyse the resultant area intersection. Every best-solution point remains on crossing lines. <br/>
                        </p>
                        <p>An LP problem is built with three main components:</p>
                        <ul>
                            <li><b>Decision variables</b>: which represent, in fact, a decision that must be taken no problem modeled  </li>
                            <li><b>Objective function</b>: which represents, in a numeric value, the benefit or cost associated those decisions that will be taken. It's the function that must max or min</li>
                            <li><b>Restrictions</b>: represents limitations from real world. The solution must obey these restrictions. </li>
                        </ul>
                        <p>
                            <b>Exercise 2</b>: <br/>
                            Matching restrictions:<br/>
                            $$2x_1 + x_2 = 4$$
                            $$x_1  + 2x_2 = 3$$
                            Find `x_2` intersection:
                            $$2x_1 + x_2 = 4$$
                            $$-2x_1 - 4x_2 = -6$$
                            $$-3x_2 = -2$$
                            $$x_2 = 2/3$$
                            then, find `x_1` intersection:
                            $$x_1 + 2 * 2/3 = 3$$
                            $$x_1 = 3 - 4/3$$
                            $$x_1 = 5/3$$
                        </p>
                        Intersection: `(2/3, 5/3)`
                        <p>
                            Solving 2.2 Practical example: <br/>
                            variables: `x_1, x_2, x_3, x_4, y_1, y_2` <br/>
                            $$max\quad(300x_1 + 260x_2 + 220x_3 + 180x_4 - 8y_1 - 6y_2)$$
                            $$s.t.\quad8x_1 + 5x_2 + 5x_3 + 6x_4 \le y_1$$
                            $$7x_1 + 8x_2 + 7x_3 + 4x_4 \le y_2$$
                            $$11x_1 + 7x_2 + 6x_3 + 5x_4 \leq 700$$
                            $$4x_1  + 6x_2 + 5x_3 + 4x_4 \leq 500$$
                            $$y_1 \le 600$$
                            $$y_2 \le 650$$
                            $$x_1, x_2, x_3, x_4 ,y_1, y_2 \ge 0$$
                        </p>
                        <h2>3rd Class (16/08)</h2>
                        <p>
                            Sections 5 from <a href="https://LuizOtav.io/files/POaula1-8.pdf">Lecture Notes</a>.<br/>
                            <b>FPI model</b> =>
                            $$ max\quad c^T x $$
                            $$s.t.\quad Ax=b$$
                            $$x \ge 0 $$
                            Simplex uses FPI, so, we want to know how to convert to it.<br/>
                            Steps to convert:
                        </p>
                        <ul>
                            <li>`min` to `max` : multiply by `-1` objective function.</li>
                            <li>`\le \ge` to `=` : add slack variables.</li>
                            <li>if we have "free variables", split it into 2 variables
                                `x_1^+` and `x_1^-`, that means, `x = x_1^+ - x_1^-`</li>
                        </ul>
                        <p>
                            From section 4, solving <b>Example 1</b> <br/>
                            .....
                        </p>
                        <p>
                            $$max\; 0.14x_1 + 0.70x_2+ 0.3x_3+ 0.1x_4$$
                            $$x_1 \ge 0.55 (x_1 + x_2)$$
                            $$x_2 \le 0.75 ( x_1 + x_2 + x_3 + x_4)$$
                            $$0.14x_1 + 0.70x2+ 0.3x3+ 0.1x4 \le 0.15 * (x_1 + x_2 + x_3+ x_4)$$
                        </p>
                        <h2>4th Class (21/08)</h2>
                        <p>
                            Sections 6 from <a href="https://LuizOtav.io/files/POaula1-8.pdf">Lecture Notes</a>.<br/>
                            Every LP has a solution? -> Draw restriction lines and check if have intersection. We don't need to look at objective function. <br/>
                        </p>
                        <p>
                            {'$$' + OpResearch.matrix([[1,2], [3,4]]) + '$$'}
                        </p>
                        <p>
                            {OpResearch.linear_programming([1,2,3], [[2,3,4,'\\leq', -3], [-3,-31,42,'\\leq', -3]], [true, false , true])}
                        </p>
                    </div>
                </div>
            </MathJax.Context>
        )
    }
}

export default OpResearch;