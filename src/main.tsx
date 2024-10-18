import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.tsx'
import './index.css'
import { StyledEngineProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <App />
    </StyledEngineProvider>
  </StrictMode>
)
