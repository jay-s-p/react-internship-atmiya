import { NavLink } from 'react-router-dom'

const ProductNavbar = () => {

  const navClassName = ({ isActive }) =>
    isActive ?
      "nav-active"
      :
      ""

  return (
    <>
      <nav>
        <NavLink className={navClassName} to="featured">Featured</NavLink>
        <NavLink className={navClassName} to="new">New</NavLink>
      </nav>
    </>
  )
}

export default ProductNavbar