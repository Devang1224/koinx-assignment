import React from "react";
import ProfitIndicator from "./ProfitIndicator";
import Image from "next/image";
import BitcoinLogo from "@/assets/Bitcoin.svg.webp";

const TrendingCoins = () => {
  return (
    <div className="section-container mt-5 p-4 flex flex-col gap-4">
      <p className="text-[20px] font-semibold">Trending Coins (24h)</p>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Image src={BitcoinLogo} width={24} alt="bitcoin logo" />
            <p className="font-medium">Bitcoin (BTC)</p>
          </div>
          <ProfitIndicator text="8.21%" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Image src={BitcoinLogo} width={24} alt="bitcoin logo" />
            <p className="font-medium">Bitcoin (BTC)</p>
          </div>
          <ProfitIndicator text="8.21%" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Image src={BitcoinLogo} width={24} alt="bitcoin logo" />
            <p className="font-medium">Bitcoin (BTC)</p>
          </div>
          <ProfitIndicator text="8.21%" />
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;
