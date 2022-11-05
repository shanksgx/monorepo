import { lazy } from 'react'

const About = lazy(() => import('@/pages/About/index'))
const Recoil = lazy(() => import('@/pages/Recoil/index'))

const Routes = [
  {
    path: '/',
    element: <About />
  },
  {
    path: '/recoil',
    element: <Recoil />
  }
]

export default Routes
