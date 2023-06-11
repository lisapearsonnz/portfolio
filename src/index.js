import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Animate, initTE } from "tw-elements";
initTE({ Animate });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
