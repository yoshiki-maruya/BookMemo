import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Router from './components/Router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App>
      <Router />
    </App>
  </React.StrictMode>,
)
