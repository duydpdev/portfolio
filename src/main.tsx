import { createRoot } from 'react-dom/client'
import App from '@/App'
import '@/styles/global.scss'
import { AppProvider } from '@/@core'
import './i18n'

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <App />
  </AppProvider>
)