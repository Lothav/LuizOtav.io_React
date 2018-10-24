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
                    <p>
                        <b>12</b> <br/>
                        Vn = 2 x P <br/>
                        L = 12.5% a.a. <br/>
                        M = ? <br/>
                        2P = P x (P x 0.1250 x M) <br/>
                        P = P x 0.1250 x M <br/>
                        M = 8 anos
                    </p>
                    <p>
                        <b>13</b> <br/>
                        Vn = 1, P = 2/3, n = 2, L = ? <br/>
                        1 = 2/3 + (2/3 x L x 2) <br/>
                        1/3 = 2/3 x i x 2 <br/>
                        1/6 = 2/3 x i <br/>
                        L = 3/12 = 0.25 -> 25% a.a.
                    </p>
                    <p>
                        <b>14</b> <br/>
                        P = 3000.00 ou <br/>
                        P0 = 600.00 + P6 = 2760.00 <br/>
                        P0 (600.00) ------------ P6 (2760.00) <br/>
                        ^________________________^ <br/>
                        P = 3000.00 - 600.00 = 2400.00 <br/>
                        S = 2760.00 - 2400.00 = 360.00 <br/>
                        i = 360.00/2400.00 = 0.15 a.p. <br/>
                        i = (15/6) x 12 = 70.a.a
                    </p>
                    <p>
                        <b>15</b> <br/>
                        P = 20000.00, m = 24 meses, L = 30%a.a. <br/>
                        L = 30/12 x 24 = 60% <br/>
                        S = 20000.00 x (1+0.60) = 32000.00 <br/>
                        32000.00 = P + (P x 0.1250) <br/>
                        32000.00 = 1.1250 x P <br/>
                        P = 28444.44
                    </p>
                    <p>
                        Em uma determinada data, uma pessoa aplica todo seu dinheiro em duas instuiçoes financeiras X e Y. <br/>
                        Em X, aplica um capital, durante 8 meses, sob o regime de capitalizaçao simples a uma taxa de 9.6% a.a.
                        e resgata todo o montante correspondente no final do periodo. <br/>
                        Em Y, aplica o restante do seu dinheiro, durante 2 trimestres, sob o regime de capitalizaçao composto
                        a uma taxa de 4% ao trimestre. <br/>
                        Sabendo-se que o capital aplicado em Y supera em R$10,000 que foi aplicado em X. <br/>
                        Se o valor dos juros da aplicaçao em Y, no final do periodo de aplicacao, foi igual a R$2,774.40,
                        determine o montante resgatado pela aplicacao em X.
                    </p>
                    <p>
                        Aplicacao em X: <br/>
                        9.6% a.a. simples = 6.4% em 8 meses. <br/>
                        M = 1.064 x C <br/>
                        <br/>

                        Aplicacao em Y: <br/>
                        M = C x (1 + i)^n <br/>
                        M = C x (1.04)^2 <br/>
                        M = 1.0816 x C <br/>
                        <br/>

                        Cx + 10000 = Cy <br/>
                        <br/>

                        Jy = My - Cy <br/>
                        Jy = (1.0816 x Cy) - Cy <br/>
                        2774.40 = 0.0816 x Cy <br/>
                        Cy = R$34000.00 <br/>
                        <br/>

                        Cx = R$24000.00 <br/>

                        Mx = Cx x 1.064 <br/>
                        Mx = 24000 x 1.064 <br/>
                        Mx = R$25,536.00
                    </p>
                    <p>
                        Uma pessoa depositou R$1,000.00 em um fundo que paga juros de 5% a.m., com o objetivo de dispor
                        de R$1,102.50 dentro de 2 meses. Passados 24 dias apos a aplicacao, a taxa baixou para 4% a.m.. <br/>
                        Quanto tempo adicional tera de esperar para obter o capital requerido?
                    </p>
                    <p>
                        Simples (era composto lol) <br/>

                        24 dias = 0.8 meses <br/>
                        24 dias de 5% a.m = 4% <br/>
                        1,000 x 1.04 = R$1040 <br/>
                        Restante = 1102.50 - 1040.00 = 62.50 <br/>
                        62.5 = 1,000 x 0.04 x n <br/>
                        62.5 = 40 x n <br/>
                        n = 1.5625 meses <br/>
                        n = 46.875 ~ 47 dias
                    </p>
                    <p>
                        Composto (agora certo hehe) <br/>
                        24 dias = 0.8 meses <br/>
                        24 dias de 5% a.m = 4% <br/>
                        S = C x (1+i)^n <br/>
                        S = 1000.00 x (1+0.05)^0.8 <br/>
                        S = 1000.00 x 1.0398 <br/>
                        S = R$1,039.80 <br/>
                        <br/>
                        1,102.50 = 1,039.80 x (1 + 0.04)^n <br/>
                        1.06 = 1.04^n <br/>
                        log(1.06) = log(1.04^n) <br/>
                        0.0253 = 0.0170n <br/>
                        n = 1.4882 -> 45 dias <br/>
                        <br/>
                        1ª aplicacao : 24 dias <br/>
                        2 aplicacao: 45 dias <br/>
                        prazo desejado : 60 dias <br/>
                        24 + 45 - 60 = <b>9 dias</b>
                    </p>
                    <p>
                        <b>Compulsorio</b>
                        <b>Open Market</b>
                        <b>Redesconto</b>
                    </p>
                    <p>
                        Work: <br/>
                        20 fuckin points <br/>
                        Tema: Sistemas de Amortizaçao <br/>
                        Formato: Estudo de Caso <br/>
                        Aquisiçao de imovel no valor de 500mil <br/>
                        Financas: 350mil (150mil entrada) <br/>
                        <ul>
                            <li>SAC</li>
                            <li>PRICE</li>
                            <li>SAM</li>
                        </ul>
                        Prazo: 2400 meses (20 anos)
                    </p>
                    <p>
                        Montar uma apresentaçao sao os parametros, conceitos a taxas equivalentes. (taxa over, efetiva, nominal)
                    </p>
		   	<p>
				Trabalho (20 pontos): <br/>
				WACC - custo medio ponderado de capital <br/>
				Capital proprio vs capital terceiros <br/>
				Preparar apresentacao: <br/>
				O que e? <br/>
				Pra que serve? <br/>
				Como e calculado? <br/>
				Data: Quarta (31/10) <br/>
				(adiantar uma parte da materia)
			</p>
			<p>
				Nao tera aula segunda nem quarta (22 e 24).
			</p>
                </div>
            </div>
        )
    }
}

export default FinancialCosts;
