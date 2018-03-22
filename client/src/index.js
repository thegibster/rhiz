import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import "semantic-ui-css/semantic.min.css";
import './components/common/common.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
