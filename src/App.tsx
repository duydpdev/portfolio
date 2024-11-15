import { BrowserRouter } from 'react-router-dom'
import ThemeRoutes from '@/routes'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeRoutes />
      </BrowserRouter>
    </>
  )
}
