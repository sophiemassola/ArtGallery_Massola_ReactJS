import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Caja from './caja';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Caja nombre='Sophie' apellido='Massola'></Caja>
    <Caja nombre='Juanfe'></Caja>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
