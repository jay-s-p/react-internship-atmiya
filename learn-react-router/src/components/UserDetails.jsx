import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const { userId } = useParams()
  return (
    <>
      <h3>Hello, {userId}</h3>
    </>
  )
}

export default UserDetails