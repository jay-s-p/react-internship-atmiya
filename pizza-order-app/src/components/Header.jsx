const Header = ({title}) => {
    return (
        <>
            <div className="w-full border-b-2 bg-white shadow-sm px-4 py-4 text-4xl font-['Poppins'] font-bold ">
                <div className="text-gradient-1" 
                style={{ filter:"drop-shadow(3px 3px 10px #00ffff55)"}}
                >Create <span className="hidden md:contents">Your Perfect </span>Pizza</div>
            </div>
        </>
    )
}

export default Header