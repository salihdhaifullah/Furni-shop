import { BsFire, BsPiggyBank } from "react-icons/bs";
import { FaRegCalendar, FaRegStar } from "react-icons/fa";

const Deals = () => {
  return (
    <div className="gap-10 sm:justify-between w-full flex sm:flex-row flex-col flex-wrap sm:items-end items-center justify-center pt-14">

      <div className="flex flex-col gap-4 sm:mb-0 mb-2 w-60 items-center sm:items-start">
        <div className="flex-col flex justify-center title-font text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
          <div className="flex-row flex gap-1 items-center sm:justify-start justify-center">
            <span>Hot</span>
            <BsFire className="text-orange-600 rounded-md p-1 bg-orange-50 text-4xl" />
          </div>
          <span>deals for you</span>
        </div>

        <p className="text-sm text-gray-600 sm:text-start text-center">Online shopping for retail sales direct to consumers</p>
      </div>

      <div className="flex flex-col gap-4 w-60 items-center sm:items-start justify-end h-full">
        <FaRegStar className="text-2xl text-primary" />
        <h3 className="text-xl flex-col flex text-center justify-center items-start font-bold title-font text-primary">1.5% cashback</h3>
        <p className="text-sm text-gray-600 sm:text-start text-center">Shop smarter and save on everyday purchases from your favorite online retailers</p>
      </div>

      <div className="flex flex-col gap-4 w-60 items-center sm:items-start justify-end h-full">
        <FaRegCalendar className="text-2xl text-primary" />
        <h3 className="text-xl flex-col flex text-center justify-center items-start font-bold title-font text-primary">30-day terms</h3>
        <p className="text-sm text-gray-600 sm:text-start text-center">Skip the upfront cost and enjoy your purchase now! Don't worry about immediate payment</p>
      </div>

      <div className="flex flex-col gap-4 w-60 items-center sm:items-start justify-end h-full">
        <BsPiggyBank className="text-2xl text-primary" />
        <h3 className="text-xl flex-col flex text-center justify-center items-start font-bold title-font text-primary">Save money</h3>
        <p className="text-sm text-gray-600 sm:text-start text-center">Make your money go further! Find everyday deals and discounts with our program</p>
      </div>

    </div>
  )
}

export default Deals
