// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';

// Selecciona el elemento 'root' y crea la raíz del React
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);