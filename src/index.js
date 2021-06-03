import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './assets/styles/main.scss';

const Root = () => <App />;

const rootElement = document.getElementById('root');
ReactDOM.render(<Root />, rootElement);
