import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThirdwebProvider } from '@thirdweb-dev/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThirdwebProvider clientId='a0e220a6c0f64f7d5057e0b6067b5aff' activeChain='sepolia'>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
