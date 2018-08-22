import React, { Component } from 'react';

import papperclip from '../static/paperclip.png'

class FinancialCosts extends Component {
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
                    <h1>Financial Costs</h1>
                    <p>
                        Commercial Year => 30 days/month => 360 days. <br/>
                        Exact Year => 365 days/year
                    </p>
                    <h4>List 1 Solve</h4>
                    <p>
                        <b>1</b> <br/>
                        a) 21% a.a. -> 21/12 x 4 = 21/3 = 7% a.q. <br/>
                        b) 33% a.b. -> 33/24 x 4 = 33/6 = 5.5% a.q. <br/>
                        c) 10% sm -> 10/5 x 4 = 2 x 4 = 8% a.q. <br/>
                    </p>
                    <p>
                        <b>2</b> <br/>
                        a) 1% a.m. -> 1 x 5 = 5% <br/>
                        b) 2.5% a.b. -> 2.5 / 2 x 5 = 6.25% <br/>
                        c) 12% a.s. -> 12/6 x 5 = 10% <br/>
                    </p>
                    <p>
                        <b>3</b> <br/>
                        a) R$500,00 a 25% a.a. p/8 meses -> 25/12 x 8 = 16.67%. <br/>
                            500,00 x 0.1667 = 83.33 juros <br/>
                            500,00 x 83.33 = 583.33 montante<br/>
                        b) 2.200,00 a 30.2% a.m. p/ 2 anos e 5 meses. <br/>
                            30.2/12 x 29 = 72.98% <br/>
                            2.200,00 x 0.7298 = 1.605,63 juros <br/>
                            2.200,00 + 1.605,63 = 3.805,63 montante <br/>
                        c) 3.000,00 a 34% a.a. p/ 19 meses <br/>
                            34/12 x 19 = 53,83% <br/>
                            3.000,00 x 0.5383 = 1.615,00 juros <br/>
                            3.000,00 + 1.615,00 = 4.615,00 montante <br/>
                    </p>
                    <p>
                        <b>4</b> <br/>
                        a) 1.998,00 em 3 anos e 2 meses <br/>
                            S = P + J -> <b>J = S - P</b> <br/>
                            J = 1998,00 - 1.200,00 = 798,00 <br/>
                            <b>J = P x L x N</b>
                            L = 798,00/(1.200,00 x 38) = 798,00/ 45.600,00 = 0.0175 <br/>
                            L = 1.75% a.m. -> 21% a.a. <br/>
                        b) 1.470,00 em 10 meses <br/>
                            J = 1.470,00 - 1.200,00 = 270,00 <br/>
                            L = 270,00/(1.200,00 x 10) = 270,00/12.000,00 = 0.0225 <br/>
                            L = 2.25% a.m. -> 27% a.a. <br/>
                        c) 2.064,00 em 1 ano e 8 meses <br/>
                            J = 2.064,00 - 1.200,00 = 864,00 <br/>
                            L = 864,00 / (1.200,00 x 20) = 864,00 / 24.000,00 = 0.0360 <br/>
                            L = 3.60% a.m. -> 43.20%
                    </p>
                    <p>
                        <b>5</b> <br/>
                        a) 150,00 a 18% a.a. em 10 meses <br/>
                            <b>J = P x L</b> <br/>
                            L = 18/12 x 10 = 15% <br/>
                            150,00 = P x 0.15 <br/>
                            P = 1000,00 <br/>
                        b) 648,00 a 21.6% a.a. em 2 anos e 6 meses <br/>
                            L = 21.6/12 x 30 = 54% <br/>
                            P = 648,00/0.54 = 1.200,00 <br/>
                        c) <b>J = C x i x t</b>
                            1500 = c x 0.025 x 40 <br/>
                            c = 1500,00
                    </p>
                    <p>
                        <b>6</b> <br/>
                        10000,00 a 26,4% a.a. <br/>
                        a) rendera 4620,00 <br/>
                            L = 26,4/12 = 2.20% a.m. <br/>
                            4620,00 = 10000,00 x 0.22 x m <br/>
                            m = 21 meses <br/>
                        b) elevar_se_a a 16160,00 <br/>
                            J = 16160,00 - 10000,00 = 6160,00 <br/>
                            L = 2.20% a.m. <br/>
                            N = 6160,00 / 10000,00 x 0.0220 = 28 meses.
                    </p>
                    <p>
                        <b>9</b> <br/>
                        Jc = 800,00 x 0.20 x 90/360 = 40 (ano comercial) <br/>
                        Jc = 800,00 x 0.20 x 90/365 = 39.45 (ano exato) <br/>
                    </p>
                </div>
            </div>
        )
    }
}

export default FinancialCosts;