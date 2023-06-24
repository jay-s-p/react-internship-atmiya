import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";





const Navbar = ({ navLinks }) => {
    const initial_url_option = window.location.href.substring(window.location.href.lastIndexOf('/')).toString();

    let selectedPage = navLinks.findIndex(nav => nav.url === initial_url_option);
    const [navSelected, setNavSelected] = useState(selectedPage);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ paddingLeft: '2rem', height: "10vh" }}>
                <a className="navbar-brand pos" href="/">
                    {/* <img src="/logo.png" width="30" height="30" className="d-inline-block align-top" alt="" /> */}
                    {/* return <div className="m-auto" style={{ fontFamily: "Gabriola", fontSize: "2em" }} >{navLinks["nav_" + navSelected] ? navLinks["nav_" + navSelected] : "Not Found"}</div> */}
                    <div className="m-auto" style={{ fontFamily: "Gabriola", fontSize: "2em" }} >{navLinks[navSelected]?.title ? navLinks[navSelected]?.title : "Not Found"}</div>

                </a>
                <button className="navbar-toggler me-3" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse m-auto" id="navbarNav" >
                    <ul className="navbar-nav ms-auto me-5">
                        {
                            navLinks.map((nav, index) => {
                                return (
                                    <li className="nav-item">
                                        <Link className={`nav-link ${navSelected === index ? 'active' : ''}`} to={navLinks[index].url} onClick={() => { setNavSelected(index) }}>{navLinks[index].title}</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;
