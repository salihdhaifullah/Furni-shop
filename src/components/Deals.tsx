import { BsFire } from "react-icons/bs";
import { TbSquareRotatedFilled } from "react-icons/tb";

const Deals = () => {
  return (
    <div className="py-10 flex flex-row justify-evenly items-center">

      <div className="flex flex-col gap-1 w-[18vw]">
        <div className="text-4xl flex-col flex text-center justify-center items-start">
          <div className="flex-row flex gap-1 justify-center items-center">
            <span>Hot</span>
            <BsFire className="text-orange-600 rounded-md p-1 bg-orange-50" />
          </div>
          <span>deals for you</span>
        </div>

        <p className="text-xs text-gray-600">Online shopping for retail sales direct to consumers</p>
      </div>


      <div className="flex flex-col w-[18vw] gap-4">
      <TbSquareRotatedFilled className="text-2xl"/>
        <h3 className="text-xl flex-col flex text-center justify-center items-start">1.5% cashback</h3>
        <p className="text-xs text-gray-600">Online shopping for retail sales direct to consumers</p>
      </div>

      <div className="flex flex-col w-[18vw] gap-4">
      <TbSquareRotatedFilled className="text-2xl"/>
        <h3 className="text-xl flex-col flex text-center justify-center items-start">30-day terms</h3>
        <p className="text-xs text-gray-600">Online shopping for retail sales direct to consumers</p>
      </div>

      <div className="flex flex-col w-[18vw] gap-4">
        <TbSquareRotatedFilled className="text-2xl"/>
        <h3 className="text-xl flex-col flex text-center justify-center items-start">Save money</h3>
        <p className="text-xs text-gray-600">Online shopping for retail sales direct to consumers</p>
      </div>

    </div>
  )
}

export default Deals