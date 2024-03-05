import React from "react";
import ProgressBarGradient from "../ui/ProgressBarGradient";

const Performance = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-8">
        <h1 className="text-[24px] font-semibold">Performance</h1>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2 items-start">
            <p className="text-[14px] text-[#00000095]">Today's Low</p>
            <p className="text-[18px] text-[#000000c8] font-medium">
              46,930.22
            </p>
          </div>
          <ProgressBarGradient />
          <div className="flex flex-col gap-2 items-end">
            <p className="text-[14px] text-[#00000095]">Today's High</p>
            <p className="text-[18px] text-[#000000c8] font-medium">
              49,343.83
            </p>
          </div>
        </div>
        <div>sdfdsf</div>
      </div>
      <div>fundamentals</div>
    </div>
  );
};

export default Performance;
