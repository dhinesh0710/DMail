import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';
import axios from 'axios';
window.axios = axios;

const store = createStore( reducers, {}, applyMiddleware(thunk));

const el = document.getElementById("root");  // Get a reference to the div with ID root
const root = ReactDOM.createRoot(el);  // Tell React to take control of that element
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);  // Show the component on the screen

console.log('STRIPE key is:', process.env.REACT_APP_STRIPE_KEY);
console.log('Environent is:', process.env.NODE_ENV);