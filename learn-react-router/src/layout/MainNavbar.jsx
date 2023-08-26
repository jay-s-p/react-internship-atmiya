import { NavLink, Outlet } from 'react-router-dom'

const MainNavbar = () => {

  const navClassName = ({ isActive }) =>
    isActive ?
      "nav-active" // This class will be added to the active link.
      :
      "" // This class will be added to the inactive link.

  return (
    <>
      <nav>
        {/* By default, NavLink will add the class "active" to the active link. */}
        {/* We can override this behavior by passing a function to the "className" prop. */}
        {/* The function will receive an object with a property "isActive" that will be true if the link is active. */}
        <NavLink className={navClassName} to="">Home</NavLink>
        <NavLink className={navClassName} to="about">About</NavLink>
        <NavLink className={navClassName} to="products">Products</NavLink>
        <NavLink className={navClassName} to="users">Users</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default MainNavbar