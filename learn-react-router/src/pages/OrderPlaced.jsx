import { useNavigate } from 'react-router-dom'

const OrderPlaced = () => {

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <>
      <h2 style={{
        textAlign: 'center',
        marginTop: '20px',
        color: 'green',
        fontWeight: 'bold'
      }}>
        Thank you for your order. Your order has been placed successfully.
      </h2>
      <button onClick={handleGoBack}>Go back</button>
    </>
  )
}

export default OrderPlaced