import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import EkiApp from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <Router>
        <EkiApp />
    </Router>, document.getElementById('root'));
registerServiceWorker();
