import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.tsx'
import './index.css'
import { AuthProvider } from './contexts/auth-context.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextUIProvider } from '@nextui-org/react'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <StrictMode>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </StrictMode>
    </AuthProvider>
  </QueryClientProvider>
)
