import './LineText.css'

const LineText = (props) => {
  return (
    <>
      <div className='line-text-container'>
        <div className='line-text-line' style={{ background: props.color }}></div>
        {props?.children}
      </div>
    </>
  )
}

export default LineText