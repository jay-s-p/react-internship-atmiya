

const Card = ({data, i}) => {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-3">
            <center>
              <img src={`https://picsum.photos/20${i}/30${i}`} className=" rounded h-75 w-75" />
              <p>
                <font color="gray"><b>View Profile</b></font>
              </p>
            </center>
          </div>
          <div className="col-6">
            <h3>
              <font color="green">{data.name}</font>
            </h3>
            <p className="text-primary"><b>{data.experience} of experience</b></p>
            <p><b>{data.speciality}</b></p>
            <p><b>{data.address}</b></p>
            <p><b>Rs. {data.consult_fee} Consultation fee at clinic</b></p>
            <p><b>4.8 <font color="gray">355 Ratings</font></b></p>
          </div>
          <div className="col-3">
            <p className="fw-bold">{data.schedule}</p>
            <button type="button" className="btn btn-primary">Video Consult</button><br /><br />
            <button type="button" className="btn btn-success">Enquire Now</button>
            <p className="pt-3">
              <font color="gray"><b>Get Direction</b></font>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card