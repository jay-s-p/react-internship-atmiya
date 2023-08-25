import { useNavigate } from 'react-router-dom'

const Home = () => {
  
  const navigate = useNavigate()

  const handleOrderPlace = () => {
    navigate('/order-placed')
  }

  return (
    <>
      <h1>
        Home Page
      </h1>
      <button onClick={handleOrderPlace}>Place Order</button>
    </>
  )
}

export default Home