import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Store } from './context/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Store>
    <App />
  </Store>
)
