import { useEffect, useState } from 'react'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'

function App() {
  
  // const [selected, setSelected] = useState(() => Number(localStorage.getItem("selectedItem")) || 'home');
  const [selected, setSelected] = useState(() => localStorage.getItem('selectedItem') || 'home');


  useEffect(() => {
    localStorage.setItem("selectedItem", selected);
  }, [selected]);

  const navItems = [
    ["home", <Home />],
    ["about", <About />, "About Us"],
    ["services", <Services />, "Our Services"],
    ["portfolio", <Portfolio />],
    ["contact", <Contact />, "Get in Touch"]
  ]


  return (
    <>
      <Navbar selected={selected} setSelected={setSelected} navItems={navItems} />
      <div className='grid p-5'>
        <h1 className='capitalize leading-tight font-serif text-5xl m-auto'>{navItems.find(item => item[0] === selected)[2] || selected}</h1>
      </div>
      {navItems.find(item => item[0] === selected)[1]}
    </>
  )
}

export default App
