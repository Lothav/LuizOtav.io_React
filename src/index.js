import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation/Navigation';
import BackgroundVideo from './backgroundVideo/BackgroundVideo';
import {HashRouter, Route} from 'react-router-dom';
import Home from './home/Home';
import './index.css';

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={Home}/>
    </HashRouter>,
    document.getElementById('root')
);

ReactDOM.render(
    <BackgroundVideo />,
    document.getElementById('background')
);

ReactDOM.render(
    <Navigation />,
    document.getElementById('nav')
);
