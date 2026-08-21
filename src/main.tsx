import React from 'react';
import ReactDOM from 'react-dom/client';
import '@gravity-ui/uikit/styles/styles.css';
import '@gravity-ui/page-constructor/styles/styles.css';
import './theme/fonts.css';
import './theme/theme.css';
import {App} from './app/App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
