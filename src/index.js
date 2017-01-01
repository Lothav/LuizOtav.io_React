import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BackgroundVideo from './backgroundVideo/BackgroundVideo';
import './index.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
ReactDOM.render(
    <BackgroundVideo />,
    document.getElementById('background')
);
