import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import RetryButton from "./retryButton.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <RetryButton />
  </React.StrictMode>,
)