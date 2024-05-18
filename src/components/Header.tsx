import { CiSearch } from "react-icons/ci";

const Header = () => {
    return (
        <header className="flex flex-row justify-between p-2 fixed z-50 w-full bg-white">
            <h1 className="sm:text-3xl text-xl text-primary font-bold">Furni.shop</h1>

            <div className="flex-row items-center gap-4 sm:text-base text-sm sm:flex hidden">
                <a href="/#">Home</a>
                <a href="/#about">About</a>
                <a href="/#products">Products</a>
                <a href="/#contact">Contact</a>
            </div>


            <div className="flex flex-row items-center justify-center gap-4">
                <CiSearch className="sm:text-4xl text-2xl" />
                <div className="sm:space-y-2 space-y-1 group cursor-pointer">
                    <div className="flex justify-end group-hover:justify-start">
                        <div className="sm:w-5 w-2.5 h-0.5 group-hover:bg-black bg-gray-600 rounded-full"></div>
                    </div>

                    <div className="sm:w-10 w-5 h-0.5 group-hover:bg-black bg-gray-600 rounded-full"></div>

                    <div className="flex group-hover:justify-end justify-start">
                        <div className="sm:w-5 w-2.5 h-0.5 group-hover:bg-black bg-gray-600 rounded-full"></div>
                    </div>

                    <div className="absolute transition-all ease-in-out flex flex-col w-80 bg-primary border rounded shadow-lg p-2 group-hover:right-0 -right-80 z-20">
                        <a className="block px-4 py-2 w-full text-white hover:bg-[rgba(255,255,255,0.1)]" href="/#">Home</a>
                        <a className="block px-4 py-2 w-full text-white hover:bg-[rgba(255,255,255,0.1)]" href="/#about">About</a>
                        <a className="block px-4 py-2 w-full text-white hover:bg-[rgba(255,255,255,0.1)]" href="/#products">Products</a>
                        <a className="block px-4 py-2 w-full text-white hover:bg-[rgba(255,255,255,0.1)]" href="/#contact">Contact</a>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header