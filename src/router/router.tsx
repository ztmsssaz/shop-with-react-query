// @ts-nocheck

import {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from '../layout'
import FallbackLoading from '../components/ui/fallbackLoading'

const App = () => <h2>App page</h2>
const Login = lazy(() => import('../pages/login'))
const Shop = lazy(() => import('../pages/shop/shop'))
const Cart = lazy(() => import('../pages/cart/cart'))
const AboutUs = () => <h2>AboutUs page</h2>

const MainRouter = () => {
  // #ignore eslint
  return (
    <Router>
      <Suspense fallback={<FallbackLoading />}>
        <Layout>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<Login />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/aboutus' element={<AboutUs />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  )
}

export default MainRouter
