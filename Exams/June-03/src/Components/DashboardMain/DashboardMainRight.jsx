import DashboardCard from '../DashboardCard/DashboardCard'
import LineText from './../LineText/LineText';
import TextImage from './../TextImage/TextImage';

const SMSCreditBalance = () => {
  return (
    <div style={{background: "#141e4a" , opacity: "0", animation: "element-scale 500ms ease 0ms 1 forwards" }} className=' rounded-4 text-white px-3 pt-4 pb-3'>
      <TextImage text={
        <div className='d-flex flex-column m-0'>
          <h6>SMS CREDIT BALANCE</h6>
          <h5>48</h5>
        </div>
      } image={
        <div className='ms-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="white" className="bi bi-telegram" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
          </svg>

        </div>
      } />
      <div style={{ color: "#7c8ac6" }} className=" mt-3 fs-6">This credits are used to sending SMS to your customers.</div>
    </div>
  )
}

const WhatsAppCreditBalance = () => {
  return (
    <div style={{background: "#141e4a" , opacity: "0", animation: "element-scale 500ms ease 100ms 1 forwards" }}  className=' rounded-4 text-white px-3 pt-4 pb-3 mt-3'>
      <TextImage text={
        <div className='d-flex flex-column m-0'>
          <h6>WHATSAPP CREDIT BALANCE</h6>
          <h5>28</h5>
        </div>
      } image={
        <div className='ms-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} fill="white" className="bi bi-telegram" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
          </svg>

        </div>
      } />
      <div style={{ color: "#7c8ac6" }} className=" mt-3 fs-6">This credits are used to sending WhatsApp to your customers.</div>
    </div>
  )
}

const PaymentBreakup = () => {
  return (
    <div  className='mt-3'>
      <DashboardCard  style={{ opacity: "0", animation: "element-scale 500ms ease 200ms 1 forwards" }} title="💳 Payment Breakup">
        <LineText >
          <div>
            <div>Amazon</div>
          </div>
          <div className='fs-5 ms-auto my-auto'>0</div>
        </LineText>
        <LineText color="#f18282">
          <div>
            <div>Card</div>
          </div>
          <div className='fs-5 ms-auto my-auto'>0</div>
        </LineText>
        <LineText color="#c581e8">
          <div>
            <div>Cash</div>
          </div>
          <div className='fs-5 ms-auto my-auto'>1,020</div>
        </LineText>
      </DashboardCard>
    </div>
  )
}

const DashboardMainRight = () => {
  return (
    <>
      <div className="col-12 col-xl-3 m-0 p-0 overflow-hidden mt-3">
        <div className='px-3 m-0 w-100 mt-3'>
          <SMSCreditBalance />
          <WhatsAppCreditBalance />
          <PaymentBreakup />
        </div>
      </div>
    </>
  )
}

export default DashboardMainRight