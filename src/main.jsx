import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='header'>Portfolio</h1>
    <App />
    <footer className="footer">
        <p>&copy; 2025 Kaushal. All rights reserved.</p>
      </footer>
  </StrictMode>,
)
