import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './assets/styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';

const Root = () => (
  <Router>
    <App />
  </Router>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<Root />, rootElement);
