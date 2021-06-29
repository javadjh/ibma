import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {storage} from './Storage/index'

ReactDOM.render(
    <Provider store={storage}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
,
  document.getElementById('root')
);
