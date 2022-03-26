import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
// import App from './App';
import Item from './Item';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Checkout from "./Checkout";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Item />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  </Router>,
  // <React.StrictMode>
  //   <Item />
  // </React.StrictMode>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();