import './Header.css'

const Header = ({ data = { name: "Jay" } }) => {
  return (
    <>
      <div className="dashboard-header-container">
        <div className="dashboard-header-title-container">
          <h1 className='dashboard-header-title-name'>Welcome, {data.name} <span className='dashboard-header-title-name-emoji'>👋</span></h1>
          <div className='dashboard-header-title-sync'>Last order synced in {new Date().toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })}</div>
        </div>
        <div className="dashboard-header-date-picker-container">
          <input className='dashboard-header-date-picker' defaultValue={new Date().toISOString().slice(0, 10)} type="date" placeholder="Date" />
          <input className='dashboard-header-date-picker header-date-picker-line' defaultValue={new Date().toISOString().slice(0, 10)} type="date" placeholder="Date" />
        </div>
      </div>
    </>
  )
}

export default Header