import APIdata from './data.json'
import Card from './Card'


function App() {

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <h1 className="ms-5"><b>
                <font color="blue">Medi</font>pract
              </b></h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active m-auto" aria-current="page" href="#"><b>Find Doctors</b></a>
                </li>
              </ul>
            </div>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark me-3" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <b>Security &amp; help</b>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <button type="button" className="btn btn-outline-secondary me-4">Login</button>
            <button type="button" className="btn btn-primary">Sign up</button>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
          <div className="container-fluid">
            <form className="d-flex">
              <input className="form-control ms-5" type="search" placeholder="Rajkot Kalavad Road" aria-label="Search" />
              <input className="form-control me-2" type="search" placeholder="Dentist" aria-label="Search" />
            </form>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <div className="container-fluid">
            <button type="button" className="btn btn-light">Video Consult</button>
            <button type="button" className="btn btn-light ">Available Now</button>
            <button type="button" className="btn btn-light ">Gender</button>
            <button type="button" className="btn btn-light ">Consultation Fee</button>
            <button type="button" className="btn btn-light ">Top Rated</button>
            <button type="button" className="btn btn-light ">Deals</button>
            <button type="button" className="btn btn-light ">Rating</button>
            <p className="text-white">Sort by
              <button type="button" className="btn btn-light ">Relevance</button>
            </p>
          </div>
        </nav>
        {
          APIdata.map((data, i) => {
            return <Card data={data} key={i} i={i}/>
          })
        }
      </div>
    </>
  )
}

export default App
