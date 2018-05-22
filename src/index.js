import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './navigation/Navigation';
import BackgroundVideo from './backgroundVideo/BackgroundVideo';
import {HashRouter, Route} from 'react-router-dom';
import App from './App';
import './index.css';

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={App}/>
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
