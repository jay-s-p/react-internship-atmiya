import './Dashboard.css'

import Navbar from './../Components/DashboardNavbar'
import Header from './../Components/DashboardHeader/';
import DashboardMain from './../Components/DashboardMain/';


const Dashboard = () => {
  const NavbarData = { data: [{ name: "Dashboard", checked: true }, { name: "Live Status" }] }
  const HeaderData = { data: { name: "Jay" } }
  const DashboardData = {
    data: {
      left: {
        total_sales: 3273,
        total_orders: 4,
        expenses: 0,
        purchases: 0,
        order_wise_breakup: [
          {
            name: 'Dining',
            count: 1658,
            order: 1,
            percentage: '0%'
          },
          {
            name: 'Delivery',
            count: 0,
            order: 0,
            percentage: '0%'
          },
          {
            name: 'Pickup',
            count: 595,
            order: 1,
            percentage: '18%'
          },
          {
            name: 'TOKEN',
            count: 1020,
            order: 2,
            percentage: '31%'
          },
        ],
        credit_transaction: {
          sales: 2253,
          gross_sales: 97692,
          credit: 0,
          gross_credit: 0
        },
        revenue_leakage: {
          bills_modified: 0,
          bills_cancels: 0,
          nc_items: 0
        },
        discounts: {
          discount: 150,
          pos: 150,
          online: 0
        }

      },
      right: {
        sms_credit_balance: 48,
        whatsapp_credit_breakup: 28,
        payment_breakup: {
          amazon: 0,
          card: 0,
          cash: 1020,
        }
      }
    }
  }
  return (
    <>
      <div className='main-container'>
        <div className="dashboard-container ">
          <Navbar {...NavbarData} />
          <Header {...HeaderData} />
          <DashboardMain {...DashboardData} />
        </div>
      </div>
    </>
  )
}

export default Dashboard