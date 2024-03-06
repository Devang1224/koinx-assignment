import React from "react";
import ToolTip from "../ui/ToolTip";

const Fundamentals = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <h1 className="text-[20px] font-semibold">Fundamentals</h1>
        <ToolTip />
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-20">
        <div className="flex flex-col flex-grow">
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086] text-[14px] sm:text-[16px]">
              Bitcoin Price
            </p>
            <p className=" font-medium text-[12px] sm:text-[14px]">
              $16,815.46
            </p>
          </div>
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086] text-[14px] sm:text-[16px]">
              24 Low / 24h High
            </p>
            <p className=" font-medium text-[12px] sm:text-[14px]">
              $16,382.07 / $16,874.12
            </p>
          </div>

          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086] text-[14px] sm:text-[16px]">
              7d Low / 7d High
            </p>
            <p className=" font-medium text-[12px] sm:text-[14px]">
              $16,382.07 / $16,874.12
            </p>
          </div>
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086] text-[14px] sm:text-[16px]">
              Trading Volume
            </p>
            <p className=" font-medium text-[12px] sm:text-[14px]">
              $23,249,202,782
            </p>
          </div>
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086] text-[14px] sm:text-[16px]">
              Market Cap Rank
            </p>
            <p className="font-medium text-[12px] sm:text-[14px]">#1</p>
          </div>
        </div>

        <div className="flex flex-col flex-grow ">
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086] text-[14px] sm:text-[16px]">
              Market Cap
            </p>
            <p className="font-medium text-[12px] sm:text-[14px]">
              $323,507,290,047
            </p>
          </div>
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086] text-[14px] sm:text-[16px]">
              Market Cap Dominance
            </p>
            <p className=" font-medium text-[12px] sm:text-[14px]">38.343%</p>
          </div>

          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086] text-[14px] sm:text-[16px]">
              Volume / Market Cap
            </p>
            <p className=" font-medium text-[12px] sm:text-[14px]">0.0718</p>
          </div>
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086] text-[14px] sm:text-[16px]">
              All-Time High
            </p>
            <div className="text-end">
              <div className="flex gap-4 justify-end text-[12px] sm:text-[14px]">
                <p className="font-medium">$69,044.77</p>
                <p className="font-medium  text-red-500">-75.6%</p>
              </div>
              <p className="text-[10px] sm:text-[12px]">
                Nov 10, 2021 (about 1 year)
              </p>
            </div>
          </div>
          <div className="flex flex-grow justify-between py-4 items-center borderBottom h-[50px]">
            <p className="font-medium text-[#00000086] text-[14px] sm:text-[16px]">
              All-Time Low
            </p>
            <div className="text-end">
              <div className="flex gap-4 justify-end text-[12px] sm:text-[14px]">
                <p className="font-medium">$67.81</p>
                <p className="font-medium  text-green-500">24729.1%</p>
              </div>
              <p className="text-[10px] sm:text-[14px]">
                Jul 06, 2013 (over 9 year)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
