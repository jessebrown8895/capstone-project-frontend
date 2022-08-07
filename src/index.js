import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CustomerProvider } from "./context/Customer";
import { BarberProvider } from "./context/Barber"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomerProvider>
      <BarberProvider>
        <App />
      </BarberProvider>
    </CustomerProvider>
  </React.StrictMode>
);

