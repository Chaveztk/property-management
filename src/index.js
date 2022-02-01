import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


import './assets/css/styles.css';
import './assets/css/bootstrap.min.css';
import './assets/css/agency.min.css';
// @import '~mdb-ui-kit/css/mdb.min.css';



ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
