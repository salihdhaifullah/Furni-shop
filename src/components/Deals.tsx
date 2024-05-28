import { BsFire } from "react-icons/bs";
import { MdOutlineDiamond } from "react-icons/md";

const Deals = () => {
  return (
    <div className="flex flex-row lg:flex-nowrap flex-wrap justify-center md:justify-between gap-12">

      <div className="flex flex-col gap-4 mb-10 sm:mb-0 w-full sm:w-[45%] lg:w-[25%] max-w-80">
        <div className="md:text-5xl text-4xl flex-col flex justify-center items-center sm:items-start text-primary font-bold">
          <div className="flex-row flex gap-1 justify-center items-center">
            <span>Hot</span>
              <BsFire className="text-orange-600 rounded-md p-1 bg-orange-50 text-4xl" />
          </div>
          <span>deals for you</span>
        </div>

        <p className="text-sm text-gray-600 text-center sm:text-start">Online shopping for retail sales direct to consumers</p>
      </div>

      <div className="flex flex-col gap-4 justify-end items-center sm:items-start w-full sm:w-[45%] lg:w-[25%] max-w-80">
      <MdOutlineDiamond className="text-2xl text-primary"/>
        <h3 className="text-xl flex-col flex text-center justify-center items-start font-bold">1.5% cashback</h3>
        <p className="text-sm text-gray-600 text-center sm:text-start">Online shopping for retail sales direct to consumers</p>
      </div>

      <div className="flex flex-col gap-4 justify-end items-center sm:items-start w-full sm:w-[45%] lg:w-[25%] max-w-80">
      <MdOutlineDiamond className="text-2xl text-primary"/>
        <h3 className="text-xl flex-col flex text-center justify-center items-start font-bold">30-day terms</h3>
        <p className="text-sm text-gray-600 text-center sm:text-start">Online shopping for retail sales direct to consumers</p>
      </div>

      <div className="flex flex-col gap-4 justify-end items-center sm:items-start w-full sm:w-[45%] lg:w-[25%] max-w-80">
        <MdOutlineDiamond className="text-2xl text-primary"/>
        <h3 className="text-xl flex-col flex text-center justify-center items-start font-bold">Save money</h3>
        <p className="text-sm text-gray-600 text-center sm:text-start">Online shopping for retail sales direct to consumers</p>
      </div>

    </div>
  )
}

export default Deals