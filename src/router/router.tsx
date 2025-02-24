// @ts-nocheck

import {Suspense} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../layout'
const App = () => <h2>App page</h2>
const Login = () => <h2>Login page</h2>
const Shop = () => <h2>shop page</h2>
const Cart = () => <h2>Cart page</h2>
const AboutUs = () => <h2>AboutUs page</h2>

const MainRouter = () => {
  // #ignore eslint
  return (
    <BrowserRouter>
      <Suspense>
        <Layout>
          <Routes>
            <Route path='/' element={<App />} />
          </Routes>
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
          <Routes>
            <Route path='/shop' element={<Shop />} />
          </Routes>
          <Routes>
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Routes>
            <Route path='/aboutus' element={<AboutUs />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  )
}

export default MainRouter
