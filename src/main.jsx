import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CalendarProvider from './context/CalendarContext.jsx'
import JournalContextProvider from './context/JournalContext.jsx'
import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CalendarProvider>
        <JournalContextProvider>
          <App />
        </JournalContextProvider>
      </CalendarProvider>
    </ThemeProvider>
  </StrictMode>,
)
