interface Coin {
  name: string;
  symbol: string;
  price: string;
}

export const pluckCoinNames = (coins: Coin[]) => coins.map(coin => coin.name);
