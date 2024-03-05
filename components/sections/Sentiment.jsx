import React from "react";
import ToolTip from "../ui/ToolTip";

const Sentiment = () => {
  return (
    <div className="container mt-5">
      <div className="">
        <p className="text-[24px] font-semibold">Sentiment</p>

        <div className="py-4">
          <div className="flex gap-4 items-center">
            <h1 className="text-[18px] font-semibold text-[#000000b7]">
              Key Events
            </h1>
            <ToolTip />
          </div>
        </div>

        <div>
          <div className="flex gap-4 items-center">
            <h1 className="text-[18px] font-semibold text-[#000000b7]">
              Analyst Estimates
            </h1>
            <ToolTip />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
