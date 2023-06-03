import Navbar from '../Components/DashboardNavbar'

import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <div className='main-container'>
        <div className="dashboard-container ">
          <Navbar data={[{ name: "Dashboard", checked: true }, { name: "Live Status" }]} />
        </div>
      </div>
    </>
  )
}

export default Dashboard