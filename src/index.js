import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './assets/styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/createStore';

const Root = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<Root />, rootElement);
