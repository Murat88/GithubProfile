// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// YENİ EKLENEN ADIM: BrowserRouter'ı içeri aktarıyoruz
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* YENİ EKLENEN ADIM: App bileşenini BrowserRouter içine alıyoruz */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)