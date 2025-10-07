import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './Components/Dashboard.jsx'
import App from './Components/App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
