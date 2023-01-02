import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Router from './components/Router'
import FlexWrapProvider from './provider/FlexWrapProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FlexWrapProvider>
      <App>
        <Router />
      </App>
    </FlexWrapProvider>
  </React.StrictMode>,
)
