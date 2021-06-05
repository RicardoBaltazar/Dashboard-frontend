import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { NotificationProvider } from './context/notification';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <NotificationProvider>
      <App />
    </NotificationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
