import React from 'react';
import ReactDOM from 'react-dom/client';
import "./global.css";
import "./styleguide.css";
import reportWebVitals from './reportWebVitals';
import { Content } from './screens/Content/Content';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Content />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
