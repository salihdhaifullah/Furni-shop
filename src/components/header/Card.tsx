const Card = () => {
    return (
        <div className="flex flex-wrap px-6 py-3 rounded-lg drop-shadow-lg bg-white w-[300px] h-[160px] absolute z-[1000] bottom-[150px] right-[120px]">
            <div className="min-w-full h-fit">
                <p className="text-md font-semibold w-full">Total Balance</p>
                <div className="flex justify-between items-center w-[50%]">
                    <p className="text-md font-semibold">$4,200</p>
                    <span className="text-md font-[400] text-[#00E1F0]">+14%</span>
                </div>
            </div>

            <div className="grid grid-cols-9 w-full mt-2">

                <ul className="text-[9px] h-fit max-w-fit font-[200] text-[#718EBF] grid col-span-1 mt-[2px]">
                    <li className='pt-[2px]'>10k</li>
                    <li className='pt-[2px]'>4k</li>
                    <li className='pt-[2px]'>2k</li>
                    <li className='pt-[2px]'>0</li>
                </ul>

                <ul className="grid grid-cols-8  col-span-8 gap-2 ">
                    <li className="bg-[#E8F2FF] max-h-[40%] mt-[180%] grid rounded-t-sm "></li>
                    <li className="bg-[#05796B] max-h-[70%] mt-[90%] rounded-t-sm "></li>
                    <li className="bg-[#E8F2FF] max-h-[50%] mt-[150%] rounded-t-sm "></li>
                    <li className="bg-[#05796B] max-h-[20%] mt-[240%] rounded-t-sm "></li>
                    <li className="bg-[#E8F2FF] max-h-[90%] mt-[30%] rounded-t-sm "></li>
                    <li className="bg-[#05796B] max-h-[65%] mt-[105%] rounded-t-sm "></li>
                    <li className="bg-[#E8F2FF] max-h-[40%] mt-[180%] rounded-t-sm "></li>
                    <li className="bg-[#05796B] max-h-[80%] mt-[60%] rounded-t-sm "></li>
                </ul>

            </div>

            <hr className="min-w-full ml-4 mr-2" />
                    <ul className="text-[9px] font-[200] text-center text-[#718EBF] grid grid-cols-9 gap-2 col-span-8 min-w-full">
                        <li className=" text-center"></li>
                        <li className=" text-center">A</li>
                        <li className=" text-center">B</li>
                        <li className=" text-center">C</li>
                        <li className=" text-center">D</li>
                        <li className=" text-center">E</li>
                        <li className=" text-center">F</li>
                        <li className=" text-center">G</li>
                        <li className=" text-center">H</li>
                    </ul>
        </div>
    )
}

export default Card