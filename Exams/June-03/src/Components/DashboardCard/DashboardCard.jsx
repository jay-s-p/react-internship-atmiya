import './DashboardCard.css'

const DashboardCard = (props) => {
  return (
    <>
      <div className="dashboard-card w-100">
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