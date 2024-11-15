import { Footer, Header } from '@/@core'
import { Outlet } from 'react-router-dom'
import bg from '@/assets/section.svg'

const MainLayout: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <div
        style={{
          backgroundImage: `url(${bg})`,
          width: '100%',
          height: 500,
          position: 'absolute',
          top: 0,
          // backgroundRepeat: 'no-repeat',
          zIndex: 0
        }}
      />
      <Header />
      <div
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
