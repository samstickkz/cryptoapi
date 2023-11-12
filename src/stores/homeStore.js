import axios from "axios";
import { create } from "zustand";

const HomeStore = create((set) => ({
  // create state to store coins
  coins: [],

  // fetch coins with axios from crypto api trending coins
  fetchCoins: async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const coins = res.data.coins.map((coin) => {
      return {
        // add properties to the coin object as needed
        name: coin.item.name,
        id: coin.item.id,
        symbol: coin.item.symbol,
        image: coin.item.large,
        price: coin.item.price_btc,
      };
    });

    set({ coins });
  },
}));

export default HomeStore;
