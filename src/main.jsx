import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <footer className="footer">
        <p>&copy; 2025 Kaushal. All rights reserved.</p>
      </footer>
  </StrictMode>,
)
