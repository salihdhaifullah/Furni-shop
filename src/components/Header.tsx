import {CiSearch} from "react-icons/ci";

const Header = () => {
    return (
        <header className="flex flex-row justify-between p-2">
            <h1 className="text-3xl">Furni.shop</h1>

            <div className="flex flex-row items-center gap-4">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Features</a>
                <a href="/">Contact</a>
            </div>

            <div className="flex flex-row items-center justify-center gap-4">
                <CiSearch className="text-4xl"/>
                <div className="space-y-2">
                    <div className="flex justify-end">
                        <div className="w-5 h-0.5 bg-black rounded-full"></div>
                    </div>
                    <div className="w-10 h-0.5 bg-black rounded-full"></div>
                    <div className="w-5 h-0.5 bg-black rounded-full"></div>
                </div>
            </div>
        </header>
    )
}

export default Header