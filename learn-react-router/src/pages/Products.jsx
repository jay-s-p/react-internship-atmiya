import ProductNavbar from "../layout/ProductNavbar"
import { Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ProductNavbar />
      <Outlet />
    </>
  )
}

export default Products