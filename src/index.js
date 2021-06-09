import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import 'semantic-ui-css/semantic.min.css';
import './assets/styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'redux/createStore';
import * as serviceWorker from './serviceWorker';
import { ToastProvider } from 'react-toast-notifications';

const Root = () => (
  <Provider store={store}>
    <Router>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Router>
  </Provider>
);

const rootElement = document.getElementById('root');
ReactDOM.render(<Root />, rootElement);

serviceWorker.unregister();
