import React from "react";
import HomeStore from "../stores/homeStore";
import { Link } from "react-router-dom";

export default function Home() {
  const store = HomeStore;

  React.useEffect(() => {
    store.fetchCoins(); // Make sure fetchCoins properly sets the coins array
  }, []);

  return (
    <div>
      {store.coins &&
        store.coins.map((coin) => (
          <div key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name}</Link>
          </div>
        ))}
    </div>
  );
}
