import './App.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import OrderPlaced from './pages/OrderPlaced'
import NotFound from './pages/NotFound'
import MainNavbar from './layout/MainNavbar'
import Products from './pages/Products'
import Featured from './components/FeaturedProduct'
import NewProduct from './components/NewProduct'
import ProductHome from './components/ProductHome'
import Users from './pages/Users'
import User from './components/UserDetails'
import AdminDetails from './components/AdminDetails'
import Service from './pages/Service'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainNavbar />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} >
          {/* Nested Routes */}
          <Route index element={<ProductHome />} />
          <Route path='featured' element={<Featured />} />
          <Route path='new' element={<NewProduct />} />
        </Route>
        <Route exact path="users" element={<Users />}>
          {/* Dynamic Route */}
          <Route path=":userId" element={<User />} />
          <Route path="admin" element={<AdminDetails />} />
        </Route>
        <Route path='services' element={<Service />} />
      </Route>
      <Route path="order-placed" element={<OrderPlaced />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
