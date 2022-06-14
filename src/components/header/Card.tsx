const Card = () => {
    return (
        <div className="flex flex-wrap p-6 rounded-lg drop-shadow-lg bg-white w-[300px] h-[160px] absolute z-[1000] bottom-[150px] right-[120px]">
            <div className="min-w-full h-fit">
                <p className="text-md font-semibold w-full">Total Balance</p>
                <div className="flex justify-between items-center w-[50%]">
                    <p className="text-md font-semibold">$4,200</p>
                    <span className="text-md font-[400] text-[#00E1F0]">+14%</span>
                </div>
            </div>

            <ul className="text-[9px] h-fit w-fit font-[200] text-[#718EBF] flex flex-col mt-[2px]">
                <li className='pt-[2px]'>10k</li>
                <li className='pt-[2px]'>4k</li>
                <li className='pt-[2px]'>2k</li>
                <li className='pt-[2px] inline-flex min-w-full h-fit flex-row'>0
                
                <div className="min-w-full h-fit ">
                    <ul className="text-[9px] font-[200] text-[#718EBF] flex flex-row justify-between">
                        <li className='pl-[2px]'>10k</li>
                        <li className='pl-[2px]'>4k</li>
                        <li className='pl-[2px]'>2k</li>
                        <li className='pl-[2px]'>0</li>
                    </ul>
                </div>
                
                </li>


            </ul>



        </div>
    )
}

export default Card