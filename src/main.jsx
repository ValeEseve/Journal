import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CalendarProvider from './context/CalendarContext.jsx'
import JournalContextProvider from './context/JournalContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalendarProvider>
      <JournalContextProvider>
        <App />
      </JournalContextProvider>
    </CalendarProvider>
  </StrictMode>,
)
