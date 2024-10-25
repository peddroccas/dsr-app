import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.tsx'
import './index.css'
import { AuthProvider } from './contexts/auth-context.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StoreProvider } from './contexts/store-context.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <StoreProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </StoreProvider>
    </AuthProvider>
  </QueryClientProvider>
)
