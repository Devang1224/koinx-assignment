

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CoinsCard = ({ item }) => {


  return (
    <div className="border p-2 w-[200px] max-h-[158px] md:min-w-[250px] md:max-h-[158px] md:p-4 rounded-lg" >
      <div className="flex items-center">
        <div className="w-[20px] h-[20px] rounded-full bg-slate-500 overflow-hidden md:w-[26px] md:h-[26px]">
          <Image
            src={item?.image}
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>
        <p className="text-[12px] md:text-[14px] px-1 font-medium">
          {item?.symbol}
        </p>
        {item.changePerc >= 0 ? (
          <p className="px-1 text-[10px] md:text-[12px] bg-[#9de7b662] text-[#6fb787] rounded">
            {`+${item?.changePerc}`}
          </p>
        ) : (
          <p className="px-1 text-[10px] md:text-[12px] bg-[#ff585862] text-[#e74747] rounded">
            {`${item?.changePerc}`}
          </p>
        )}
      </div>
      <div className="pt-2">
        <p className="text-[18px] font-medium">
          {item?.price.length > 8 ? "$5.52" : item?.price.toFixed(5)}
        </p>
        <div className="w-[80%]">
          <Image
            src={item?.sparkline}
            width={10}
            height={40}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CoinsCard;
