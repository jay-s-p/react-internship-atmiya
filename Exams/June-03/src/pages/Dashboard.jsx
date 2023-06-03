import Navbar from './../Components/DashboardNavbar'
import Header from './../Components/DashboardHeader/';
import DashboardMain from './../Components/DashboardMain/';

import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <div className='main-container'>
        <div className="dashboard-container ">
          <Navbar data={[{ name: "Dashboard", checked: true }, { name: "Live Status" }]} />
          <Header />
          <DashboardMain />
        </div>
      </div>
    </>
  )
}

export default Dashboard