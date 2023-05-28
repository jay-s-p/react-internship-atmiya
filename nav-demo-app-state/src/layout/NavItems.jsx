

const NavItems = ({ id, name, setSelected, selected }) => {

  const handleSelect = (event) => setSelected(event.target.name);

  const className = `${selected == id  && 'bg-gray-700 ' || ""}text-white text-gray-300 cursor-pointer hover:text-white px-3 py-2 rounded-md text-sm font-medium `

  return (
    <>

      <label className={className}>
        <input type="radio" name={name ? name : id} checked={selected === id} onChange={handleSelect} className="hidden" />
        <span className="capitalize">{id}</span>
      </label>
    </>
  )
}

export default NavItems