import './DashboardCard.css'

const DashboardCard = (props) => {
  return (
    <>
      <div className="dashboard-card">
        {
          props?.title &&
          <>
            <div className='dashboard-card-title'>{props?.title}</div>
            <div className='dashboard-card-line'></div>
          </>
        }
        {props?.children}
      </div>
    </>
  )
}

export default DashboardCard