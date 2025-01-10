import axios from "axios";

export default async function getCurrentData(coinName,currencyCode){


if(!coinName)return;

 try{
      const currencyData = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinName}?localization=false`)
      return {
        name:currencyData.data.name,
        symbol:currencyData.data.symbol,
        image:currencyData.data.image.small,
        rank:currencyData.data.market_cap_rank,
        price:currencyData.data.market_data.current_price[currencyCode].toFixed(2),
        changePerc:currencyData.data.market_data.price_change_percentage_24h.toFixed(2)
      }
      
    }
 catch(err){
   console.log(err);
 }
}