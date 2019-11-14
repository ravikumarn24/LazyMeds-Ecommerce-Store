import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import cartReducer from './components/CartReducer';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const store = createStore(cartReducer);

ReactDOM.render( 
    <Router>   
<Provider history={history} store={store}>
    <App/>
</Provider> </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
