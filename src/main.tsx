import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.tsx'
import './index.css'
import { StyledEngineProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { AuthProvider } from './contexts/auth-context.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <StyledEngineProvider injectFirst>
      <AuthProvider>
        <StrictMode>
          <CssBaseline />
          <App />
        </StrictMode>
      </AuthProvider>
    </StyledEngineProvider>
  </QueryClientProvider>
)
