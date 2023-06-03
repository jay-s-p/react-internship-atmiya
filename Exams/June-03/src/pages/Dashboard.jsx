import './Dashboard.css'

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container ">
        <div className='dashboard-navbar-container'>
          <nav className='dashboard-navbar-navbar'>
            <ul className='dashboard-navbar-list'>
              <li>
                <input className='dashboard-navbar-nav-input' name='dashboard-nav' type="radio" defaultChecked={true} id="nav-dashboard" />
                <label className='dashboard-navbar-nav-label' htmlFor="nav-dashboard">Dashboard</label>
              </li>
              <li>
                <input className='dashboard-navbar-nav-input' name='dashboard-nav' type="radio" id="nav-live-status" />
                <label className='dashboard-navbar-nav-label' htmlFor="nav-live-status">Live Status</label>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Dashboard