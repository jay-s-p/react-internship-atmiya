import { NavLink, Outlet } from 'react-router-dom'
import users from '../json/users.json'

const Users = () => {
  return (
    <>
      <h1>Users</h1>
      {
        users.map((userId) => (
          <h4 key={userId} style={{ margin: "1em 2em" }}>
            <NavLink to={userId}>{userId}</NavLink>
          </h4>
        ))
      }
      <Outlet />
    </>
  )
}

export default Users