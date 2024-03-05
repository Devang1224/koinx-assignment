"use client";

import React from "react";
import { useCurrencyData } from "@/context/CurrencyDataProvider";

import { useRouter } from "next/navigation";
import ChartSection from "@/components/sections/ChartSection";
import Details from "@/components/sections/Details";

const page = () => {
  // const value = useCurrencyData();
  const router = useRouter();
  console.log(router.query);

  return (
    <div className="">
      <ChartSection />
      <Details />
    </div>
  );
};

export default page;
