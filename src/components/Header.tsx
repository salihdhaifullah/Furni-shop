const Header = () => {
    return (
        <header className="flex flex-row items-center justify-between py-2 px-8 sm:px-12 md:px-20 lg:px-28 border h-14 fixed z-50 w-full bg-white">
            <h1 className="sm:text-3xl text-2xl title-font font-bold text-primary">Furni.shop</h1>

            <div className="flex-row gap-4 sm:text-base text-sm sm:flex hidden">
                <a href="/#" className="hover:text-blue-500 hover:underline">Home</a>
                <a href="/#about" className="hover:text-blue-500 hover:underline">About</a>
                <a href="/#products" className="hover:text-blue-500 hover:underline">Products</a>
                <a href="/#contact" className="hover:text-blue-500 hover:underline">Contact</a>
            </div>


            <div id="hamburger-menu" className="sm:space-y-2 space-y-1 group p-2 hover:bg-gray-100 rounded-md cursor-pointer flex flex-col sm:hidden">
                <div className="flex justify-end group-hover:justify-start">
                    <div className="w-4 h-0.5 group-hover:bg-black bg-gray-600 rounded-full"></div>
                </div>

                <div className="w-8 h-0.5 group-hover:bg-black bg-gray-600 rounded-full"></div>

                <div className="flex group-hover:justify-end justify-start">
                    <div className="w-4 h-0.5 group-hover:bg-black bg-gray-600 rounded-full"></div>
                </div>

                <div className="absolute transition-all ease-in-out flex flex-col w-80 bg-primary border rounded shadow-lg p-2 -right-80 z-20">
                    <a className="block px-4 py-2 w-full text-white hover:bg-[rgba(255,255,255,0.1)]" href="/#">Home</a>
                    <a className="block px-4 py-2 w-full text-white hover:bg-[rgba(255,255,255,0.1)]" href="/#about">About</a>
                    <a className="block px-4 py-2 w-full text-white hover:bg-[rgba(255,255,255,0.1)]" href="/#products">Products</a>
                    <a className="block px-4 py-2 w-full text-white hover:bg-[rgba(255,255,255,0.1)]" href="/#contact">Contact</a>
                </div>
            </div>
        </header>
    )
}

export default Header;