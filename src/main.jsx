import { StrictMode } from 'react'
import { Toaster } from 'sonner'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx';
import { PeriodProvider } from './context/PeriodContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PeriodProvider>
          <App />
          <Toaster
            position="bottom-right"
          />
        </PeriodProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)