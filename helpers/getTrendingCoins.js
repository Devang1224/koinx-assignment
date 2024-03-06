import axios from "axios";

export default async function fetchAllCoins(currencyCode) {

  const temp = [];
  try {
    const data = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    data.data.coins.map((coin) => {
      temp.push({
        name:coin.item.name,
        symbol: coin.item.symbol,
        image: coin.item.large,
        changePerc:coin.item.data.price_change_percentage_24h[currencyCode].toFixed(2),
        sparkline: coin.item.data.sparkline,
        price: coin.item.data.price,
      });
    });
    return temp;
  } catch (err) {
    console.log(err);
  }
}
