import Navbar from '../Components/DashboardNavbar'

import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <Navbar data={[{ name: "Dashboard", checked: true }, { name: "Live Status" }]} />
      </div>
    </>
  )
}

export default Dashboard