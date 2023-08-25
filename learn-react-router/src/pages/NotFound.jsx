import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <div style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{
          textAlign: 'center',
          color: 'red',
          fontWeight: 'bold',
          margin: '0'
        }}>404</h1>
        <h2 style={{
          textAlign: 'center',
          color: '#ffa0a0',
          fontWeight: 'bold'
        }}>Page Not Found</h2>
        <Link to="/">
          <button>
            Go to Home Page
          </button>
        </Link>
      </div>
    </>
  )
}

export default NotFound