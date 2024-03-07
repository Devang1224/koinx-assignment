"use client";

import React from "react";
import { useCurrencyData } from "@/context/CurrencyDataProvider";

import ChartSection from "@/components/sections/ChartSection";
import Details from "@/components/sections/Details";
import { useParams } from "next/navigation";
import AllCoins from "@/components/sections/AllCoins";
import BreadCrumbs from "@/components/ui/BreadCrumbs";
import { CalendarRange } from "lucide-react";

const page = () => {
  const { coinData } = useCurrencyData();


  return (
    <div className="">
      <ChartSection data={coinData} />
      <Details />
      <AllCoins />
    </div>
  );
};

export default page;
