import React, { useState } from 'react';
import NavItems from "./NavItems"

function Navbar({ selected, setSelected, navItems }) {

  console.log(navItems);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-xl">Z z z</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {
                navItems.map((nav) =><NavItems id={nav[0]} selected={selected} setSelected={setSelected} />)
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
