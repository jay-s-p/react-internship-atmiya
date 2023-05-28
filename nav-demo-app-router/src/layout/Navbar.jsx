import { Link, Outlet, useLocation } from 'react-router-dom';
import NavItems from "./NavItems"
import React, { useEffect, useState } from 'react';


const Navbar = ({ navItems }) => {

  const location = useLocation();

  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false);
  }, [location]);

  const isActive = (pathname) => {
    return location.pathname === pathname ? 'bg-gray-300' : '';
  };

  return (
    <>
      <nav className="bg-gray-100  fixed w-full h-fit z-50 md:h-fit">
        <div className="mx-auto h-fit">
          <div className="h-fit flex flex-col items-center justify-between 
                          md:flex-row ">
            <input className=' hidden navbar-main' type="checkbox" id="navbar-inp" />
            {/* Title text */}
            <div className="h-[5vh]  w-full flex justify-between items-center my-5 px-6 flex-shrink-0
                            md:w-fit">
              <a href="/" className="text-gray-600 font-bold text-4xl font-serif select-none transition-all duration-500 hover:text-white ">Z z z</a>
              <label htmlFor="navbar-inp" className=' block md:hidden'>
                {/* <svg className='' viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M21.75 18.75H2.25a.75.75 0 0 1 0-1.5h19.5a.75.75 0 0 1 0 1.5zm0-6H2.25a.75.75 0 0 1 0-1.5h19.5a.75.75 0 0 1 0 1.5zm0-6H2.25a.75.75 0 0 1 0-1.5h19.5a.75.75 0 0 1 0 1.5z"></path></svg> */}
                <svg className='h-6 w-6' stroke="currentColor" fill="none" viewBox="0 0 24 24" onClick={() => setNavOpen(!navOpen)}>
                  <path className={`${navOpen ? "hidden" : "block"} `} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  <path className={`${navOpen ? "block" : "hidden"} `} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
            </div>

            {/* Navigation Links */}
            <div className={`${navOpen ? "block" : "hidden"}  w-full h-[95vh] ring-0 ring-inset ring-red-500 bg-gray-200  mx-5
                             md:block md:h-fit md:bg-transparent `}>
              <div className="h-full flex flex-col justify-center items-center gap-16 font-bold text-3xl
             md:text-xl md:flex-row md:justify-end">
                {
                  navItems.map((nav, id) =>
                    <React.Fragment key={id}>
                      <NavItems setNavOpen={setNavOpen} className={isActive(nav[1])} navText={nav[0]} navPath={nav[1]} name="nav-bar" />
                    </React.Fragment>
                  )
                }
              </div>
            </div>

          </div>
        </div>
      </nav>
      <div className='bg-gray-200 h-full'>
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
