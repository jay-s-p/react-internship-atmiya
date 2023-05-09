const ListItemImageTitle = ({ image, title, className = "", color = "#00000077", setToppings }) => {
    const id = `react-option-${title}`
    return (
        <>
            <li className="mx-auto w-full select-none" >
                <input type="checkbox" id={id} defaultValue className="hidden peer" required onChange={()=>{ setToppings(e => { /* console.log(e[title]); */ return { ...e, [title]: !e[title] } })}} />
                <label htmlFor={id} className={`w-full select-none inline-flex justify-center  p-5 text-gray-500 bg-white border-4 border-gray-200 shadow-sm rounded-3xl cursor-pointer hover:shadow-lg hover:border-gray-300 active:border-gray-400 active:shadow-none active:scale-95 transition-all peer-checked:border-blue-500 peer-checked:bg-blue-100 peer-checked:text-gray-800  ${className}`}>
                    <div className="flex flex-col justify-center">
                        <img src={image} className="h-10 select-none object-contain" style={{ filter: `drop-shadow(0px 3px 1em ${color})` }} />
                        <div className="w-full text-lg font-semibold mt-3 select-none">{title}</div>
                    </div>
                </label>
            </li>
        </>
    )
}

export default ListItemImageTitle