import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Navigation from './bars/navigation/Navigation';
import FindMe from './bars/findMe/FindMe';
import BackgroundVideo from './backgroundVideo/BackgroundVideo';
import Home from './home/Home';
import Games from './games/Games';

import './index.css';

ReactDOM.render(
    <HashRouter>
        <div>
            <FindMe />
            <Navigation />
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

