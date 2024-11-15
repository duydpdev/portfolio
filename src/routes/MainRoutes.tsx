import { lazy } from 'react'
import { Loadable, MainLayout, NotFound } from '@/@core'

const HomePage = Loadable(lazy(() => import('@/pages/home-page/home-page')))
const ProjectPage = Loadable(lazy(() => import('@/pages/projects/projects')))
const AboutPage = Loadable(lazy(() => import('@/pages/about/about')))

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/project',
          element: <ProjectPage />
        },
        {
          path: '/about',
          element: <AboutPage />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]
}

export default MainRoutes
