import React from "react";
import { FaStar } from "react-icons/fa";
import { IoEyeOutline, IoBagHandleSharp } from "react-icons/io5";

const NewHome = () => {
  return (
    <div className=" px-4 py-5">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex gap-5">
            <div className="h-14 w-14 overflow-hidden rounded-full bg-gray-100 shadow-lg">
              <img
                src="/Bitcoin.png"
                loading="lazy"
                alt="Bitcoin"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <h1 className="text-2xl font-bold text-black sm:text-5xl text-left md:mb-5 md:text-5xl">
              Bitcoin (BTC)
            </h1>
          </div>
          <div className="flex gap-3">
            <p className="font-medium text-gray-500 text-4xl">$ 29,987.25</p>
            <p className="font-normal text-green-600 text-3xl">+1.46%</p>
          </div>
          <p className="font-medium mt-2 text-gray-500 text-lg">
            At 16:46:00 EST
          </p>
        </div>
        <div className="flex flex-col items-end md:w-1/2">
          <div class="md:ml-40 flex flex-col md:flex-row md:gap-20 ">
            <div class="space-x-5 flex flex-wrap md:flex-nowrap">
              <button class="py-2 px-3 text-xl font-semibold rounded-full bg-blue-500 text-white flex items-center">
                <FaStar class="mr-3" />
                Follow
              </button>
              <button class="py-1 px-3 text-base rounded-lg bg-gray-800 text-white flex items-center mt-4 md:mt-0">
                <IoEyeOutline class="mr-3" />
                Watchlist
              </button>
              <button class="py-1 px-3 text-base rounded-lg bg-gray-800 text-white flex items-center mt-4 md:mt-0">
                <IoBagHandleSharp class="mr-3" />
                Portfolio
              </button>
            </div>
            <div class="space-x-5 flex flex-wrap md:flex-nowrap mt-4 md:mt-0">
              <button class="py-1 px-3 text-base rounded-lg bg-gray-800 text-white flex items-center">
                <IoBagHandleSharp class="mr-3" />
                Buy/Sell
              </button>
              <button class="py-1 px-3 text-base rounded-lg bg-gray-800 text-white flex items-center mt-4 md:mt-0">
                <IoBagHandleSharp class="mr-3" />
                Stake
              </button>
              <button class="py-1 px-3 text-base rounded-lg bg-gray-800 text-white flex items-center mt-4 md:mt-0">
                <IoBagHandleSharp class="mr-3" />
                Lend
              </button>
            </div>
          </div>

          <p className="font-normal mt-10 text-gray-500 text-lg">
            <b>Bitcoin (BTC)</b> is a cryptocurrency, a virtual currency
            designed to act as money and a form of payment outside the control
            of any one person, group, or entity, thus removing the need for
            third-party involvement in financial transactions. It is rewarded to
            blockchain miners for the work done to verify transactions and can
            be purchased on several exchanges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewHome;
