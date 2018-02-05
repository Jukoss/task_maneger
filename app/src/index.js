import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Link } from 'react-router-dom';


import './index.scss';
import './styles/App.scss';


import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div className="app">
      <App />
    </div>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();




