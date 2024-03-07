"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

const BreadCrumbs = () => {
  const pathName = usePathname().split("/").filter(Boolean);
  const pathLength = pathName.length;

  return (
    <div className=" p-4 ml-[4px] xl:ml-[40px] text-[14px] sm:text-[16px] flex items-center ">
      <Link
        href={"/"}
        className={` ${
          pathLength == 0 ? "text-black" : "text-[#0000007e]"
        } font-medium`}
      >
        Cryptocurrencies
      </Link>

      {pathName?.map((item, index) => (
        <p className="px-2 flex gap-2 items-center" key={index}>
          <p className="text-[#0000007e]">
            <FaAnglesRight />
          </p>
          <p className="text-black font-medium capitalize">{item}</p>
        </p>
      ))}
    </div>
  );
};

export default BreadCrumbs;
