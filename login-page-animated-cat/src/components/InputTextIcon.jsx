
function InputTextIcon({ Icon, title, placeholder, className, type, ...attr }) {
    return <div className={"flex flex-col w-full "+className}>
        <label htmlFor="username" className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2">
            {title}
        </label>
        <div className="relative">
            <div className="absolute text-gray-900 border-[--border-color] flex items-center px-3 border-r h-full cursor-pointer">
                <Icon stroke="1"/>
            </div>
            <input type={type} id="username" {...attr} className="focus:outline-transparent text-gray-900 border placeholder-[#6e553c88] bg-[--blur-bg] font-normal h-12 flex items-center pl-16 text-md border-[--border-color] rounded w-full min-w-none" placeholder={placeholder} />
        </div>
    </div>;
}

export default InputTextIcon;