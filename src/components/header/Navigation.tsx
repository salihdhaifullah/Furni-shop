const Navigation = () => {
    return (
        <div className="min-w-full mx-[10%] inline-flex justify-between items-center z-[200]">
            <div className="text-xl font-semibold inline-flex">AR shakir</div>

            <ul className="inline-flex items-center ml-8 font-[500]">

                <li className="px-3">
                Product
                </li>

                <li className="px-3">
                Template
                </li>

                <li className="px-3">
                    Blog
                </li>

                <li className="px-3">
                Pricing
                </li>

            </ul>

            <ul className="flex justify-between items-center font-[500]">
                <li className="mr-4">
                Sign in
                </li>

                <li className="bg-[#F57059] ml-4 px-6 py-2 rounded-[24px] text-white">
                Start free
                </li>
            </ul>

        </div>
    )
}

export default Navigation


