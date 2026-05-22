import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// El motor de idiomas que acabamos de instalar
import './i18n'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);