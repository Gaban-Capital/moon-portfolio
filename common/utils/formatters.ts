interface Coin {
  name: string;
  symbol: string;
  price: string;
}

export const pluckCoinNames = (coins: Coin[]) => coins.map(coin => coin.name);

export const formatToDollars = (value: number): string => {
  if (typeof value !== 'number') {
    return 'Invalid input';
  }

  return `${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
};
