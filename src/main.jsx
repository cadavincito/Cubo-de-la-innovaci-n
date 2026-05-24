import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// El motor de idiomas que acabamos de instalar
import './i18n';
import './styles/App.css';
import './styles/responsive.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);