import Image from "next/image";
import React from "react";

const TeamCard = ({ item }) => {
  return (
    <div className="flex flex-col items-center gap-4 py-2 px-4 bg-[#69b8f94c] rounded-lg md:flex-row md:gap-6">
      <div className="flex flex-col items-center">
        <Image
          src={item.image}
          className="object-cover w-[90px] h-[100px] rounded-lg"
          layout="fixed"
        />
        <p className="text-[14px] font-semibold mt-2">{item.name}</p>
        <p className="text-[12px] text-[#0000008b]">{item.designation}</p>
      </div>

      <div className="flex-1">
        <p className="text-[14px]">{item.desc}</p>
      </div>
    </div>
  );
};

export default TeamCard;
