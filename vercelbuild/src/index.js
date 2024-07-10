import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './intro'; // 상대경로는 모두 src에서 가져온다
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // 여기서 말한 root는 index.html이다
root.render(
 
    <App bgcls="bg-dark fixed-top" textcls="text-white"/>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
