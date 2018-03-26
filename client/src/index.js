import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import "semantic-ui-css/semantic.min.css";
import './components/common/common.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const store = createStore(reducer, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>      
, document.getElementById('root'));
//registerServiceWorker();
