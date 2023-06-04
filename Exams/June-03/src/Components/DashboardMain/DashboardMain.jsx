import './DashboardMain.css'

import DashboardMainLeft from './DashboardMainLeft';
import DashboardMainRight from './DashboardMainRight';

const DashboardMain = ({data}) => {
  return (
    <>
      <div className="row w-100 m-0 p-0 px-xl-2 px-xxl-4">
        <DashboardMainLeft data={data.left}  />
        <DashboardMainRight data={data.right} />
      </div>
    </>
  )
}

export default DashboardMain