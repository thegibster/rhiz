import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import "semantic-ui-css/semantic.min.css";
import './components/common/common.css';

// left initial state blank for now
const store = createStore(reducer, {}, applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>      
, document.getElementById('root'));
registerServiceWorker();
