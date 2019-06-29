import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Bars from './bars/Bars'
import BackgroundVideo from './backgroundVideo/BackgroundVideo';
import Home from './home/Home';
import Games from './games/Games';
import Resume from './resume/Resume';
import CSAnnotations from "./cs_annotations/CSAnnotations";
import ImageClassifier from "./image_classifier/ImageClassifier"

import './index.css';

ReactDOM.render(
    <HashRouter>
        <div>
            <Bars />
            <div className="route-box">
                <Switch>
                    <Route path="/resume" component={Resume}/>
                    <Route path="/games" component={Games}/>
                    <Route path="/cs_ln" component={CSAnnotations}/>
                    <Route path="/image_classifier" component={ImageClassifier}/>
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

