import React from 'react';
import ReactDOM from 'react-dom/client';
import '@gravity-ui/uikit/styles/styles.css';
import '@gravity-ui/page-constructor/styles/styles.css';
import './fonts.css';
import './theme.css';
import {App} from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
