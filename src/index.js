import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Amplify } from 'aws-amplify';
//import reportWebVitals from './reportWebVitals';

Amplify.configure({
  API: [
        {
            name: 'ChatAndRecommendation',
            endpoint: 'https://k29zm6imci.execute-api.us-east-1.amazonaws.com/testV1', 
            region: 'us-east-1' 
        },
        {
            name: 'Order', 
            endpoint: 'https://1fpg5htwgl.execute-api.us-east-1.amazonaws.com/v3', 
            region: 'us-east-1' 
        }
    ]
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
