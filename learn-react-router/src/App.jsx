import './App.css'
import { Routes, Route, Outlet, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import OrderPlaced from './pages/OrderPlaced'

function App() {

  const navClassName = ({ isActive }) =>
    isActive ?
      "nav-active" // This class will be added to the active link.
      :
      "" // This class will be added to the inactive link.

  return (
    <Routes>
      <Route path="/" element={
        <>
          <nav>
            {/* By default, NavLink will add the class "active" to the active link. */}
            {/* We can override this behavior by passing a function to the "className" prop. */}
            {/* The function will receive an object with a property "isActive" that will be true if the link is active. */}
            <NavLink className={navClassName} to="">Home</NavLink>
            <NavLink className={navClassName} to="about">About</NavLink>
          </nav>
          <Outlet />
        </>
      }>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="/order-placed" element={<OrderPlaced />} />
    </Routes>
  )
}

export default App
