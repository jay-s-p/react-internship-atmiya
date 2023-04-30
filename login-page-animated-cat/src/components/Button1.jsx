
const Button1 = ({ content, id }) => {
    const funcDown = (e) => {
        document.getElementById(id).style.translate = "6px 6px"
    }
    const funcUp = (e) => {
        document.getElementById(id).style.translate = "0 0"
    }
    return (<>
        <button  className="group relative w-full" onMouseDown={funcDown} onKeyDown={funcDown} onMouseUp={funcUp} onKeyUp={funcUp}>
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-[--color-1]  transition-transform group-hover:translate-y-1.5 group-hover:translate-x-1.5  group-focus:translate-y-1.5 group-focus:translate-x-1.5" />
            <span id={id} className="border-black relative w-full text-center inline-block border-2  px-8 py-3 text-sm font-bold uppercase tracking-widest">
                {content}
            </span>
        </button>
    </>)
}

export default Button1