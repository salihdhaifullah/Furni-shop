import { BsFire } from "react-icons/bs";
import { MdOutlineDiamond } from "react-icons/md";

const Deals = () => {
  return (
    <div className="gap-10 md:justify-between grid lg:grid-cols-4 md:grid-cols-2 justify-center">

      <div className="md:justify-center lg:justify-start flex">
        <div className="flex flex-col gap-4 mb-10 md:mb-0 w-60">
          <div className="flex-col flex justify-center items-center md:items-start title-font text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
            <div className="flex-row flex gap-1 justify-center items-center">
              <span>Hot</span>
              <BsFire className="text-orange-600 rounded-md p-1 bg-orange-50 text-4xl" />
            </div>
            <span>deals for you</span>
          </div>

          <p className="text-sm text-gray-600 text-center md:text-start">Online shopping for retail sales direct to consumers</p>
        </div>
      </div>

      <div className="md:justify-center flex">
        <div className="flex flex-col gap-4 justify-end items-center md:items-start w-60">
          <MdOutlineDiamond className="text-2xl text-primary" />
          <h3 className="text-xl flex-col flex text-center justify-center items-start font-bold">1.5% cashback</h3>
          <p className="text-sm text-gray-600 text-center md:text-start">Online shopping for retail sales direct to consumers</p>
        </div>
      </div>



      <div className="md:justify-center flex">

        <div className="flex flex-col gap-4 justify-end items-center md:items-start w-60">
          <MdOutlineDiamond className="text-2xl text-primary" />
          <h3 className="text-xl flex-col flex text-center justify-center items-start font-bold">30-day terms</h3>
          <p className="text-sm text-gray-600 text-center md:text-start">Online shopping for retail sales direct to consumers</p>
        </div>
      </div>

      <div className="md:justify-center flex">

        <div className="flex flex-col gap-4 justify-end items-center md:items-start w-60">
          <MdOutlineDiamond className="text-2xl text-primary" />
          <h3 className="text-xl flex-col flex text-center justify-center items-start font-bold">Save money</h3>
          <p className="text-sm text-gray-600 text-center md:text-start">Online shopping for retail sales direct to consumers</p>
        </div>
      </div>

    </div>
  )
}

export default Deals