import ReactDOM from 'react-dom';
import React from 'react';
import App from "./components";
import {Provider} from "react-redux";
import store from "./data";


const appContainer = document.createElement('div');
document.body.appendChild(appContainer);

// console.log(appContainer);
ReactDOM.render(<Provider store={store}><App /></Provider>, appContainer);