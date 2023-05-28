import { Link } from "react-router-dom"

const NavItems = ({ navText, navPath, name, className, setNavOpen }) => {
  return (
    <>
      <Link to={navPath} onClick={() => setNavOpen(x => !x)} >
        <label className={`${className} text-gray-800 cursor-pointer  px-3 py-2 rounded-md hover:bg-gray-300 active:bg-gray-400`}>
          <input type="radio" name={name} className="hidden" />
          <span className="capitalize">
            {navText}
          </span>
        </label>
      </Link>
    </>
  )
}

export default NavItems