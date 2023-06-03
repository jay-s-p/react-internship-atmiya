import './TextImage.css'

const TextImage = (props) => {
  console.log(props?.image)
  return (
    <>
      <div className="d-flex">
        {props?.text}
        {
          Array.isArray(props?.image) ?
            <div className={`icon-gradient _${props?.image[1]} ms-auto align-self-center`}>
              {props?.image[0]}
            </div> :
            props?.image
        }
      </div>
    </>
  )
}

export default TextImage