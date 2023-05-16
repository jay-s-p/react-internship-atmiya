
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import NoFoundPage from './pages/404'
import './assets/index.css'

function App() {

  const navItems = [
    ["home", "/"],
    ["about", "/about"],
    ["services", "/services"],
    ["portfolio", "/portfolio"],
    ["contact", "/contact"],
  ]

  return (
    <>
    <div className="h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar navItems={navItems} />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="*" element={<NoFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
