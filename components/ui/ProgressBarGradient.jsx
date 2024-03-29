import React from "react";
import Image from "next/image";
import ArrowVectorBlack from "@/assets/ArrowVectorBlack.svg";

const ProgressBarGradient = () => {
  return (
    <div className="relative flex-grow h-[6px] bg-gradient-heat rounded-lg mx-4 sm:mx-8">
      <div className="absolute  flex flex-col top-[6px] gap-2 left-[70%] items-center transform -translate-x-1/2">
        <Image src={ArrowVectorBlack} alt="|" width={12} height={12} />
        <p className="text-[14px] text-[#000000cc] ">$48,637.83</p>
      </div>
    </div>
  );
};

export default ProgressBarGradient;
