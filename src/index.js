import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Bars from './bars/Bars'
import BackgroundVideo from './backgroundVideo/BackgroundVideo';
import Home from './home/Home';
import Games from './games/Games';

import './index.css';

ReactDOM.render(
    <HashRouter>
        <div>
            <Bars />
            <div className="route-box">
                <Switch>
                    <Route path="/games" component={Games}/>
                    <Route component={Home}/>
                </Switch>
            </div>
        </div>
    </HashRouter>,
    document.getElementById('root')
);

ReactDOM.render(
    <BackgroundVideo />,
    document.getElementById('background')
);

