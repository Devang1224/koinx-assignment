import { useCurrencyData } from "@/context/CurrencyDataProvider";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CoinsCard from "../ui/CoinsCard";

const AllCoins = () => {
  const [trendingCoinsList, setTrendingCoinsList] = useState([]);
  const { currencyCode } = useCurrencyData();

  useEffect(() => {
    async function fetchAllCoins() {
      const temp = [];

      try {
        const data = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        data.data.coins.map((coin) => {
          temp.push({
            symbol: coin.item.symbol,
            image: coin.item.large,
            changePerc:
              coin.item.data.price_change_percentage_24h[currencyCode].toFixed(
                2
              ),
            sparkline: coin.item.data.sparkline,
            price: coin.item.data.price,
          });
        });
        temp.shift();
        setTrendingCoinsList(temp);
        console.log(temp);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllCoins();
  }, []);

  return (
    <div className="p-4 bg-white flex flex-col gap-4 xl:w-[100vw] xl:mt-12 xl:absolute xl:left-0 xl:p-[50px]">
      <div className="flex flex-col gap-1 sm:gap-4">
        <p className="text-[22px] font-semibold">You May Also Like</p>
        <div className="w-full flex gap-2 overflow-x-scroll">
          {trendingCoinsList?.map((item, index) => {
            return <CoinsCard item={item} key={index} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-1 sm:gap-4">
        <p className="text-[22px] font-semibold">Trending Coins</p>
        <div className="w-full flex gap-2 overflow-x-auto">
          {trendingCoinsList?.map((item, index) => {
            return <CoinsCard item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllCoins;
