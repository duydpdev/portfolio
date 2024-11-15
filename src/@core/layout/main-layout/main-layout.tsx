import { Footer, Header } from '@/@core'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
