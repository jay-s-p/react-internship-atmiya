import './App.css'
import { Routes, Route, Outlet, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import OrderPlaced from './pages/OrderPlaced'
import NotFound from './pages/NotFound'
import MainNavbar from './layout/MainNavbar'
import Products from './pages/Products'
import Featured from './components/FeaturedProduct'
import NewProduct from './components/NewProduct'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainNavbar />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} >
          {/* Nested Routes */}
          <Route path='featured' element={<Featured />} />
          <Route path='new' element={<NewProduct />} />
        </Route>
      </Route>
      <Route path="order-placed" element={<OrderPlaced />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
