"use client";

import getCurrentData from "@/services/getCurrentData";
import fetchAllCoins from "@/services/getTrendingCoins";
import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

const currencyData = createContext(null);

const CurrencyDataProvider = ({ children }) => {
  const [coinData, setCoinData] = useState({
    name: "",
    symbol: "",
    image: "",
    rank: "",
    price: "",
    changePerc: 0,
  });
  const [trendingCoinsList, setTrendingCoinsList] = useState([]);
  const [currencyCode, setCurrencyCode] = useState("usd");

  const pathName = usePathname().split("/")[1];

  useEffect(() => {
    async function fetchData() {
      try{
          const data = await getCurrentData(pathName, currencyCode.toLowerCase());
          setCoinData(data);

          const trendingData = await fetchAllCoins(currencyCode);
          setTrendingCoinsList(trendingData)
      }
      catch(err){
      console.log(err);
      }
    
      

    }

    fetchData();
  }, [currencyCode]);

  return (
    <currencyData.Provider value={{ coinData, currencyCode, trendingCoinsList}}>
      {children}
    </currencyData.Provider>
  );
};

export default CurrencyDataProvider;

export const useCurrencyData = () => {
  return useContext(currencyData);
};
