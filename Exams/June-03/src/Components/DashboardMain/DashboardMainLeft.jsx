import DashboardCard from '../DashboardCard/DashboardCard'
import LineText from './../LineText/LineText';
import TextImage from './../TextImage/TextImage';


const order_wise_breakup = [
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
]

const TotalSales = () => {
  return (
    <DashboardCard style={{ opacity: "0", animation: "element-scale 500ms ease 0ms 1 forwards" }}>
      <TextImage text={
        <div className='d-flex flex-column'>
          <div>TOTAL SALES</div>
          <div>3272</div>
        </div>
      } image={
        [
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-hand-index-thumb-fill" viewBox="0 0 16 16"><path d="M8.5 1.75v2.716l.047-.002c.312-.012.742-.016 1.051.046.28.056.543.18.738.288.273.152.456.385.56.642l.132-.012c.312-.024.794-.038 1.158.108.37.148.689.487.88.716.075.09.141.175.195.248h.582a2 2 0 0 1 1.99 2.199l-.272 2.715a3.5 3.5 0 0 1-.444 1.389l-1.395 2.441A1.5 1.5 0 0 1 12.42 16H6.118a1.5 1.5 0 0 1-1.342-.83l-1.215-2.43L1.07 8.589a1.517 1.517 0 0 1 2.373-1.852L5 8.293V1.75a1.75 1.75 0 0 1 3.5 0z" /></svg>,
          1
        ]} />
      <div className='text-secondary mt-3'>POS + Online</div>
    </DashboardCard>
  )
}

const TotalOrders = () => {
  return (
    <DashboardCard  style={{ opacity: "0", animation: "element-scale 500ms ease 100ms 1 forwards" }}>
      <TextImage text={
        <div className='d-flex  flex-column'>
          <div>TOTAL ORDERS</div>
          <div>4</div>
        </div>
      } image={
        [
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z" /></svg>,
          2
        ]} />
      <div className='text-secondary mt-3'>Total orders created</div>
    </DashboardCard>
  )
}

const Expenses = () => {
  return (
    <DashboardCard style={{ opacity: "0", animation: "element-scale 500ms ease 300ms 1 forwards" }}>
      <TextImage text={
        <div className='d-flex flex-column'>
          <div>EXPENSES</div>
          <div>0</div>
        </div>
      } image={
        [
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16"><path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" /><path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" /><path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" /><path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" /></svg>,
          3
        ]} />
      <div className='text-secondary mt-3'>Expenses recorded</div>
    </DashboardCard>
  )
}

const Purchases = () => {
  return (
    <DashboardCard  style={{ opacity: "0", animation: "element-scale 500ms ease 400ms 1 forwards" }}>
      <TextImage text={
        <div className='d-flex flex-column'>
          <div>PURCHASES</div>
          <div>0</div>
        </div>
      } image={
        [
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-bar-chart-fill" viewBox="0 0 16 16"><path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" /></svg>,
          0
        ]} />
      <div className='text-secondary mt-3'>Purchases recorded</div>
    </DashboardCard>
  )
}

const OrderWiseBreakup = () => {
  return (
    <DashboardCard title="🛍️ Order-wise Breakup"  style={{ opacity: "0", animation: "element-scale 500ms ease 500ms 1 forwards" }} >
      <div className='d-flex flex-column '>
        <div className='row'>

          {
            order_wise_breakup?.map((item, index) =>
              <div key={index} className='col-12 col-sm-6 col-md-3 d-flex justify-content-center align-items-center flex-column py-3'>
                <div className='text-uppercase text-secondary text fw-semibold'>{item.name}</div>
                <div className='fw-bold'>{item.count.toLocaleString('en-IN')}</div>
                <div className='fw-semibold'>{item.order}</div>
                <div className=' text-success '>{item.percentage}</div>
              </div>
            )
          }

        </div>
        <div className='text-secondary'>Bifurcation of orders based on order type</div>

      </div>
    </DashboardCard>
  )
}

const CreditSales = () => {
  return (
    <DashboardCard title="💡Credit Transaction"  style={{ opacity: "0", animation: "element-scale 500ms ease 600ms 1 forwards" }}>
      <LineText color="#2cde2c">
        <div>
          <div>Credit Sales</div>
          <div className='fs-6'>Gross credit sales: 97,692</div>
        </div>
        <div className='fs-5 ms-auto my-auto'>2,253</div>
      </LineText>
      <LineText color="#f18282">
        <div>
          <div>Credit Sales</div>
          <div className='fs-6'>Gross credit sales: 0</div>
        </div>
        <div className='fs-5 ms-auto my-auto'>0</div>
      </LineText>
    </DashboardCard>
  )
}

const RevenueLeakage = () => {
  return (
    <DashboardCard title="🔊 Revenue Leakage"  style={{ opacity: "0", animation: "element-scale 500ms ease 700ms 1 forwards" }}>
      <div className='d-flex '>
        <LineText color="#2cde2c">Bills Modified : 0</LineText>
        <LineText color="#2cde2c">Bills Cancels : 0</LineText>
        <LineText color="#2cde2c">NC Items : 0</LineText>
      </div>
    </DashboardCard>
  )
}

const Discounts = () => {
  return (
    <DashboardCard  style={{ opacity: "0", animation: "element-scale 500ms ease 800ms 1 forwards" }}>
      <div className=' fw-semibold'>Discounts</div>
      <div className='d-flex  justify-content-center align-items-center mt-1'>
        <ul>
          <li className='text-danger'> <span className='text-black'> POS : 150 </span></li>
          <li className='text-danger'> <span className='text-black'> Online: 0 </span></li>
        </ul>
        <div className='ms-auto'>150</div>
      </div>
    </DashboardCard>
  )
}

const DashboardMainLeft = () => {
  return (
    <>
      <div className="col-12 col-xl-9 m-0 p-0 mt-3">
        <div className="row w-100 m-0 px-3 px-md-0 h-auto">
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <TotalSales />
          </div>
          <div className="col-12 col-sm-6 col-lg-3 py-2 px-2">
            <TotalOrders />
          </div>
          <div className="col-12 col-md-6 col-lg-3 py-2 px-2">
            <Expenses />
          </div>
          <div className="col-12 col-md-6 col-lg-3 py-2 px-2">
            <Purchases />
          </div>
        </div>
        <div className="row w-100 m-0 mt-3 px-3 px-md-0 h-auto">
          <div className="col-12 col-lg-8 py-2 px-2">
            <OrderWiseBreakup />
          </div>
          <div className="col-12 col-lg-4 py-2 px-2">
            <CreditSales />
          </div>
        </div>
        <div className="row w-100 m-0 mt-3 px-3 px-md-0 h-auto">
          <div className="col-12 col-lg-8 py-2 px-2">
            <RevenueLeakage />
          </div>
          <div className="col-12 col-lg-4 py-2 px-2">
            <Discounts />
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardMainLeft