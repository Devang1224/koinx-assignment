'use client';

import getCurrentData from '@/helpers/getCurrentData';
import { usePathname } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react'


const currencyData = createContext(null);

const CurrencyDataProvider = ({children}) => {

const [coinData,setCoinData] = useState({
   name:"",
   symbol:"",
   image:"",
   rank:"",
   price:"",
   changePerc:0
});
const [currencyCode,setCurrencyCode] = useState("usd")
const pathName = usePathname().split('/')[1];



useEffect(()=>{

    async function fetchData(){
        
         const data = await getCurrentData(pathName,currencyCode.toLowerCase());
           setCoinData(data);

   }

fetchData();   
               

},[])


  return (
     <currencyData.Provider value={{coinData,currencyCode}}>
        {children}
     </currencyData.Provider>
  )
}

export default CurrencyDataProvider

export const useCurrencyData = ()=>{
   return useContext(currencyData);
}