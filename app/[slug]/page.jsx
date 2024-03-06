"use client";

import React from "react";
import { useCurrencyData } from "@/context/CurrencyDataProvider";

import ChartSection from "@/components/sections/ChartSection";
import Details from "@/components/sections/Details";
import { useParams } from "next/navigation";

const page = () => {
  const { coinData } = useCurrencyData();
  const params = useParams();
  console.log(params.slug);

  return (
    <div className="">
      <ChartSection data={coinData} />
      <Details />
    </div>
  );
};

export default page;
