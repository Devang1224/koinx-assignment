import React from "react";
import ProgressBarGradient from "../ui/ProgressBarGradient";
import Fundamentals from "./Fundamentals";

const Performance = () => {
  return (
    <div className="section-container flex flex-col gap-10">
      <div className="flex flex-col gap-8">
        <p className="text-[24px] font-semibold">Performance</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-[12px] text-[#00000095] sm:text-[14px]">
              Today's Low
            </p>
            <p className="text-[16px] text-[#000000c8] font-medium sm:text-[18px]">
              46,930.22
            </p>
          </div>
          <ProgressBarGradient />
          <div className="flex flex-col gap-2 items-end">
            <p className="text-[12px] text-[#00000095] sm:text-[14px]">
              Today's High
            </p>
            <p className="text-[16px] text-[#000000c8] font-medium sm:text-[18px]">
              49,343.83
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-[12px] text-[#00000095] sm:text-[14px]">
              52W Low
            </p>
            <p className="text-[16px] text-[#000000c8] font-medium sm:text-[18px]">
              16,930.22
            </p>
          </div>
          <div className="flex-grow h-[6px] bg-gradient-heat  rounded-lg mx-4 sm:mx-8" />
          <div className="flex flex-col gap-2 items-end">
            <p className="text-[12px] text-[#00000095] sm:text-[14px]">
              52W High
            </p>
            <p className="text-[16px] text-[#000000c8] font-medium sm:text-[18px]">
              49,743.83
            </p>
          </div>
        </div>
      </div>

      <Fundamentals />
    </div>
  );
};

export default Performance;
