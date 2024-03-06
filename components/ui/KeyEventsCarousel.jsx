import React from "react";
import KeyEvent1 from "@/assets/images/keyEvent1.png";
import Image from "next/image";

const KeyEventsCarousel = () => {
  return (
    <div className="w-[800px] flex gap-2 overflow-x-scroll md:gap-4">
      <div className="p-[10px] bg-[#74c7ff4e] rounded-md md:p-[20px] flex min-w-[300px] sm:min-w-[400px] md:min-w-[500px]">
        <div className="w-[25px] h-[25px]  sm:w-[35px] sm:h-[35px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full overflow-hidden">
          <Image src={KeyEvent1} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col gap-2 pl-2 flex-1">
          <p className="font-semibold text-[12px] sm:text-[14px] md:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            rerum accusamus velit quas quos
          </p>
          <p className="text-[#0000008c] text-[10px] sm:text-[12px] md:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            nihil consequuntur et tempore, hic, nostrum iste sit obcaecati,
            aspernatur commodi saepe cum nobis minus aliquam itaque quod optio
            aspernatur commodi saepe cum
          </p>
        </div>
      </div>

      <div className="p-[10px] bg-[#74c7ff4e] rounded-md md:p-[20px] flex min-w-[300px] sm:min-w-[400px] md:min-w-[500px]">
        <div className="w-[25px] h-[25px]  sm:w-[35px] sm:h-[35px] md:w-[50px] md:h-[50px] flex items-center justify-center rounded-full overflow-hidden">
          <Image src={KeyEvent1} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col gap-2 pl-2 flex-1">
          <p className="font-semibold text-[12px] sm:text-[14px] md:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            rerum accusamus velit quas quos
          </p>
          <p className="text-[#0000008c] text-[10px] sm:text-[12px] md:text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            nihil consequuntur et tempore, hic, nostrum iste sit obcaecati,
            aspernatur commodi saepe cum nobis minus aliquam itaque quod optio
            aspernatur commodi saepe cum
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyEventsCarousel;
