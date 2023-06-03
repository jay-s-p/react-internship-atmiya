import './Navbar.css'

const Navbar = ({ data }) => {
  return (
    <>
        <div className='dashboard-navbar-container'>
          <nav className='dashboard-navbar-navbar'>
            <ul className='dashboard-navbar-list'>
              {
                data?.map((item, index) =>
                    <li key={index}>
                      <input className='dashboard-navbar-nav-input' defaultChecked={item?.checked} name='dashboard-nav' type="radio" id={item?.name.replace(/\s+/g, '_').toLowerCase()} />
                      <label className='dashboard-navbar-nav-label' htmlFor={item?.name.replace(/\s+/g, '_').toLowerCase()}>{item.name}</label>
                    </li>
                )
              }
            </ul>
          </nav>
        </div>
    </>
  )
}

export default Navbar