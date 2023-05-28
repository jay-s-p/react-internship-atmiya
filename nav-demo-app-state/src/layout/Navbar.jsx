import React, { useState, useEffect } from 'react';
import NavItems from "./NavItems"

function Navbar({ selected, setSelected, navItems }) {

  const [isDesktop, setIsDesktop] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => { setIsDesktop(window.innerWidth >= 987); }; handleResize()
    window.addEventListener("resize", handleResize);
    return () => { window.removeEventListener("resize", handleResize); };
  }, []);

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="text-white font-bold text-xl">Z z z</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex flex-col md:flex-row items-baseline space-x-4">
                {
                  navItems.map((nav) => <NavItems id={nav[0]} selected={selected} setSelected={setSelected} />)
                }
              </div>
            </div>
            <div className='block md:hidden'>
              <button onClick={() => setNavOpen(!navOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out" aria-label="Main menu" aria-expanded="false">
                  <svg className='h-6 w-6' stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path  className={`${navOpen ? "hidden" : "block"} `}  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    <path  className={`${navOpen ? "block" : "hidden"} `}  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav className={` md:hidden bg-gray-800 ${navOpen ? "flex" : "hidden"} flex-col`}>
        {
          navItems.map((nav) => <NavItems id={nav[0]} selected={selected} setSelected={setSelected} />)
        }
      </nav>
    </>
  );
}

export default Navbar;
